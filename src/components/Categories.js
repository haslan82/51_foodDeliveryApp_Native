 import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../utils/constants'

const Categories = () => {

    const [activeCategory, setActiveCategory] = useState(null);


  return (
    <View className='mt-4'>
    <ScrollView 
    className='overflow-visible'
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:1
    }}
    >
{
    categories.map((category, index)=>{
        let isActive = category.id==activeCategory;
        let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
        let textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500'
        
        return(
            <View key={index} className='flex  justify-center items-center mr-6'>
               <TouchableOpacity 
               onPress={()=>{setActiveCategory(category.id)}}
               className={" p-1 rounded-full shadow bg-gray-200 " + btnClass }>
                <Image 
                 style={{width:45, height:45}}
                source={category.image} 
               
                />
                
               </TouchableOpacity>
               <Text className={" text-sm ml-1.5 " + textClass}>
                
                    {category.name}
                </Text>
            </View>
        )
 
    })
}
    </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({}) 

 




/* import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../utils/constants'

const Categories = () => {

    const [activeCategory, setActiveCategory] = useState(null);


  return (
    <View className='mt-4'>
    <ScrollView 
    className='overflow-visible'
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:1
    }}
    >
{
    categories.map((category,index)=>{
        let isActive = category.id == activeCategory;
       
        
        return(
            <View key={index} className='flex  justify-center items-center mr-6'>
               <TouchableOpacity 
               onPress={()=>{setActiveCategory(category.id)}}
               className={`p-1 rounded-full shadow ${
                isActive ? "bg-gray-600" : "bg-gray-200"
              }`}>
                <Image 
                 style={{width:45, height:45}}
                source={category.image} 
               
                />
                
               </TouchableOpacity>
               <Text className={`text-sm mt-2 ${
                  isActive
                    ? "font-semibold text-gray-800"
                    : "text-gray-500"
                }`}>
                    {category.name}
                </Text>
            </View>
        )
 
    })
}
    </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})   */