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
            <Tabs.Screen name="home" options={{ title: "Home" }} />
            <Tabs.Screen name="menu" options={{ title: "Menu" }} />
        </Tabs>
    )
}

export default _Layout