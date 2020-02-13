import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import { getYoutubeVideos } from "../../controller/youtubeController";

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
          onClick={async () => setDataAPI(await getYoutubeVideos("coding"))}
        >
          Youtube search
        </button>
      </header>
      <main>Content : {titles?.join(", ")}</main>
    </div>
  );
};

export default withRouter(App);
