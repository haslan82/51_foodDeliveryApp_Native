import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { featured } from '../utils/constants';

const DeliveryScreen = () => {
    const restaurant = featured[0]?.restaurant[0];
    const navigation = useNavigation();



  return (
    <View>
      <Text>DeliveryScreen</Text>
    </View>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({})