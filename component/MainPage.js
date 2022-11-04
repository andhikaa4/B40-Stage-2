import React, { useState } from 'react'
import { Center, Text, Button, Input, Link,Badge, View, Image, Flex, Spacer, Select, Icon } from 'native-base'
import Profile from '../images/profile.png'
import { ModalMain } from './Modal/MainModal';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function mainPage() {
    const [date, setDate] = useState();
    const [showModal, setShowModal] = useState(false);
    return (
        <Flex height={hp('95%')} p={5} width={wp('90%')} flexDirection="column" mt={10}>
            <Flex direction="row" width={wp('90%')} mb={7} >
                <View justifyContent="center">
                    <Text fontSize="xl" fontWeight="bold" marginBottom={0}>Hi Andhika</Text>
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

            <View width={wp('90%')} backgroundColor="blue.100"p={2} rounded="md">
                <Flex flexDirection="row" mb={3} width={wp('85%')}>
                    <Text fontSize="lg" fontWeight="bold"  >Study Golang</Text>
                    <Spacer/>
                    <Badge colorScheme="darkBlue" rounded="md">
                        <Text color="white">Study</Text>
                    </Badge>
                </Flex>
                <Flex flexDirection="row" alignItems="center" width={wp('85%')}>
                    <View width={wp('60%')}>
                        <Text mb={5} color="grey" fontSize="xs" width="100%">
                            Learn Golang to improve fundamentals and familiarize with coding.
                        </Text>
                        <Text color="grey" fontSize="xs" width="100%">
                            <Icon as={MaterialIcons} name="calendar-today" />
                            19 July 2022
                        </Text>
                    </View>
                    <Spacer/>
                    <View >
                        <Center backgroundColor="green.500" rounded="full" height={50} >
                            <MaterialIcons resizeMode="contain" name="check" size={50} color="white" />
                        </Center>
                    </View>
                    
                    

                </Flex>
            </View>




        </Flex>
    )
}

export default mainPage