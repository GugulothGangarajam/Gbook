import React, { useState } from "react";
import { render } from "react-dom";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { Gif } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import db from "./firebase";
import firebase from "firebase";
import "./MessageSender.css";
import { useStateValue } from "./StateProvider";

const Gif_search = new GiphyFetch("FoCnIK7UM6EWbCBbjxT7ytm0gy9h5V99");

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gif, setGif] = useState("");
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(true);
  const [searching, setSearching] = useState(false);
  const [{ user, dispatch }] = useStateValue();
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
    setInput("");
    setImageUrl("");
    setGif("");
  };

  //search for gif

  const fetchGifs = () => {
    setSearching(true);
    try {
      Gif_search.search(gif, { sort: "recent", limit: 8 }).then((result) => {
        // console.log(result);
        const url = [];
        result.data.forEach((gifItem, index) => {
          if (gifItem.images.original) {
            url.push(gifItem.images.original.url);
          } else {
            console.log(index);
          }
        });

        setImages(url);
        setSearching(false);
        // console.log(typeof url);
        // // setImages(Array.from(...url));
        // console.log('images are',images);
      });
      // console.log('result',result);
    } catch (err) {
      console.log(err);
    }
    setVisible(!visible);
  };
  const getUrl = (e) => {
    console.log(e.target.attributes["data-url"].value);
    const url = e.target.attributes["data-url"].value;
    setVisible(!visible);
    setImageUrl(url);
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            required
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder="What's on your mind?"
            type="text"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
            type="text"
          />
          <button onClick={handleSubmit} type="submit">
            Post
          </button>
        </form>
      </div>
      <div className="messageSender__middle">
        <input
          type="text"
          placeholder=" Gif"
          onChange={(e) => setGif(e.target.value)}
          value={gif}
        />
        <button onClick={fetchGifs}>search gif</button>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photot/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
      <div className="gifs">
        {searching && <div className="loading"></div>}
        {!visible &&
          images?.map((img) => (
            <img
              src={img}
              alt={input}
              width="177px"
              height="200px"
              crossOrigin
              onClick={getUrl}
              data-url={img}
            />
            // <Gif src={img} width={200} />
          ))}
      </div>
    </div>
  );
}

export default MessageSender;
