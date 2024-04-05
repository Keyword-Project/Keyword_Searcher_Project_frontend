import Button from "components/common/Button";
import CategoryList from "./CategoryList";



export default function CategoryContainer() {


  return (
    <>
      <Button
        title="카테고리"
        BackGroundColor="var(--Orange500)"
        color="white"
        borderColor="var(--Orange500)"
      />
      <CategoryList/>
    </>
  );
}
