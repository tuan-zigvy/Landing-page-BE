/**
 * header service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::header.header",
  ({ strapi }) => ({})
);
