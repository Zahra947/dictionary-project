import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  //this state will save the submitted data to keep track of it
  let [results, setResults] = useState(null);
  //put the default variable null to get better results in if cindition in results component
  let [loaded, setLoaded] = useState(false);
  //for the first time we can know the page is loading

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
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
      <div className="dictionary">
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
        </section>
      </div>
    );
  } else {
    load();
    return "loading..";
  }
}
