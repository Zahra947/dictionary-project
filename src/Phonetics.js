import React from "react";
import "./phonetics.css";

export default function Phonetics(props) {
  //console.log(props.phonetic);
  return (
    <div className="phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <span className="text">/{props.phonetic.text}/</span>
    </div>
  );
}
