import React from 'react'
import {Center, Text, Button, Input, Link,View, Image, Spacer} from 'native-base'
import ImageRegister from '../images/Login.png'
import { FontAwesome } from '@expo/vector-icons';

function register({navigation}) {
  return (
    <Center p={10} py={20} justifyContent="center" height="100%" backgroundColor="red.100" >
        <Image
            source={ImageRegister}
            alt="Alternate Text"
            size="2xl"
            resizeMode='contain'
            
        />
        
        <Input backgroundColor="white" placeholder="Email" type="email" mb={4}/>
        <Input backgroundColor="white" placeholder="Name" type="text" mb={4}/>
        <Input backgroundColor="white" placeholder="Password" type="password" mb={4} />
            <View height={20} width="100%">
                <Button
                        mb={3}
                        colorScheme="danger"
                        onPress={()=> navigation.navigate('Login')}
                    >
                        Register
                    </Button>
            </View>
                <Text textDecoration="none" textAlign="center" >Already Joined ?  
                <Text 
                color="red.500" 
                textDecoration="none"
                onPress={()=> navigation.navigate('Login')}
                > Login</Text>
                </Text>
                <Spacer/>
                <Text onPress={() => navigation.navigate('Home')}>
                    <FontAwesome name="home" size={24} color="black" />Home
                </Text>
    </Center>
  )
}

export default register