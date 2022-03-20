import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Story.css";

function Story({ image, profilesrc, title }) {
  return (
    <div className="story">
      <div style={{ backgroundImage: `url(${profilesrc})` }} className="story">
        <Avatar className="story__avatar" src={image} />
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default Story;
