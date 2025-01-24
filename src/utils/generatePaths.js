// src/utils/generatePaths.js
import fs from 'fs';
import path from 'path';

export function getImagesPaths(basePath) {
  const artists = fs.readdirSync(basePath);
  const paths = [];

  artists.forEach((artist) => {
    const artistPath = path.join(basePath, artist);
    const albums = fs.readdirSync(artistPath);
    albums.forEach((album) => {
      paths.push({
        params: { artist, album },
      });
    });
  });

  return paths;
}