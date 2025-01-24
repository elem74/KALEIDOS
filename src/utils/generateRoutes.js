// src/utils/generateRoutes.js
import fs from 'fs';
import path from 'path';

function getImagesData(basePath) {
  const artists = fs.readdirSync(basePath);
  const data = [];

  artists.forEach((artist) => {
    const artistPath = path.join(basePath, artist);
    const albums = fs.readdirSync(artistPath);
    albums.forEach((album) => {
      const albumPath = path.join(artistPath, album);
      const images = fs.readdirSync(albumPath).map((image) => ({
        src: path.join('/images', artist, album, image),
        alt: `${artist} - ${album} - ${image}`,
      }));

      data.push({
        artist,
        album,
        images,
      });
    });
  });

  return data;
}

const imagesData = getImagesData(path.resolve('src/images'));
export default imagesData;
console.log(imagesData)