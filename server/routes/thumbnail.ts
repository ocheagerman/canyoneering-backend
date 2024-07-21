import express, { Request } from "express";
import { Route } from "./types";
import sharp from "sharp";
import fileUpload, { UploadedFile } from "express-fileupload";
import path from "path";
import fs from "fs-extra";

const router = express.Router();
const url = "/api/thumbnail";

const allowedFileExt = [".jpg", ".jpeg", ".png"];

router.use(
  fileUpload({
    // useTempFiles: true,
    // tempFileDir: "./tmp",
  })
);

router.get("/", (req, res) => {
  return res.status(200).json("I'm alive.");
});

router.post("/", async (req: Express.Request, res) => {
  const file = req.files?.file1 as UploadedFile;
  const fileName = file.name.replace(/\..+?$/, "").toLowerCase();
  const fileExtension = path.extname(file.name).toLowerCase();
  const dirName = "./public/browser/images/thumbnail/";
  const newFileName = fileName + "_580.jpeg";
  const dist = dirName + newFileName;

  console.log("fileName: " + fileName);
  console.log("fileExtension: " + fileExtension);
  if (!allowedFileExt.find((i) => i === fileExtension)) {
    return res.status(415).json("unsupported codec.");
  }
  await fs.ensureDir(dirName);
  sharp(file.data)
    .resize({ width: 580, height: undefined })
    .toFormat("jpg")
    .jpeg({
      mozjpeg: true,
    })
    .toFile(dist)
    .then((value: sharp.OutputInfo) => {
      return res.status(201).sendFile(newFileName, { root: dirName });
    })
    .catch((error: any) => {
      console.log(error);
      return res.status(500).json(error);
    });
});

const route: Route = {
  url: url,
  route: router,
};

export default route;
