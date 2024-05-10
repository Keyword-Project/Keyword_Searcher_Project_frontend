export interface ButtonContainerProps {
    BackGroundColor: string;
    borderColor: string;
  }

  export interface ButtonProps {
    isFetching: boolean;
    handleSearch: () => void;
    queryURL: string;
  }

