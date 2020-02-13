import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import { getVideosByTopic } from "../../controller/youtubeController";

const App = () => {
  const [dataAPI, setDataAPI] = useState();
  const [titles, setTitles] = useState();

  useEffect(() => {
    const videosTitles = [];

    for (let i = 0; i < dataAPI?.data.items.length; i++) {
      videosTitles.push(dataAPI?.data.items[i].snippet.title);
    }

    setTitles(videosTitles);
  }, [dataAPI]);

  const RenderVideos = () => {
    if (!titles) {
      return null;
    }

    return titles.map((element, index) => {
      return (
        <div className="video" key={index}>
          {element}
        </div>
      );
    });
  };

  return (
    <div className="app">
      <header>
        <div className="header">
          <h1>YouFlixTube</h1>
          <h3>
            A React/Redux App that uses a YouTube search and looks like Netflix
          </h3>
        </div>
        <div className="searchbar">Search</div>
        <button
          onClick={async () =>
            setDataAPI(await getVideosByTopic("coding", "rating"))
          }
        >
          Youtube search
        </button>
      </header>
      <main>
        <RenderVideos />
      </main>
    </div>
  );
};

export default withRouter(App);
