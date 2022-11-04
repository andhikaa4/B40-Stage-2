import React from 'react'
import {Center, View, Text} from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function AddCate() {
  return (
    <View  bg="primary.400" p="10" height={hp('100%')}>
        <Text  fontSize="xs">Text</Text>
    </View>
    
  )
}

export default AddCate