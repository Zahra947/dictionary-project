import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  //this state will save the submitted data to keep track of it
  let [results, setResults] = useState(null);
  //put the default variable null to get better results in if cindition in results component
  let [loaded, setLoaded] = useState(false);
  //for the first time we can know the page is loading
  let [photos, setPhotoes] = useState(null);
  //for tracking the photoes related to the word

  function handleDictionary(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotoes(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionary);

    let pexelsApiKey =
      "563492ad6f91700001000001cf830f5e53384745aac43152f86d77a0";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    //to find where is the data of onChange called : console.log(event.target.value)
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="shadow p-3 mb-5 bg-white rounded dictionary">
        <h1>What word do you look up?</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeyword}
              defaultValue={props.defaultKeyword}
            ></input>
          </form>
          <Results results={results} />
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
    return "loading..";
  }
}
