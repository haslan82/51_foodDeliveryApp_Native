import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import * as Icon from "react-native-feather";
import { themeColors } from '../utils/Theme';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({item}) => {

const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
    onPress={()=>navigation.navigate('Restaurant',{...item})}
    >
      <View style={{
        shadowColor:themeColors.bgColor(0.2),
        shadowRadius:7


      }} className='mr-6 bg-white rounded-3xl shadow-lg'>
<Image className='h-36 w-64 rounded-t-3xl'  source={item.image} />
<View className='px-3 pb-4 space-y-2'>
  <Text className='text-lg font-bold pt-2'>{item.name}</Text>
  <View className='flex-row items-center space-x-1'>
    <Image  style={{ height: 16, width: 16 }} source={require('../../assets/images/vecteezy_mobile-game-golden-star-clipart-design-illustration_9342559.png')} />
    <Text className='text-green-700'>{item.stars} </Text>
    <Text className='text-gray-700'>({item.reviews}review)*<Text className='font-semibold ' >{item.category} </Text> </Text>
  </View>

    <View className='flex-row items-center space-x-1 mt-3'>
    <Icon.MapPin color='gray' width='15' height='15'/>
    <Text className='text-gray-700 text-xs ml-2'>Nearby*{item.address} </Text>
    </View>

</View>
</View>
    </TouchableWithoutFeedback>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({})