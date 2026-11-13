import { catalog } from "./catalog";
import { chrome } from "./chrome";
import { compliance } from "./compliance-items";
import { complianceMeta } from "./compliance-meta";
import { govtech } from "./govtech";
import { legal } from "./legal";
import { pages } from "./pages";
import { products } from "./products";
import { solutions } from "./solutions";
import { work } from "./work";

export const enUS = {
  chrome,
  pages,
  catalog,
  products,
  work,
  solutions,
  legal,
  compliance,
  complianceMeta,
  govtech,
};

export type Messages = typeof enUS;
