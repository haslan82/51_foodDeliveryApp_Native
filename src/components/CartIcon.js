import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../utils/Theme'
import { useNavigation } from '@react-navigation/native'

const CartIcon = () => {
    const navigation= useNavigation();
  return (
    <View className='absolute bottom-5 w-full z-50'>
       <TouchableOpacity
        onPress={()=>navigation.navigate('Cart')}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
        style={{ backgroundColor: themeColors.bgColor(1) }}
      >
        <View className="p-2 px-4 rounded-full bg-white/30">
          <Text className="text-white text-lg font-extrabold">
           4
          </Text>
        </View>

        <Text className="  text-white text-lg flex-1 text-center font-extrabold">
          View Cart
        </Text>
        <Text className="text-white text-lg  text-center font-extrabold">
          $ {28}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartIcon

const styles = StyleSheet.create({})