interface SearchDataProps {
  [key: string]: string| number | boolean;
    dataIsRocket: boolean;
    dataProductId: string;
    name: string;
    priceValue: number;
    ratingTotalCount: number;
    ratingVipCount: number;
    rocketImg: string;
    uri: string;
  }

  export  interface SearchData {
    body : SearchDataProps[]
  }