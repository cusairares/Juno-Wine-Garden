import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Pressable, View } from "react-native";

export default function Header () {
    return (
    <View className="bg-white pt-10 border-b-2 border-gray-200 flex-row justify-center items-center">
        <Image source={icons.logo} className="w-24 h-16 mx-auto mb-3"  resizeMode="contain" />
        <Pressable 
            className="absolute right-5 top-[53px]"
            onPress={() => console.log("Shopping Cart Pressed!")}
        >
            {({ pressed }) => (
                <Image source={icons.cart} className={`w-8 h-8 ${pressed ? 'opacity-60' : ''}`} resizeMode="contain" />
            )}
    </Pressable>
        </View>
)
}