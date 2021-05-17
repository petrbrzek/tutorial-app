import { createSdk } from "@opendesign/sdk";

const sdk = createSdk({
  token: process.env.API_TOKEN,
  console: { level: "info" },
});

export default sdk;
