// Public habilitação data for /govtech.
// Source of truth: https://docs.unfld.com.br (index at /llms.txt), reviewed 10/11/2026.
// The page renders this snapshot on the server and refreshes validity from the
// hub's renovacoes.js in the browser. Personal documents (02_Representante) and
// the internal Resumo.txt are intentionally not linked.

export const DOCS_HUB = "https://docs.unfld.com.br";
export const DOCS_SNAPSHOT = "2026-11-10";

export const docsUrl = (path: string) => `${DOCS_HUB}/${path}`;

export type UfKind = "hq" | "registered" | "progress" | "remote";

export type Uf = {
  code: string;
  name: string;
  row: number;
  col: number;
  kind: UfKind;
  /** Registration or certificate shown when the state is selected. */
  note?: string;
};

// Hex tile map of the federation. Odd rows shift half a cell to the right.
export const UFS: readonly Uf[] = [
  { code: "RR", name: "Roraima", row: 0, col: 1, kind: "remote" },
  { code: "AP", name: "Amapá", row: 0, col: 3, kind: "remote" },
  { code: "AM", name: "Amazonas", row: 1, col: 1, kind: "remote" },
  { code: "PA", name: "Pará", row: 1, col: 2, kind: "remote" },
  { code: "MA", name: "Maranhão", row: 1, col: 3, kind: "remote" },
  { code: "CE", name: "Ceará", row: 1, col: 4, kind: "remote" },
  { code: "RN", name: "Rio Grande do Norte", row: 1, col: 5, kind: "remote" },
  { code: "AC", name: "Acre", row: 2, col: 0, kind: "remote" },
  { code: "RO", name: "Rondônia", row: 2, col: 1, kind: "remote" },
  { code: "MT", name: "Mato Grosso", row: 2, col: 2, kind: "remote" },
  { code: "TO", name: "Tocantins", row: 2, col: 3, kind: "remote" },
  { code: "PI", name: "Piauí", row: 2, col: 4, kind: "remote" },
  { code: "PE", name: "Pernambuco", row: 2, col: 5, kind: "remote" },
  { code: "PB", name: "Paraíba", row: 2, col: 6, kind: "remote" },
  { code: "MS", name: "Mato Grosso do Sul", row: 3, col: 1, kind: "remote" },
  { code: "GO", name: "Goiás", row: 3, col: 2, kind: "remote" },
  { code: "DF", name: "Distrito Federal", row: 3, col: 3, kind: "registered", note: "SICAF · CRC" },
  { code: "BA", name: "Bahia", row: 3, col: 4, kind: "remote" },
  { code: "AL", name: "Alagoas", row: 3, col: 5, kind: "remote" },
  { code: "SP", name: "São Paulo", row: 4, col: 2, kind: "hq", note: "CCM 0.039.149-2" },
  { code: "MG", name: "Minas Gerais", row: 4, col: 3, kind: "registered", note: "CAGEF · CRC nº 239013" },
  { code: "ES", name: "Espírito Santo", row: 4, col: 4, kind: "remote" },
  { code: "SE", name: "Sergipe", row: 4, col: 5, kind: "remote" },
  { code: "PR", name: "Paraná", row: 5, col: 1, kind: "progress", note: "GMS · CRC nº 865176/2026" },
  { code: "RJ", name: "Rio de Janeiro", row: 5, col: 3, kind: "remote" },
  { code: "SC", name: "Santa Catarina", row: 6, col: 1, kind: "registered", note: "e-LIC · CCF 53656" },
  { code: "RS", name: "Rio Grande do Sul", row: 7, col: 0, kind: "remote" },
];

export const HEX_COLS = 7;
export const HEX_ROWS = 8;

export type DocCategory = "legal" | "fiscal" | "economic" | "integrity";

export type HabDoc = {
  id: string;
  category: DocCategory;
  /** Official document name, kept in Portuguese in every locale. */
  official: string;
  issuer: string;
  path: string;
  issued: string | null;
  expires: string | null;
  /** The issuer prints no end date; the hub calculates it from the legal term. */
  calculated?: boolean;
  number?: string;
};

export const HAB_DOCS: readonly HabDoc[] = [
  {
    id: "D16",
    category: "legal",
    official: "Comprovante de Inscrição e de Situação Cadastral",
    issuer: "Receita Federal",
    path: "01_Empresa/D16_CNPJ_Comprovante_Receita.pdf",
    issued: "2026-11-10",
    expires: null,
  },
  {
    id: "D21",
    category: "legal",
    official: "Quadro de Sócios e Administradores · QSA",
    issuer: "Receita Federal",
    path: "01_Empresa/D21_QSA_Socios_Administradores.pdf",
    issued: "2026-11-10",
    expires: null,
  },
  {
    id: "D12",
    category: "legal",
    official: "Certidão Simplificada",
    issuer: "JUCESP",
    path: "01_Empresa/D12_JUCESP_Certidao_Simplificada.pdf",
    issued: "2026-10-13",
    expires: null,
    number: "302511885",
  },
  {
    id: "D13",
    category: "legal",
    official: "Contrato Social Consolidado · Inteiro Teor",
    issuer: "JUCESP",
    path: "01_Empresa/D13_Contrato_Social_Consolidado_Inteiro_Teor.pdf",
    issued: "2026-11-01",
    expires: null,
    number: "303959973",
  },
  {
    id: "D34",
    category: "fiscal",
    official: "Certidão Positiva com Efeitos de Negativa · Tributos Federais e DAU",
    issuer: "RFB · PGFN",
    path: "03_Certidoes/D34_CND_Federal_Positiva_Efeitos_Negativa.pdf",
    issued: "2026-11-10",
    expires: "2027-05-09",
    number: "F447.16AD.97FA.9229",
  },
  {
    id: "D08",
    category: "fiscal",
    official: "Certidão Negativa de Débitos Tributários · Estado de São Paulo",
    issuer: "SEFAZ-SP · PGE-SP",
    path: "03_Certidoes/D08_CND_Estadual_SP.pdf",
    issued: "2026-11-03",
    expires: "2027-02-01",
    calculated: true,
    number: "8DCFF8329503D",
  },
  {
    id: "D25",
    category: "fiscal",
    official: "Certidão Negativa de Débitos Tributários · Estado do Paraná",
    issuer: "Receita Estadual PR",
    path: "03_Certidoes/D25_CND_Estadual_PR.pdf",
    issued: "2026-11-05",
    expires: "2027-03-05",
    number: "40771417-29",
  },
  {
    id: "D35",
    category: "fiscal",
    official: "Certidão Conjunta de Débitos de Tributos Mobiliários",
    issuer: "Prefeitura de São Paulo",
    path: "03_Certidoes/D35_CND_Municipal_SP_Tributos_Mobiliarios.pdf",
    issued: "2026-11-10",
    expires: "2027-05-09",
    number: "2564088-2026",
  },
  {
    id: "D15",
    category: "fiscal",
    official: "Certificado de Regularidade do FGTS · CRF",
    issuer: "CAIXA",
    path: "03_Certidoes/D15_FGTS_CRF.pdf",
    issued: "2026-11-03",
    expires: "2026-12-02",
    number: "2026110315156606930361",
  },
  {
    id: "D09",
    category: "fiscal",
    official: "Certidão Negativa de Débitos Trabalhistas · CNDT",
    issuer: "Justiça do Trabalho",
    path: "03_Certidoes/D09_CNDT_Trabalhista.pdf",
    issued: "2026-11-10",
    expires: "2027-05-09",
    number: "95208298/2026",
  },
  {
    id: "D19",
    category: "fiscal",
    official: "Ficha de Dados Cadastrais · CCM",
    issuer: "Prefeitura de São Paulo",
    path: "01_Empresa/D19_CCM_Ficha_Cadastral_Sao_Paulo.pdf",
    issued: "2026-11-05",
    expires: "2027-02-05",
  },
  {
    id: "D24",
    category: "economic",
    official: "Demonstrações Contábeis · ECD 2025",
    issuer: "SPED · SERPRO",
    path: "04_Juridico_e_Contabil/D24_Demonstracoes_Contabeis_ECD_2025.pdf",
    issued: "2026-11-03",
    expires: null,
  },
  {
    id: "D10",
    category: "economic",
    official: "Certidão de Falência e Recuperação Judicial",
    issuer: "TJSP",
    path: "04_Juridico_e_Contabil/D10_TJSP_Falencia_Recuperacao.pdf",
    issued: "2026-11-01",
    expires: null,
    number: "5921756",
  },
  {
    id: "D07",
    category: "integrity",
    official: "Certidão Negativa Correcional · ePAD, CGU-PJ, CEIS, CNEP, CEPIM",
    issuer: "CGU",
    path: "03_Certidoes/D07_CGU_CEIS_CNEP_Correcional.pdf",
    issued: "2026-11-10",
    expires: "2026-12-10",
    number: "mRZtzAp0SHmmWLlGdhO8",
  },
  {
    id: "D41",
    category: "integrity",
    official: "Certidão CAFIMP · Fornecedores Impedidos de Licitar",
    issuer: "Governo de Minas Gerais",
    path: "03_Certidoes/D41_CERTIDAO_DO_CADASTRO_DE_FORNECEDORES_IMPEDIDOS_DE_LICITAR_E_CONTRATAR_COM_A_ADMINISTRACAO_.pdf",
    issued: "2026-11-10",
    expires: null,
  },
  {
    id: "D11",
    category: "integrity",
    official: "Certidões Cível e Criminal · eproc",
    issuer: "TJSP",
    path: "04_Juridico_e_Contabil/D11_TJSP_Falencia_Civel_Criminal_Pacote.pdf",
    issued: "2026-11-04",
    expires: null,
  },
];

export type RegistrationKey = "sicaf" | "petrobras" | "mg" | "sc" | "pr" | "caixa";

export type Registration = {
  key: RegistrationKey;
  scope: string;
  number?: string;
  expires?: string;
  active: boolean;
  path: string;
};

export const REGISTRATIONS: readonly Registration[] = [
  {
    key: "sicaf",
    scope: "BR",
    active: true,
    path: "06_Portais/D42_Certificado_de_Registro_Cadastral_CRC.pdf",
  },
  {
    key: "petrobras",
    scope: "BR",
    number: "7000311806-0",
    expires: "2027-11-10",
    active: true,
    path: "06_Portais/D44_CRC_Certificado_de_Registro_Cadastral.pdf",
  },
  {
    key: "mg",
    scope: "MG",
    number: "239013",
    expires: "2027-11-09",
    active: true,
    path: "06_Portais/D45_CERTIFICADO_DE_REGISTRO_CADASTRAL_DO_FORNECEDOR_CRC_Lei_14_133_21.pdf",
  },
  {
    key: "sc",
    scope: "SC",
    number: "53656",
    active: true,
    path: "06_Portais/D40_CERTIFICADO_DE_CADASTRO_DE_FORNECEDORES.pdf",
  },
  {
    key: "pr",
    scope: "PR",
    number: "865176/2026",
    active: false,
    path: "06_Portais/D43_Certificado_de_Registro_Cadastral_Simplificado.pdf",
  },
  {
    key: "caixa",
    scope: "BR",
    active: false,
    path: "06_Portais/D05_CAIXA_Adesao_Licitante_PJ.pdf",
  },
];

export const COMPANY_RECORD = {
  nire: "35268025761",
  ccm: "0.039.149-2",
  cnaePrimary: "6204-0/00",
  cnaeSecondary: ["6201-5/02", "6202-3/00", "6399-2/00", "7020-4/00"],
} as const;

export const HUB_DOCUMENT_COUNT = 45;

export type Portal = {
  name: string;
  uf: string;
  kind: string;
  priority: string;
  url: string;
  description: string;
};

export type Renewal = {
  issued: string | null;
  expires: string | null;
  number?: string;
  file?: string;
};

/** Parse `window.NAME = {...};` data files published by the hub. */
function parseHubScript<T>(source: string): T {
  const start = source.indexOf("=");
  const end = source.lastIndexOf(";");
  if (start < 0) throw new Error("Unexpected hub data format");
  return JSON.parse(source.slice(start + 1, end > start ? end : undefined)) as T;
}

async function fetchHubScript<T>(file: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(`${DOCS_HUB}/Web/${file}`, { signal, cache: "no-store" });
  if (!res.ok) throw new Error(`${file}: HTTP ${res.status}`);
  return parseHubScript<T>(await res.text());
}

export const fetchRenewals = (signal?: AbortSignal) =>
  fetchHubScript<Record<string, Renewal>>("renovacoes.js", signal);

export const fetchPortals = (signal?: AbortSignal) =>
  fetchHubScript<Portal[]>("portais.js", signal);

const DAY = 86_400_000;

export function daysUntil(isoDate: string, now: number): number {
  return Math.floor((Date.parse(`${isoDate}T23:59:59-03:00`) - now) / DAY);
}

export function formatIsoDate(isoDate: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T12:00:00Z`));
}
