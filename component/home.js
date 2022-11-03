import { Image, View, Text, Button } from 'native-base'
import React from 'react'
import Homepage from '../images/home.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Home() {
    return (
        <View display="flex" alignItems="center" justifyContent="center" flexDirection="column" height={hp('90%')}>
            <View flex="70%" justifyContent="center">
            <Image maxWidth="100%" height={hp('35%')}  resizeMode="contain" source={Homepage} />
            <View width={wp('70%')}>
                <Text
                    textAlign="center"
                    fontSize={35}
                    fontWeight="bold"
                    position="relative"
                    marginTop={-5}
                >Ways <Text color="red.600">To</Text><Text color="red.500">Do</Text></Text>
                <Text 
                textAlign="center"
                fontSize={12}
                marginTop={5}
                >Write your activity and finish your activity.
                    Fast, Simple and Easy to Use</Text>

                </View>
            </View>
            <View width={wp('80%')} flex="30%" justifyContent="end">
                <Button
                    colorScheme="danger"
                    width="100%" 
                    marginBottom={4}
                    fontWeight="bold"
                >
                    Login
                </Button>
                
                <Button
                    backgroundColor="danger.400"
                    width="100%" 
                    fontWeight="bold"
                >
                    Register
                </Button>
                
            </View>

        </View>

    )
}

export default Home