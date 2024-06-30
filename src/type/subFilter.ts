export interface SubFilterProps {
    setMinPrice: React.Dispatch<React.SetStateAction<string | number>>;
    setMaxPrice: React.Dispatch<React.SetStateAction<string | number>>;
    setSearchSize: React.Dispatch<React.SetStateAction<string>>;
}