import React, { useState, useEffect } from 'react'
import { Center, Text, Button, Input, Link,Badge, View, Image, Flex, Spacer, Select, Icon } from 'native-base'
import Profile from '../images/profile.png'
import { ModalMain } from './Modal/MainModal';
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API, setAuthToken } from './config/api';


function mainPage({navigation}) {
    const [date, setDate] = useState();
    const [showModal, setShowModal] = useState(false);

    const [data, setData] = useState([])
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(false)
    
    const getData = async() => {

        try {
            const token = await AsyncStorage.getItem('token');
            if (token === null) {
                navigation.navigate("Login")
            }else {
                setAuthToken(token)
              }
    
            const config = {
                headers: {
                  'Content-type': 'application/json',
                  Authorization: 'Bearer ' + token 
                },
            };
    
            setIsLoading(true);
    
            const res = await API.get("/auth/user", config)
            setData(res.data)
            setIsLoading(false);

            const list = await API.get("/addList")
            setList(list.data)

        
        } catch (error) {
            console.log(error);    
        }
    }
    
    useEffect(() => {
        getData()
    },[])

    const updateStatus = (index) => {
        const res = API.patch(`/addList/${index}`, {status: true})
        getData()
        console.log(index);
    }

    const handleLogout = async() => {
        await AsyncStorage.removeItem('token');
        navigation.navigate("Login")
    }


    return (
        <Flex height={hp('95%')} p={5} width={wp('90%')} flexDirection="column" mt={10}>
            <Flex direction="row" width={wp('90%')} mb={7} >
                <View justifyContent="center">
                    <Text fontSize="xl" fontWeight="bold" marginBottom={0}>Hi {data.firstName}</Text>
                    <Text fontSize="sm" color="grey" marginBottom={0}>100 List</Text>
                </View>
                <Spacer />
                <Image source={Profile}
                    alt="Alternate Text"
                    size="sm"
                    resizeMode='contain' />
            </Flex>
            <View mb={3} width={wp('90%')}>
                <Input placeholder="Search List ..." width="100%"
                    borderRadius="4" py="3" px="1" fontSize="14"
                    InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400"
                        as={<MaterialIcons name="search" />} />}
                    InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400"
                        as={<MaterialIcons name="mic" />} />} />
            </View>

            <Flex mb={10} width={wp('90%')} direction="row">
                <View width={wp('29%')}>
                    <Button
                        height="46px"
                        leftIcon={<MaterialIcons name="calendar-today" size={15} color="black" />}
                        variant="outline" colorScheme="success"
                         onPress={() => setShowModal(true)}
                    ><Text isTruncated maxW="90" w="90%" fontSize="xs">{date ? date.toDateString() : "Choose Date"}</Text>
                    </Button>
                    
                </View>
                <ModalMain date={date} setDate={setDate} showModal={showModal} setShowModal={setShowModal} />
                <Spacer />
                <View width={wp('29%')}>

                    <Select
                        placeholder="Category"
                        minWidth="20"

                    >
                        <Select.Item label="JavaScript" value="js" />
                        <Select.Item label="TypeScript" value="ts" />
                    </Select>
                </View>
                <Spacer />
                <View width={wp('29%')}>
                    <Select
                        placeholder="Status"
                        minWidth="20"

                    >
                        <Select.Item label="JavaScript" value="js" />
                        <Select.Item label="TypeScript" value="ts" />
                    </Select>

                </View>

            </Flex>

                {list.map((item, index) => (
                    item.createdBy.id == data.id && (
                        <View key={index = item.id} width={wp('90%')} mb={3} backgroundColor="blue.100"p={2} rounded="md" >
                        <Flex flexDirection="row" mb={3} width={wp('85%')}>
                    {item.status == true ?
                    <Text strikeThrough fontSize="lg" fontWeight="bold"  onPress={() =>navigation.navigate('Detail', {listData: item})}>{item.name}</Text> :
                    <Text fontSize="lg" fontWeight="bold"  onPress={() =>navigation.navigate('Detail', {listData: item})}>{item.name}</Text> } 
                    <Spacer/>
                    <Badge colorScheme="darkBlue" rounded="md">
                        <Text color="white">{item.category}</Text>
                    </Badge>
                </Flex>
                <Flex flexDirection="row" alignItems="center" width={wp('85%')}>
                    <View width={wp('60%')}>
                        <Text mb={5} color="grey" fontSize="xs" width="100%">
                            {item.desc}
                        </Text>
                        <Text color="grey" fontSize="xs" width="100%">
                            <Icon as={MaterialIcons} name="calendar-today" />
                            {item.date}
                        </Text>
                    </View>
                    <Spacer/>
                    <View >
                        {item.status == true ?
                        <Center backgroundColor="green.500" rounded="full" height={50} >
                            <MaterialIcons resizeMode="contain" name="check" size={50} color="white"  
                            onPress={() => updateStatus(item._id) }/>
                        </Center> : 
                        <Center backgroundColor="green.500" rounded="full" height={50} >
                            <AntDesign resizeMode="contain" name="minus" size={50} color="white"  
                            onPress={() => updateStatus(item._id) }/>
                    </Center>}
                    </View>
                    
                    

                </Flex>
            </View>
                    )
                ))}
                




        </Flex>
    )
}

export default mainPage