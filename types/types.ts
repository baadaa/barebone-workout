export type Category = 'fridge' | 'freezer';

export type Food = {
  id: string;
  img?: string;
  quantity?: string;
  name?: string;
  category: Category;
  added: string;
  expires?: string;
};

export type NewFood = {
  img?: string;
  quantity?: string;
  name?: string;
  category: Category;
  added: string;
  expires?: string;
};
export type FridgeArea = {
  space: Category;
};

export interface FoodList {
  [key: string]: NewFood;
}
export type EditorProps = {
  isActive: boolean;
  isRemoving?: boolean;
  closeModal?: () => void;
  currentSection?: Category;
  nameIsMissing?: boolean;
};

export type ButtonProps = {
  isRemoving?: boolean;
  click?: () => void;
  isEditing?: boolean;
};
