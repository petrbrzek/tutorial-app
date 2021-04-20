import sdk from "../../lib/opendesign";
import fs from "fs";

export default async (req, res) => {
  const { designId } = req.query;

  const test1DesignID = "9218736e-2b63-4beb-b944-447feddac616";

  const test2DesignID = "762df48b-aedc-4110-a514-e73c57d72189";

  const design = await sdk.fetchDesignById(designId);
  const artboards = await design.getArtboards();

  if (!fs.existsSync("./public/images/")) {
    fs.mkdirSync("./public/images/");
  }

  const folderPath = `./public/images/${design.id}`;
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    await Promise.all(
      artboards.map((artboard) => {
        return artboard.renderToFile(`${folderPath}/${artboard.id}.png`);
      })
    );
  }

  res.status(200).json({ ok: 1 });
};
