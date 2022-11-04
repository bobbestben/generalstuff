import "./App.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Gif from "./components/Gif";

const App = () => {
  const [gifSrc, setGifSrc] = useState("");

  const API_KEY = "c06d5lXYy6AxtRJT1FSi5iORwBfTOMIs";

  const fetchRandomGif = async () => {
    const responseData = await axios.get(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    setGifSrc(responseData.data.data.images.downsized_large.url);
  };

  useEffect(() => {
    fetchRandomGif();
  }, []);

  const asyncHandleSubmit = async (searchText) => {
    if (searchText) {
      // console.log("searchText is: ", searchText);
      const searchForGif = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchText.current.value}&limit=1`;
      const responseData = await axios.get(searchForGif);
      setGifSrc(responseData.data.data[0].images.downsized_large.url);
    } else {
      console.log("fetchRandomGif selected");
      fetchRandomGif();
    }
  };

  return (
    <div className="giphy-container">
      <div>
        <h1>Giphy</h1>
      </div>
      <div>
        <Form handleSubmit={asyncHandleSubmit} />
      </div>
      <div>
        <Gif gifSrc={gifSrc} />
      </div>
    </div>
  );
};

export default App;
