import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { themeColors } from "../utils/Theme";
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, description, restaurants}) => {
    
  return (
    <View>
     <View className={'flex-row justify-between items-center px-4'} >
        <View>
            <Text className='font-bold text-lg '>{title} </Text>
            <Text className='text-gray-500 text-xs'>{description}</Text>
           
        </View>
        <TouchableOpacity>
            <Text style={{color:themeColors.text}} className='font-semibold'>See All</Text>
        </TouchableOpacity>
     </View>
     <ScrollView horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{paddingHorizontal:15}}
     className='overflow-visible py-5'
     >
          {restaurants.map((restaurant, index) => {
            //console.log(restaurant)
                    return (
                        <RestaurantCard item={restaurant} key={index} /> 
                    )
                })
             } 
          



     </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})