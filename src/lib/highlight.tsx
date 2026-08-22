import type { ReactNode } from "react";

type Kind =
  | "kw"
  | "fn"
  | "str"
  | "num"
  | "cmt"
  | "punct"
  | "prop"
  | "plain";

const KEYWORDS = new Set([
  "import",
  "from",
  "as",
  "const",
  "let",
  "var",
  "await",
  "async",
  "new",
  "return",
  "print",
  "class",
  "def",
  "function",
  "export",
  "default",
  "if",
  "else",
  "for",
  "while",
  "true",
  "false",
  "null",
  "undefined",
  "True",
  "False",
  "None",
  "type",
  "interface",
  "curl",
  "and",
  "or",
  "not",
  "in",
  "with",
  "yield",
  "try",
  "except",
  "finally",
]);

const CLASS: Record<Kind, string> = {
  kw: "text-code-kw",
  fn: "text-code-fn",
  str: "text-code-str",
  num: "text-code-num",
  cmt: "text-code-cmt",
  punct: "text-code-punct",
  prop: "text-fg/85",
  plain: "text-fg/88",
};

function isIdentStart(c: string) {
  return /[A-Za-z_$]/.test(c);
}
function isIdent(c: string) {
  return /[A-Za-z0-9_$]/.test(c);
}
function isTypeName(word: string) {
  return /^[A-Z]/.test(word);
}

function peekNonWs(src: string, i: number) {
  while (i < src.length && /\s/.test(src[i] ?? "")) i += 1;
  return src[i] ?? "";
}

export function highlight(code: string): ReactNode[] {
  const out: ReactNode[] = [];
  let i = 0;
  let n = 0;

  const push = (value: string, kind: Kind) => {
    if (!value) return;
    out.push(
      <span key={n++} className={CLASS[kind]}>
        {value}
      </span>,
    );
  };

  while (i < code.length) {
    const c = code[i] ?? "";

    if (c === "#" || (c === "/" && code[i + 1] === "/")) {
      const end = code.indexOf("\n", i);
      const j = end === -1 ? code.length : end;
      push(code.slice(i, j), "cmt");
      i = j;
      continue;
    }

    if (c === '"' || c === "'" || c === "`") {
      let j = i + 1;
      while (j < code.length) {
        if (code[j] === "\\") {
          j += 2;
          continue;
        }
        if (code[j] === c) {
          j += 1;
          break;
        }
        j += 1;
      }
      push(code.slice(i, j), "str");
      i = j;
      continue;
    }

    if (c === "$" && isIdentStart(code[i + 1] ?? "")) {
      let j = i + 1;
      while (j < code.length && isIdent(code[j] ?? "")) j += 1;
      push(code.slice(i, j), "num");
      i = j;
      continue;
    }

    if (/\d/.test(c) && (i === 0 || !isIdent(code[i - 1] ?? ""))) {
      let j = i;
      while (j < code.length && /[\d.]/.test(code[j] ?? "")) j += 1;
      push(code.slice(i, j), "num");
      i = j;
      continue;
    }

    if (isIdentStart(c)) {
      let j = i + 1;
      while (j < code.length && isIdent(code[j] ?? "")) j += 1;
      const word = code.slice(i, j);
      const next = peekNonWs(code, j);
      const prev = code[i - 1] ?? "";
      let kind: Kind = "plain";
      if (KEYWORDS.has(word)) kind = "kw";
      else if (next === "(") kind = isTypeName(word) ? "plain" : "fn";
      else if (prev === ".") kind = "prop";
      push(word, kind);
      i = j;
      continue;
    }

    if ("(){}[]=:,.\\-+*/<>|&!?".includes(c)) {
      let j = i;
      while (j < code.length && "(){}[]=:,.\\-+*/<>|&!?".includes(code[j] ?? ""))
        j += 1;
      push(code.slice(i, j), "punct");
      i = j;
      continue;
    }

    push(c, "plain");
    i += 1;
  }

  return out;
}

export function highlightLines(code: string): ReactNode[][] {
  return code.split("\n").map((line) => (line ? highlight(line) : []));
}
