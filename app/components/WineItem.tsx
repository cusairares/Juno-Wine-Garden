import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../context/CartContext";

interface Wine {
  name: string;
  quantity_ml: number;
  alcohol_percent: number;
  type: string;
  price: number;
  // It's recommended to have a unique id for each product
  id?: string;
}

interface WineItemProps {
  wineData: Wine;
}

export function WineItem({ wineData }: WineItemProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // The addToCart function needs an object with id, name, price, and image.
    // We are using wineData.name as a temporary ID.
    // It's better to have a unique ID from your data source.
    // We are also using a placeholder image.
    addToCart({
      id: wineData.id || wineData.name,
      name: wineData.name,
      price: wineData.price,
      image: require("../../assets/images/react-logo.png"), // Replace with actual product image
    });
    console.log("Added to cart:", wineData.name);
  };

  return (
    <Pressable
      className="flex-col w-full px-4 py-6 border-b border-gray-200"
      onPress={() => console.log("Pressed:", wineData.name)}
    >
      {({ pressed }) => (
        <View
          className={`flex-row items-center ${pressed ? "opacity-60" : ""}`}
        >
          <View className="flex-1">
            <View className="flex-row justify-between items-center">
              <Text className="text-primary text-lg font-medium flex-1 mr-2">
                {wineData.name}
              </Text>
              <Text className="text-primary text-base font-medium">
                RON{wineData.price}
              </Text>
            </View>
            <View className="flex-row -mt-1">
              <Text className="text-primary/70 text-sm italic">
                {wineData.quantity_ml}ml, {wineData.type},{" "}
                {wineData.alcohol_percent}%
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleAddToCart}
            className="ml-4 bg-secondary rounded-full w-10 h-10 flex items-center justify-center"
          >
            <Text className="text-white text-2xl font-bold">+</Text>
          </TouchableOpacity>
        </View>
      )}
    </Pressable>
  );
}
