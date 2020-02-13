import axios from "axios";

import { URL, PART, KEY } from "../config/index";

export const getVideosByTopic = async (searchTopic, searchOrder) => {
  try {
    const result = await axios({
      method: "get",
      url: URL,
      params: {
        key: KEY,
        part: PART,
        q: searchTopic,
        oder: searchOrder,
        maxResults: 20
      }
    });

    return result;
  } catch (error) {
    console.log("Error from getVideosByTopic", error);
  }
};
