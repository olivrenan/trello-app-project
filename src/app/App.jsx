import React from "react";
import { withRouter } from "react-router";

import {
  getYoutubeVideos,
  getGoogle
} from "../../controller/youtubeController";

const App = () => {
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
        <button onClick={() => getYoutubeVideos("coding")}>
          Youtube search
        </button>
        <button onClick={() => getGoogle()}>Google</button>
      </header>
      <main>Content</main>
    </div>
  );
};

export default withRouter(App);
