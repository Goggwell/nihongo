import { createClient } from "next-sanity";
import { config } from "./config";
import { SanityClient } from "next-sanity";

export const client: SanityClient = createClient(config);
