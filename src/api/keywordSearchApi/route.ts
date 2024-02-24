 import axios from "axios";

export async function fetchKeywordData(
  keywordName,
  minPrice,
  maxPrice,
  searchSize
) {
  console.log("fetchKeywordData");
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/keyword/?${keywordName ? `q=${keywordName}` : "" }${
        minPrice ? `&minPrice=${minPrice}` : ""
      }${maxPrice ? `&maxPrice=${maxPrice}` : ""}${
        searchSize ? `&searchSize=${searchSize}` : ""
      }`
    );

    console.log("응답은", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed:", error);
    throw new Error("Failed");
  }
}
