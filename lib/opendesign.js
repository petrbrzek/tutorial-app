import { createSdk } from "@opendesign/sdk";

const sdk = createSdk({
  apiRoot: process.env.API_ENDPOINT,
  token: process.env.API_TOKEN,
});

export default sdk;