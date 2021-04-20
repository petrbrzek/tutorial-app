import sdk from "../../lib/opendesign";

export default async (req, res) => {
  // Open a local design file and wait for an API response
  const design = await sdk.importDesignFile("./test2.sketch");

  res.status(200).json({ designId: design.id });
};
