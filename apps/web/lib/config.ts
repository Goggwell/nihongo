import { type ClientConfig } from "@sanity/client";

export const config: ClientConfig = {
  projectId: "bkahyhz9",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2023-05-03",
};
