const ImageKit = require("imagekit");

function getImageKit() {
  if (!process.env.IMAGEKIT_PUBLIC_KEY || !process.env.IMAGEKIT_PRIVATE_KEY || !process.env.IMAGEKIT_ENDPOINT_URL) {
    throw new Error("IMAGEKIT environment variables are missing!");
  }

  return new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_ENDPOINT_URL,
  });
}

function uploadFile(file) {
  return new Promise((resolve, reject) => {
    try {
      const imagekit = getImageKit();

      const ext = file.originalname.split(".").pop();
      const randomName = `${Date.now()}-${Math.floor(Math.random() * 1e6)}${
        ext ? "." + ext : ""
      }`;

      imagekit.upload(
        {
          file: file.buffer,
          fileName: randomName,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = uploadFile;
