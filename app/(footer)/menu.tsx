import { ScrollView } from "react-native";
import { WineItem } from "../components/WineItem";
import { barData } from "../data/bar";
import { foodData } from "../data/foods";
import { wineData } from "../data/wines";

const Meniu = () =>{
    const categoryDict = {"Wines" : wineData,"Bar":barData, "Food" : foodData}

    const currentMainCategory = "Wines";    
    const currentSubCategory = "Pahar";
    return(
        <ScrollView className="flex-1 flex-col  w-full">
        {Object.entries(categoryDict[currentMainCategory]).map(([subcategory, list]) => 
            list.map((item, index) => {
            if(currentSubCategory === subcategory)
                if(currentMainCategory === "Wines")
                    return <WineItem key={index} wineData={item} />
            })
            
        )}
        </ScrollView>
    )
}

export default Meniu