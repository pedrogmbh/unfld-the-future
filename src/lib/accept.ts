export type MediaType =
  | "text/markdown"
  | "text/html"
  | "application/json"
  | "application/yaml"
  | "text/plain";

export {
  parseAccept,
  pickAccept,
  mergeVary,
} from "../../scripts/accept.mjs";
