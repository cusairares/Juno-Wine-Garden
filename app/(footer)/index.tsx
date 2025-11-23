import { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { CategoryItem } from "../components/CategoryItem";
import { SubcategoryItem } from "../components/SubcategoryItem";
import { categoriesData } from "../categories";

export default function Index() {
  const [activeMainCategory, setActiveMainCategory] = useState(categoriesData[0]?.name || "");
  // Folosim un obiect pentru a memora ultima subcategorie activă pentru fiecare categorie principală
  const [lastActiveSubcategories, setLastActiveSubcategories] = useState<Record<string, string>>({});

  const handleSubcategoryPress = (subcategoryName: string) => {
    // Când selectăm o subcategorie, o salvăm ca fiind ultima activă pentru categoria principală curentă
    setLastActiveSubcategories(prev => ({
      ...prev,
      [activeMainCategory]: subcategoryName,
    }));
  };

  const handleMainCategoryPress = (categoryName: string) => {
    setActiveMainCategory(categoryName);
  };

  // Determinăm subcategoria activă pe baza categoriei principale curente
  const activeSubcategory =
    lastActiveSubcategories[activeMainCategory] ||
    categoriesData.find(c => c.name === activeMainCategory)?.subcategories[0]?.name ||
    "";

  const activeSubcategories = categoriesData.find(c => c.name === activeMainCategory)?.subcategories || [];

  return (
    <View className="flex-1 flex-col w-full">
      {/* Sectiunea pentru Categoriile Principale */}
      <View className="flex-row justify-around items-center p-3 bg-white border-b-2 border-gray-200">
        {categoriesData.map((item) => (
          <CategoryItem
            key={item.name}
            item={item}
            activeCategory={activeMainCategory}
            onPress={() => handleMainCategoryPress(item.name)}
          />
        ))}
      </View>

      {/* Sectiunea pentru Subcategorii */}
      <View className="bg-white border-b-2 border-gray-200">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 12, gap: 10 }}
        >
          {activeSubcategories.map((item) => (
            <SubcategoryItem
              key={item.name}
              item={item}
              activeCategory={activeSubcategory}
              onPress={() => handleSubcategoryPress(item.name)}
            />
          ))}
        </ScrollView>
      </View>
      {/* Aici va veni restul conținutului paginii, de ex. lista de vinuri */}
    </View>
  );
}
