export interface ThirdCategory {
  name: string;
  categoryId: string;
}

export interface SecondCategory {
  name: string;
  categoryId: string;
  thirdCategories: ThirdCategory[];
}

export interface FirstCategory {
  name: string;
  categoryId: string;
  secondCategories: SecondCategory[];
}


