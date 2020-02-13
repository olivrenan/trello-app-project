import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import { getVideosByTopic } from "../../controller/youtubeController";

const App = () => {
  const [dataAPI, setDataAPI] = useState();
  const [titles, setTitles] = useState();
  const [images, setImages] = useState();
  const [search, setSearch] = useState("");
  const [radioCheck, setRadioCheck] = useState("date");

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

  const RenderRadioButton = ({ id }) => {
    return (
      <div className="radio-button">
        <input
          type="radio"
          name="order"
          id={id}
          value={id}
          checked={radioCheck == id}
          onChange={e => setRadioCheck(e.target.value)}
        />
        <label htmlFor={id}>{`${id}`}</label>
      </div>
    );
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
            onChange={event => setSearch(event.target.value)}
          />

          <RenderRadioButton id="date" />
          <RenderRadioButton id="rating" />
          <RenderRadioButton id="relevance" />
          <RenderRadioButton id="title" />

          <button
            onClick={async () =>
              setDataAPI(await getVideosByTopic(search, radioCheck))
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
