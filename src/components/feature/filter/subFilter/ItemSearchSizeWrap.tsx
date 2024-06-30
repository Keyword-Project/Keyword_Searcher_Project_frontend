import { ItemSearchSizeWrapProps } from "type/itemSearchSize";
import { useEffect, useState } from "react";
import ItemSearchSize from "./ItemSearchSize";


export default function ItemSearchSizeWrap({
  setSearchSize,
}: ItemSearchSizeWrapProps) {
  const [domain, setDomain] = useState("");
  const [isInputDisable, setIsInputDisable] = useState(false);
  const searchSizeChangeByInput = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      setDomain(e.target.value);
    }
    setSearchSize(domain);
   
  };
useEffect(() =>{
  searchSizeChangeByInput()
},[domain])

  
  return (
    <>
    <ItemSearchSize isInputDisable={isInputDisable} domain={domain} setDomain={setDomain} setSearchSize={setSearchSize} searchSizeChangeByInput={searchSizeChangeByInput} setIsInputDisable={setIsInputDisable}/>
    </>
  );
}
