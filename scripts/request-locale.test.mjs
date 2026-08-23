import assert from "node:assert/strict";
import test from "node:test";
import {
  localeFromAcceptLanguage,
  parseLocale,
} from "../src/lib/i18n/locales.ts";

test("locale cookies and Accept-Language map onto the four site locales", () => {
  assert.equal(parseLocale("pt-BR"), "pt-BR");
  assert.equal(parseLocale("pt"), "pt-BR");
  assert.equal(parseLocale("es-AR"), "es-AR");
  assert.equal(parseLocale("fr"), "fr-FR");
  assert.equal(parseLocale("de-DE"), undefined);
  assert.equal(localeFromAcceptLanguage("fr-FR,fr;q=0.8,en;q=0.5"), "fr-FR");
  assert.equal(localeFromAcceptLanguage("pt-BR,pt;q=0.9"), "pt-BR");
  assert.equal(localeFromAcceptLanguage(""), "en-US");
});
