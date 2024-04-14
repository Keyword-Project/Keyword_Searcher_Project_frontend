import axios from "axios";

export async function fetchCategoryList() {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/v1/category-keys"
    );

    return response.data;
  } catch (error) {
    console.error("Fail:", error);
    throw new Error("Fail");
  }
}
//http://localhost:3000/api/v1/category-keys
