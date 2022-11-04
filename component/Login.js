import React from 'react'
import {Center, Text, Button, Input, Link,View, Image} from 'native-base'
import ImageLogin from '../images/Login.png'

function login({navigation}) {
  return (
    <Center p={20}>
        <Image
            source={ImageLogin}
            alt="Alternate Text"
            size="2xl"
            resizeMode='contain'
            
        />
        
        <Input backgroundColor="blue.100" placeholder="Email" type="email" mb={4}/>
        <Input backgroundColor="blue.100" placeholder="Password" type="password" mb={4} />
            <View height={20} width="320">
                <Button onPress={()=> navigation.navigate('MainPage')}
                        mb={3}
                        colorScheme="danger"
                    >
                        Login
                    </Button>
            </View>
                <Text textDecoration="none" textAlign="center" >New Users ?  
                <Link 
                color="red.500" 
                textDecoration="none"
                href="https://nativebase.io"> Register</Link>
                </Text>
    </Center>
    
  )
}

export default login
    