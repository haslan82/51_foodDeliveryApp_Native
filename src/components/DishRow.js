import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Icon from "react-native-feather";
import { themeColors } from '../utils/Theme'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemById } from '../slices/cartSlice';


const DishRow = ({item}) => {

const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    selectCartItemById(state, item._id)
  );

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item._id }));
  };
  const quantityInCart = totalItems.length
  ? totalItems[0].quantity
  : 0;


  return (
    <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
      <Image source={item.image} className='rounded -3xl 'style={{height:100, width:100}}/>

        <View className='flex flex-1 space-y-3'>
            <View className='pl-3'>
                <Text className='text-xl'>{item.name} </Text>
                <Text className='text-gray-700'>{item.description} </Text>
            </View>

            <View className='flex-row justify-between pl-3 items-center'>
                <Text className='text-lg font-bold text-gray-700'>${item.price} </Text>
                  <View className='flex-row items-center'>
<TouchableOpacity 
onPress={handleDecrease}
disabled={!totalItems.length}
style={{backgroundColor:themeColors.bgColor(1)}} className='p-1 rounded-full'>
    <Icon.Minus  stroke={'white'} strokeWidth={2} height={20} width={20}/>

</TouchableOpacity>
<Text className='px-3'>{totalItems.length} </Text>
<TouchableOpacity 
onPress={handleIncrease}
style={{backgroundColor:themeColors.bgColor(1)}} className='p-1 rounded-full'>
    <Icon.Plus  stroke={'white'} strokeWidth={2} height={20} width={20}/>

</TouchableOpacity>
            </View>
            </View>
          

        </View>


    </View>
  )
}

export default DishRow

const styles = StyleSheet.create({})