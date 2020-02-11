import axios from "axios";

import { URL, PART, KEY } from "../config/index";

export const getYoutubeVideos = () => async searchTopic => {
  try {
    const result = await axios({
      method: "get",
      url: `${URL}?key=${KEY}&part=${PART}&q=${searchTopic}`
    });

    console.log(result);
  } catch (error) {
    console.log("Error from getYoutubeVideos", error);
  }
};

export const getGoogle = () => async () => {
  try {
    const result = await axios({
      method: "get",
      url: "https://www.google.com"
    });

    console.log(result);
  } catch (error) {
    console.log("Error from getGoogle", error);
  }
};
