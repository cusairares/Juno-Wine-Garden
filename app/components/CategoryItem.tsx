import { Pressable, Text, View } from "react-native";
import { Category } from "../data/categories";

interface CategoryItemProps {
  item: Category;
  activeCategory: string;
  onPress: () => void;
}

export function CategoryItem({ item, activeCategory, onPress }: CategoryItemProps) {
  const isActive = activeCategory === item.name;

  return (
    <Pressable
      onPress={onPress}
      className="py-2 px-4 items-center" 
    >
      <Text className={`text-lg font-bold ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
        {item.name}
      </Text>
      {isActive && <View className="h-1 w-1/2 bg-primary mt-1 rounded-full" />}
    </Pressable>
  );
}