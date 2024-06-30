import { SearchData } from "type/searchData";

export type ResultProps = {
  error: Error | null;
  isError: boolean;
  searchData: SearchData;
  isFetching: boolean;
};

export interface ResultFieldProps {
  setResultVisible: React.Dispatch<React.SetStateAction<boolean>>;
  resultVisible: boolean;
}
