import { View } from "react-native";
import { WineItem } from "../components/WineItem";
import { wineData } from "../wines";

export default function Index() {
  return (
    <View className="flex-1 flex-col justify-end w-full">
      {wineData.map((item,index) => (
        <WineItem key={index} wineData={item} />
      ))}
    </View>
  );
}
