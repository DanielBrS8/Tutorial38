import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack initialRouteName={"buscar"}>

        <Stack.Screen 
            name='buscar'
            options={{
                title:"Consulta de Productos"
            }}
        />

        <Stack.Screen
            name='detalle'
            options={{
                title:"Detalle de Productos"
            }}
        ></Stack.Screen>

    </Stack>
  )
}