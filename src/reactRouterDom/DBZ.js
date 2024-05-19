import React from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";

export default function DBZ() {
  const [searchParam, setSearchParam] = useSearchParams();
  console.log(searchParam);
  return (
    <>
      {searchParam.get("dbz-character") && (
        <h1>Selected Radio: {searchParam.get("dbz-character")} </h1>
      )}
      {["Goku", "Vegeta", "Picolo", "Gohan"].map((dbCharacter) => {
        return (
          <input
            type="radio"
            value={dbCharacter.toLocaleLowerCase()}
            checked={
              searchParam.get("dbz-character") ===
              dbCharacter.toLocaleLowerCase()
            }
            onChange={(e) => {
              setSearchParam(
                createSearchParams({ "dbz-character": e.target.value })
              );
            }}
            key={id}
          ></input>
        );
      })}
    </>
  );
}
