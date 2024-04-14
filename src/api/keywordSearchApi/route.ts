// import axios from "axios";

// const fetchKeywordData = (
//   pathName: string,
//   minPrice: number,
//   maxPrice: number,
//   searchSize: number,
//   startDate: number,
//   los: number
// ) =>  {
//   console.log("fetchKeywordData");
//   console.log(pathName, minPrice, maxPrice, searchSize, startDate, los);
//   try {
//     const response = await axios.get(
//       `http://localhost:3000/api/v1/keyword?q=${pathName}${
//         startDate ? `&startDate=${startDate}` : ""
//       }&${los ? `&los=${los}` : ""}${minPrice ? `&minPrice=${minPrice}` : ""}${
//         maxPrice ? `&maxPrice=${maxPrice}` : ""
//       }${searchSize ? `&searchSize=${searchSize}` : ""}`
//     );

//     console.log("response.data", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Fail:", error);
//     throw new Error("Fail");
//   }
// }
