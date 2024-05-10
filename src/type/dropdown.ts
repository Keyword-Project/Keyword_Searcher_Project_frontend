export interface DropdownWrapProps {
    visibility: boolean;
    children: React.ReactNode;
}

export interface DropdownProps {
    isFetching: boolean, 
    setSearchSize: React.Dispatch<React.SetStateAction<string>>, 
     setIsInputDisable: React.Dispatch<React.SetStateAction<boolean>>, 
     domain: string,
    setDomain: React.Dispatch<React.SetStateAction<string>>
}

