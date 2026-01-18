import { icons } from "@/constants/icons";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { itemCount } = useCart();
  return (
    <View className="bg-white pt-10 border-b-2 border-gray-200 flex-row justify-center items-center">
      <Image
        source={icons.logo}
        className="w-24 h-16 mx-auto mb-3"
        resizeMode="contain"
      />
      <Pressable
        className="absolute right-5 top-[53px]"
        onPress={() => router.push("/cart")}
      >
        {({ pressed }) => (
          <View>
            <Image
              source={icons.cart}
              className={`w-8 h-8 ${pressed ? "opacity-60" : ""}`}
              resizeMode="contain"
            />
            {itemCount > 0 && (
              <View className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 justify-center items-center">
                <Text className="text-white text-xs font-bold">
                  {itemCount}
                </Text>
              </View>
            )}
          </View>
        )}
      </Pressable>
    </View>
  );
}
