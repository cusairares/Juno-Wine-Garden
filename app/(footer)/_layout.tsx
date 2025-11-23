import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Pressable, View } from "react-native";
import Header from "../components/Header";

const _Layout = () =>{
    return(
        <Tabs
            screenOptions={{
                header: () => <Header />
            }}>
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="meniu" options={{ title: "Meniu" }} />
        </Tabs>
    )
}

export default _Layout