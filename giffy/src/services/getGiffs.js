import { useState } from "react";

const apiKey = "a6VPpPnFR5pSkFvP2VkPd44wGctVJxbv";
export default function getGiffs({ keyword = "morty" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  try {
    return fetch(apiURL)
      .then((response) => response.json())
      .then((response) => {
        const { data = [] } = response;
        if (Array.isArray(data)) {
          const gifs = data.map((image) => {
            const { images, title, id } = image;
            const { url } = images.fixed_height_downsampled;
            return { title, id, url };
          });
          return gifs;
        }
      });
  } catch (error) {
    console.log(error);
  }
}
