import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  //this state will save the submitted data to keep track of it
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  //put the default variable null to get better results in if cindition in results component

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    //to find where is the data of onChange called : console.log(event.target.value)
    setKeyword(event.target.value);
  }
  return (
    <div>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword}></input>
      </form>
      <Results results={results} />
    </div>
  );
}
