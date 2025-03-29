// import { createClient } from "next-sanity";

import {createClient} from "@sanity/client"
const sanityClient = createClient(
{
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion:"2024-01-01",
    dataset:process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
    token:process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN,
    useCdn:true,
}
);
export default sanityClient;

/*
="gsqr72bd"
="sk6RXYxW667MUnXHoGKUVrJepOO5RfogkHthCVxnR6FcdNeqZjNzgtvEU3VaUNV4DZi7Vbv3sEsfsj8qUgME6c0XHZdogrWgdbpIxFI5yXe4MzxGKaDkSmAnyeXuZZYpe1J0bssN4f02Z5BnohQLCgZY4Q8I2NNcHHLsC1gW98VOvaGMS3xT"
="production"
 */