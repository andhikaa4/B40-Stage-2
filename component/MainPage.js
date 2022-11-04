import React, { useState } from 'react'
import { Center, Text, Button, Input, Link,Badge, View, Image, Flex, Spacer, Select, Icon } from 'native-base'
import Profile from '../images/profile.png'
import { ModalMain } from './Modal/MainModal';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

function mainPage() {
    const [date, setDate] = useState();
    const [showModal, setShowModal] = useState(false);
    return (
        <Flex height="95%" p={10} flexDirection="column">
            <Flex direction="row" mb={10}>
                <View>
                    <Text fontSize="xl" fontWeight="bold" marginBottom={0}>Hi Andhika</Text>
                    <Text fontSize="sm" color="grey" marginBottom={0}>100 List</Text>
                </View>
                <Spacer />
                <Image source={Profile}
                    alt="Alternate Text"
                    size="sm"
                    resizeMode='contain' />
            </Flex>
            <View mb={3}>
                <Input placeholder="Search List ..." width="100%"
                    borderRadius="4" py="3" px="1" fontSize="14"
                    InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400"
                        as={<MaterialIcons name="search" />} />}
                    InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400"
                        as={<MaterialIcons name="mic" />} />} />
            </View>

            <Flex mb={10} direction="row">
                <Button
                    leftIcon={<MaterialIcons name="calendar-today" size={15} color="black" />}
                    variant="outline" colorScheme="success"
                    px={4} py={0} onPress={() => setShowModal(true)}
                ><Text isTruncated maxW="100" w="100%" fontSize="xs">{date ? date.toDateString() : "choose Date"}</Text>
                </Button>
                <ModalMain date={date} setDate={setDate} showModal={showModal} setShowModal={setShowModal} />
                <Spacer />
                <Select
                    placeholder="Category"
                    minWidth="32"

                >
                    <Select.Item label="JavaScript" value="js" />
                    <Select.Item label="TypeScript" value="ts" />
                </Select>
                <Spacer />
                <Select
                    placeholder="Status"
                    minWidth="32"

                >
                    <Select.Item label="JavaScript" value="js" />
                    <Select.Item label="TypeScript" value="ts" />
                </Select>

            </Flex>

            <View width="100%" backgroundColor="blue.100" p={2} rounded="md">
                <Flex flexDirection="row" mb={3}>
                    <Text fontSize="lg" fontWeight="bold"  >Study Golang</Text>
                    <Spacer/>
                    <Badge colorScheme="darkBlue" rounded="md">
                        <Text color="white">Study</Text>
                    </Badge>
                </Flex>
                <Flex flexDirection="row" alignItems="center">
                    <View>
                        <Text mb={5} color="grey" fontSize="xs" width={300}>
                            Learn Golang to improve fundamentals and familiarize with coding.
                        </Text>
                        <Text color="grey" fontSize="xs" width={300}>
                            <Icon as={MaterialIcons} name="calendar-today" />
                            19 July 2022
                        </Text>
                    </View>
                    <Spacer/>
                    <View >
                        <Center backgroundColor="green.500" rounded="full" height={60} >
                            <MaterialIcons resizeMode="contain" name="check" size={60} color="white" />
                        </Center>
                    </View>
                    
                    

                </Flex>
            </View>




        </Flex>
    )
}

export default mainPage