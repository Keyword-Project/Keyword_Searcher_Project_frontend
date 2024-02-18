import React from "react";
import KeywordType from "./KeywordType";
import Gender from "./Gender";
import RangeAge from "./RangeAge";
import SearchCount from "./SearchCount";
import ItemCount from "./ItemCount";
import CompetitionStrength from "./CompetitionStrength";

export default function FilterBox() {
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
