import React from 'react'
import { Center, Text, Button, Input, Link, View, Image, Spacer } from 'native-base'
import ImageLogin from '../images/Login.png'
import { FontAwesome } from '@expo/vector-icons';

function login({ navigation }) {
    return (
        <Center p="10" py={20} height="100%" >
            <Image
                source={ImageLogin}
                alt="Alternate Text"
                size="2xl"
                resizeMode='contain'

            />

            <Input backgroundColor="white" placeholder="Email" type="email" mb={4} />
            <Input backgroundColor="white" placeholder="Password" type="password" mb={4} />
            <View height={20} width="100%">
                <Button onPress={() => navigation.navigate('MainPage')}
                    mb={3}
                    colorScheme="danger"
                >
                    Login
                </Button>
            </View>
            <Text textDecoration="none" textAlign="center" >New Users ?
                <Text
                    color="red.500"
                    textDecoration="none" onPress={() => navigation.navigate('Register')}
                > Register</Text>
            </Text>
            <Spacer/>
                <Text onPress={() => navigation.navigate('Home')}>
                    <FontAwesome name="home" size={24} color="black" />Home
                </Text>
        </Center>

    )
}

export default login
