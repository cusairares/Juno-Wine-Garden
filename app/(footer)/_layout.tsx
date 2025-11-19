import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import Header from "../components/Header";




const TabWithIcon = ({ label, icon, focused }: { label:string; icon: any; focused: boolean }) => {
    const color = focused ? "#50827D" : "#7F7F7F"
    return (
        <View style={styles.tabContainer}>
            <Image
                source={icon}
                style={{ width: 18, height: 18, tintColor: color }}
                resizeMode="contain"
            />
        </View>
    )
}

const _Layout = () =>{
    return(
        <Tabs
            screenOptions={{
                header: () => <Header/>
                ,
                tabBarActiveTintColor: "#50827D", // color for selected label + icon
                tabBarInactiveTintColor: "#999",  // color for unselected label + icon
                tabBarLabelStyle: { fontSize: 12 }, // optional, adjust label size
            }}>
            <Tabs.Screen name="index"
            options={{
                 title: "Home" ,
                 tabBarIcon: ({ focused }) =>
                 <TabWithIcon label="Home" icon={icons.home} focused={focused}/>,
                }}
            />


            <Tabs.Screen name="menu" 
            options={{
                 title: "Menu",
                 tabBarIcon: ({ focused }) =>
                 <TabWithIcon label="Menu" icon={icons.menu} focused={focused}/>,
                 }} 
            />
            <Tabs.Screen name="orders" 
            options={{ 
                title: "Orders",
                tabBarIcon: ({ focused }) =>
                <TabWithIcon label="Orders" icon={icons.orders} focused={focused}/>,
            }} 
            />
            <Tabs.Screen name="cart" 
            options={{ 
                title: "Cart",
                tabBarIcon: ({ focused }) =>
                <TabWithIcon label="Cart" icon={icons.cart} focused={focused}/>,
            }} 
            />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: "row",
        alignItems: "center",
    }
})

export default _Layout