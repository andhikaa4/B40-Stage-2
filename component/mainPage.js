import { Image, View, Text, Button, Icon, Input, Link } from 'native-base'
import React, { useState } from 'react'
import RegisterImg from '../images/Login.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Profile from '../images/profile.png'
import { ModalMain } from './Modal/ModalMain';
import DatePicker from 'react-native-date-picker'


function MainPage() {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View display="flex" alignItems="center" paddingY={4} width={wp('90%')} height={hp('90%')}>
            <View display="flex" width={wp('90%')} marginBottom={5} flexDirection="row" >
                <View flex="80%" justifyContent="center">
                    <Text fontSize="xl" fontWeight="bold" marginBottom={0}>Hi Andhika</Text>
                    <Text fontSize="sm" color="grey" marginBottom={0}>100 List</Text>
                </View>
                <View flex="30%" alignItems="end" justifyContent="center">
                    <Image source={Profile} resizeMode="contain" width={wp('19%')} height={hp('7%')} />
                </View>
            </View>
            <View width={wp('90%')}>
                <Input placeholder="Search List ..." width="100%"
                    borderRadius="4" py="3" px="1" fontSize="14"
                    InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400"
                        as={<MaterialIcons name="search" />} />}
                    InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400"
                        as={<MaterialIcons name="mic" />} />} />

            </View>
            <View>
                <Button title="Open" onPress={() => setOpen(true)} />
                {/* <ModalMain open={open} setOpen ={setOpen} date={date} setDate={setDate}/> */}
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>

        </View>

    )
}

export default MainPage