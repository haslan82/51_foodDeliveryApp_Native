import { Image, StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderPreparingScreen = () => {
    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery')
        }, 1400)
    },[])

  return (
    <View className="flex-1 bg-white justify-center items-center">
    <Image
      source={require("../assets/images/delivery.gif")}
      className="w-full h-[360]"
      resizeMode="cover"
    />
  </View>
  )
}

export default OrderPreparingScreen

const styles = StyleSheet.create({})