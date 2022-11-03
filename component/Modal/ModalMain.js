import React from 'react'
import DatePicker from 'react-native-date-picker'

export function ModalMain(props) {
  return (
    <DatePicker
        modal
        open={props.open}
        date={props.date}
        onConfirm={(date) => {
          props.setOpen(false)
          props.setDate(date)
        }}
        onCancel={() => {
          props.setOpen(false)
        }}
      />
  )
}

