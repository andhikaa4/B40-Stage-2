import React from 'react'
import {Center, Text, Button, Input, Link,View, Image} from 'native-base'
import ImageRegister from '../images/Login.png'

function register() {
  return (
    <Center p={20}>
        <Image
            source={ImageRegister}
            alt="Alternate Text"
            size="2xl"
            resizeMode='contain'
            
        />
        
        <Input backgroundColor="blue.100" placeholder="Email" type="email" mb={4}/>
        <Input backgroundColor="blue.100" placeholder="Name" type="text" mb={4}/>
        <Input backgroundColor="blue.100" placeholder="Password" type="password" mb={4} />
            <View height={20} width="320">
                <Button
                        mb={3}
                        colorScheme="danger"
                    >
                        Register
                    </Button>
            </View>
                <Text textDecoration="none" textAlign="center" >Already Joined ?  
                <Link 
                color="red.500" 
                textDecoration="none"
                href="https://nativebase.io"> Login</Link>
                </Text>
    </Center>
  )
}

export default register