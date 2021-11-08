import React, { Fragment } from "react";

const Song = ({ lyrics }) => {
  if (lyrics.length === 0) return null;

  return (
    <Fragment>
      <h2>Lyrics</h2>
      <p className="lyrics">{lyrics}</p>
    </Fragment>
  );
};

export default Song;
