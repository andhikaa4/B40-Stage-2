import { Image, View, Text, Button, Input, Link } from 'native-base'
import React from 'react'
import Login from '../images/Login.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function login() {
  return (
    <View display="flex" alignItems="center" justifyContent="center" flexDirection="column" height={hp('90%')}>
            <View justifyContent="center">
            <Image width={wp('80%')} mb={4} alignItems="center"  resizeMode="contain" height={hp('25%')} source={Login} />
            <View width={wp('80%')} mb={4}>
                <Text
                textAlign="left"
                    fontSize={20}
                    fontWeight="bold"

                >Login</Text>

                </View>
            </View>
            <View width={wp('80%')} justifyContent="end">
                <Input backgroundColor="blue.100" placeholder="Email" type="email" mb={4}/>
                <Input backgroundColor="blue.100" placeholder="Password" type="password" mb={4} />
                
                <Button
                    colorScheme="danger"
                    width="100%" 
                    marginBottom={4}
                    fontWeight="bold"
                >
                    Login
                </Button>
                <Text textDecoration="none" textAlign="center" >New Users ?  
                <Link 
                color="red.500" 
                textDecoration="none"
                href="https://nativebase.io"> Register</Link>
                </Text>
                
            </View>

        </View>

    )
}

export default login