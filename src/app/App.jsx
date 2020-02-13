import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import { getVideosByTopic } from "../../controller/youtubeController";

const App = () => {
  const [dataAPI, setDataAPI] = useState();
  const [titles, setTitles] = useState();
  const [images, setImages] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    const videosTitles = [];
    const videosImages = [];

    for (let i = 0; i < dataAPI?.data.items.length; i++) {
      videosTitles.push(dataAPI.data.items[i].snippet.title);
      videosImages.push(dataAPI.data.items[i].snippet.thumbnails.medium);
    }

    setTitles(videosTitles);
    setImages(videosImages);
  }, [dataAPI]);

  const handleSearch = event => {
    setSearch(event.target.value);
    console.log(search);
  };

  const RenderVideos = () => {
    if (!titles) {
      return null;
    }

    return titles.map((element, index) => {
      return (
        <div className="video" key={index}>
          <img
            src={`${images[index].url}`}
            width={`${images[index].width}`}
            height={`${images[index].height}`}
          />
          <h3>{element}</h3>
        </div>
      );
    });
  };

  return (
    <div className="app">
      <header>
        <div className="header">
          <h1>YouFlixTube</h1>
          <h2>
            A React/Redux App that uses a YouTube search and looks like Netflix
          </h2>
        </div>
        <div className="searchbar">
          <label htmlFor="search">Video Topic:</label>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={handleSearch}
          />
          <button
            onClick={async () =>
              setDataAPI(await getVideosByTopic(search, "rating"))
            }
          >
            Youtube search
          </button>
        </div>
      </header>
      <main>
        <RenderVideos />
      </main>
    </div>
  );
};

export default withRouter(App);
