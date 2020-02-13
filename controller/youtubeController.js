import axios from "axios";

import { URL, PART, KEY } from "../config/index";

export const getYoutubeVideos = async searchTopic => {
  try {
    const result = await axios({
      method: "get",
      url: URL,
      params: {
        key: KEY,
        part: PART,
        q: searchTopic
      }
    });
    return result;
  } catch (error) {
    console.log("Error from getYoutubeVideos", error);
  }
};
