import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories } from "../utils/constants";
import { useRoute } from "@react-navigation/native";

const RestaurantScreen = () => {
  
  const {params} = useRoute();
  let item = params;
  console.log('restaurant:', item);
  return (
    <SafeAreaView>
      <View className="mt-4">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="overflow-visible"
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
{/* {
  categories.map((category,index)=>{
    return(
      <View key={category.id} className="flex-1 px-2">
        <Text className="text-sm font-medium text-gray-600">{category.name}</Text>
      </View>
    )
  })
}
 */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
