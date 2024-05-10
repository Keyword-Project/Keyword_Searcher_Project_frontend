export interface Category {
  name: string;
  categoryId: string;
  thirdCategories: Category[];
}

export interface ClassifiedCategoriesFieldProps {
  backgroundColor: string;
  left: string;
  borderRadius: string;
  borderRight: string;
  isVisible: boolean;
}
