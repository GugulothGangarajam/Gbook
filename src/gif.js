import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Gif, Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { GifPlayer } from "react-gif-player";
import "./App.css";

const gif = new GiphyFetch("FoCnIK7UM6EWbCBbjxT7ytm0gy9h5V99");

function App() {
  const [input, setInput] = useState();
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState();

  const fetchGifs = () => {
    try {
      gif.search(input, { sort: "recent", limit: 5 }).then((result) => {
        // console.log(result);
        const url = [];
        result.data.forEach((gifItem, index) => {
          if (gifItem.images.original) {
            url.push(gifItem.images.original.url);
          } else {
            console.log(index);
          }
        });
        setInput("");
        setImages(url);
        // console.log(typeof url);
        // // setImages(Array.from(...url));
        // console.log('images are',images);
      });
      // console.log('result',result);
    } catch (err) {
      console.log(err);
    }
  };
  const getUrl = (e) => {
    console.log(e.target.attributes["data-url"].value);
    const url = e.target.attributes["data-url"].value;
    setUrl(url);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search Gif"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={fetchGifs}>Enter</button>
      {images?.map((img) => (
        <img
          src={img}
          alt={input}
          width="200px"
          height="200px"
          crossOrigin
          onClick={getUrl}
          data-url={img}
        />
        // <Gif src={img} width={200} />
      ))}
      <input type="text" value={url} />
      {/* <Grid width={100}  fetchGifs={fetchGifs}/> */}
    </div>
  );
}

export default App;
