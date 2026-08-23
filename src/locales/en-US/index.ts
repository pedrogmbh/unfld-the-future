import { catalog } from "./catalog";
import { chrome } from "./chrome";
import { compliance } from "./compliance-items";
import { complianceMeta } from "./compliance-meta";
import { legal } from "./legal";
import { news } from "./news";
import { pages } from "./pages";
import { plans } from "./plans";
import { products } from "./products";
import { solutions } from "./solutions";
import { work } from "./work";

export const enUS = {
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

export type Messages = typeof enUS;
