import { catalog } from "../src/locales/en-US/catalog.ts";
import { chrome } from "../src/locales/en-US/chrome.ts";
import { compliance } from "../src/locales/en-US/compliance-items.ts";
import { complianceMeta } from "../src/locales/en-US/compliance-meta.ts";
import { legal } from "../src/locales/en-US/legal.ts";
import { news } from "../src/locales/en-US/news.ts";
import { pages } from "../src/locales/en-US/pages.ts";
import { plans } from "../src/locales/en-US/plans.ts";
import { products } from "../src/locales/en-US/products.ts";
import { solutions } from "../src/locales/en-US/solutions.ts";
import { work } from "../src/locales/en-US/work.ts";

const enUS = {
  chrome,
  pages,
  catalog,
  products,
  news,
  work,
  solutions,
  plans,
  legal,
  compliance,
  complianceMeta,
};

process.stdout.write(JSON.stringify(enUS));
