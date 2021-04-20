import sdk from "../../lib/opendesign";

export default async (req, res) => {
  const { designId } = req.query;

  const test1DesignID = "9218736e-2b63-4beb-b944-447feddac616";

  const test2DesignID = "762df48b-aedc-4110-a514-e73c57d72189";

  const design = await sdk.fetchDesignById(designId);

  const pages = await design.getPages();

  res.status(200).json(pages);
};
