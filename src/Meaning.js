import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  //console.log(props.meaning)
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeach}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <strong>Example: </strong>
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
