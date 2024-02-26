import axios from "axios";

export async function fetchCategoryList(categoryKey: number) {
  console.log("categoryKey");
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/${categoryKey}`
    );

    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Fail:", error);
    throw new Error("Fail");
  }
}
