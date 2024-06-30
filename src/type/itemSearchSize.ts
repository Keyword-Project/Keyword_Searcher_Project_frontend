export interface ItemSearchSizeWrapProps {
  setSearchSize: React.Dispatch<React.SetStateAction<string>>;
}

export interface ItemSearchSizeProps extends ItemSearchSizeWrapProps{
  isInputDisable: boolean;
  domain: string;
  setDomain: React.Dispatch<React.SetStateAction<string>>;
  searchSizeChangeByInput: () => void;
  setIsInputDisable: React.Dispatch<React.SetStateAction<boolean>>;
}

