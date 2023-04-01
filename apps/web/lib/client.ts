import { SanityClient } from "@sanity/client";
import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient: SanityClient = createClient(config);
