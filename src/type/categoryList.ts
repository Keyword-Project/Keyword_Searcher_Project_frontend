

export interface CategoryItem {
  name: string;
  categoryId: string;
  secondCategories?: CategoryItem[];
  thirdCategories?: CategoryItem[];
}

export interface ClassifiedCategoriesFieldProps {
  backgroundColor: string;
  left: string;
  borderRadius: string;
  borderRight: string;
  isVisible: boolean;
}

export interface OutletContextProps {
  setClickedFirstCategory: (value: string | null) => void;
  setClickedSecondCategory: (value: string | null) => void;
  setClickedThirdCategory: (value: string | null) => void;
  setSelectedCategoryId: (value: string | null) => void;
}
