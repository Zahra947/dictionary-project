import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  //this state will save the submitted data to keep track of it
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    //to find where is the data of onChange called : console.log(event.target.value)
    setKeyword(event.target.value);
  }
  return (
    <form onSubmit={search}>
      <input type="search" onChange={handleKeyword}></input>
    </form>
  );
}
