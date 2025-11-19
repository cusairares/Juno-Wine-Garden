import { Pressable, Text, View } from "react-native";

interface Wine {
  name: string;
  quantity_ml: number;
  alcohol_percent: number;
  type: string;
  price: number;
}

interface WineItemProps {
  wineData: Wine;
}

export function WineItem({ wineData }: WineItemProps) {
  return (
    <Pressable 
      className="flex-col w-full px-4 py-6"
      onPress={() => console.log("Pressed:", wineData.name)}
    >
      {({ pressed }) => (
        <View className={pressed ? "opacity-60 " : ""}>
          <View className="flex-row justify-between items-center">
            <Text className="text-primary text-lg font-medium flex-1 mr-2">
              {wineData.name}
            </Text>
            <Text className="text-primary text-base font-medium">
              ${wineData.price}
            </Text>
          </View>
          <View className="flex-row -mt-1">
            <Text className="text-primary/70 text-sm italic">
              {wineData.quantity_ml}ml, {wineData.type}, {wineData.alcohol_percent}%
            </Text>
          </View>
        </View>
      )}
    </Pressable>
  );
}