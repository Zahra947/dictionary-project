import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  //this state will save the submitted data to keep track of it
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`${keyword}`);
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
