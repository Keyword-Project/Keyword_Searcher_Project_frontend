import React from "react";
import KeywordType from "./KeywordType";
import Gender from "./Gender";
import RangeAge from "./RangeAge";
import SearchCount from "./SearchCount";


export default function FilterTable() {
  return (
    <>
      <div>FilterTable</div>
      <div>
        <KeywordType />
        <Gender />
        <RangeAge />
        <SearchCount />
        <ItemCount />
        <CompetitionStrength />
      </div>
    </>
  );
}
