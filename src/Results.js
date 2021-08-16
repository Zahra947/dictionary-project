import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="result">
        <h2>{props.definition.word}</h2>
        {props.definition.meaning.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
