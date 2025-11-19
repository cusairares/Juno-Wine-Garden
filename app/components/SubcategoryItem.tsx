import { Pressable, Text } from "react-native";
import { Subcategory } from "../categories";

interface SubcategoryItemProps {
  item: Subcategory;
  activeCategory: string;
  onPress: () => void;
}

export function SubcategoryItem({ item, activeCategory, onPress }: SubcategoryItemProps) {
  const isActive = activeCategory === item.name;

  return (
    <Pressable
      onPress={onPress}
      className={`py-2 px-5 border border-gray-300 rounded-lg ${isActive ? "bg-gray-200" : "bg-white"}`}
    >
      <Text className="text-base font-psemibold">{item.name}</Text>
    </Pressable>
  );
}