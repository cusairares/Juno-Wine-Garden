import { ResizeMode, Video } from "expo-av";
import { useRouter } from "expo-router";
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

return (
<ScrollView className="flex-1 bg-white">
{/* Title */}
<View className="px-5 mt-6">
  <Text className="text-3xl font-bold text-center">Juno Wine Garden</Text>
  <Text className="text-base text-gray-600 text-center mt-2">
    Beautiful wine garden nested between the citadel walls.
  </Text>
</View>

{/* Video */}
 <View className="mt-6 w-full h-56">
  <Video
  source={require("@/assets/juno/video.mp4")}
  style={{ width: "100%", height: "100%" }}
  resizeMode={ResizeMode.COVER}
  isLooping
  shouldPlay
  isMuted
  />
</View> 


{/* Description */}
<View className="px-5 mt-6">
  <Text className="text-gray-700 leading-6 text-base">
    Welcome to Juno Garden! An enchanting destination offering fine wine,
    delectable cuisine, coffee, craft beers, and live music. Immerse
    yourself in our serene ambiance amidst lush greenery. Experience the
    perfect blend of nature, gastronomy, and entertainment.
  </Text>
</View>

{/*Features*/}
<View className="flex-row justify-center flex-wrap gap-3 mt-6 px-5">
  <View className="bg-[#50827D]/10 border border-[#50827D] px-3 py-1 rounded-full">
    <Text className="text-[#50827D] font-medium">🍷 Wines</Text>
  </View>
  <View className="bg-[#50827D]/10 border border-[#50827D] px-3 py-1 rounded-full">
    <Text className="text-[#50827D] font-medium">🌿 Garden</Text>
  </View>
  <View className="bg-[#50827D]/10 border border-[#50827D] px-3 py-1 rounded-full">
    <Text className="text-[#50827D] font-medium">🍸 Cocktails</Text>
  </View>
  <View className="bg-[#50827D]/10 border border-[#50827D] px-3 py-1 rounded-full">
    <Text className="text-[#50827D] font-medium">🎶 Live Music</Text>
  </View>
</View>

{/* Separator */}
<View className="mx-10 my-8 border-b border-gray-300" />

{/* Juno Flavours subtitle */}
<View className="px-5">
  <Text className="text-2xl font-bold text-center">Juno Flavours</Text>

  {/* Side text */}
  <View className="flex-row justify-center gap-8 mt-3">
    <Text className="text-[#50827D] font-semibold">20+ wineries</Text>
    <Text className="text-[#50827D] font-semibold">200+ bottles</Text>
  </View>
</View>

{/* Flavor description */}
<View className="px-5 mt-6">
  <Text className="text-gray-700 leading-6 text-base mb-4">
        In the heart of our culinary experience lie the delights of Italian
        cuisine, prepared with passion and mastery. From delectable clam
        chowder to savory focaccia and Chef Salvino&apos;s Bella Italia platters,
        each dish is a feast for the senses.
  </Text>

  <Text className="text-gray-700 leading-6 text-base mb-4">
        When it comes to wines, we take pride in a meticulously curated
        selection from Romania and Moldova. From refined and aromatic wines
        to robust ones full of character, each bottle tells a unique story.
  </Text>

  <Text className="text-gray-700 leading-6 text-base mb-4">
        At Juno Garden, we invite you to enjoy an unforgettable culinary and
        wine journey in an exceptional natural setting.
  </Text>
</View>

{/* Menu button */}
<View className="mt-8 mb-10 px-5">
  <Pressable
  onPress={() => router.push("/menu")}
  className="bg-[#50827D] py-3 rounded-x1"
  >
    <Text className="text-white text-center text-lg font-semibold">
      See the menu
    </Text>
  </Pressable>
</View>

</ScrollView>

)
}