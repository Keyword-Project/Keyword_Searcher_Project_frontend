export interface CategoryType {
  name: string;
  categoryId: string;
  thirdCategories: CategoryType[];
}

export interface ClassifiedCategoriesFieldProps {
  backgroundColor: string;
  left: string;
  borderRadius: string;
  borderRight: string;
  isVisible: boolean;
}
