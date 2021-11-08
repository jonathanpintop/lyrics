import React, { Fragment, useState, useEffect } from "react";

import Form from "./components/Form";
import Song from "./components/Song";
import Info from "./components/Info";

import axios from "axios";

function App() {
  const [lyricsSearch, setLyricsSearch] = useState({});
  const [lyrics, setLyrics] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (Object.keys(lyricsSearch).length === 0) return;

    const fetchApilyrics = async () => {
      const { artist, song } = lyricsSearch;

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}
  `;

      const [lyrics, informacion] = await Promise.all([
        axios(url),
        axios(url2),
      ]);

      setLyrics(lyrics.data.lyrics);
      setInfo(informacion.data.artists[0]);
    };
    fetchApilyrics();
  }, [lyricsSearch, info]);

  return (
    <Fragment>
      <Form setLyricsSearch={setLyricsSearch} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>

          <div className="col-md-6">
            <Song lyrics={lyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
