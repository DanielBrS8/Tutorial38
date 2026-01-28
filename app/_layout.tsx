import '../global.css'


import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from "expo-router"
import { Icon } from 'react-native-paper'

export default function _layout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: { backgroundColor: "#1E293B" },
            tabBarActiveTintColor: "#38BDF8",
            tabBarInactiveBackgroundColor: "#94a3B8",
            animation: "fade",
        }}>
            <Tabs.Screen name="index" options={{
                title: "Inicio",
                tabBarIcon: ({ color, size }) => <Icon source="home" size={size} color={color} />
            }} />
            <Tabs.Screen name="novedades" options={{
                title: "Novedades",
                tabBarIcon: ({ color, size }) => <Icon source="newspaper" size={size} color={color} />
            }} />
            <Tabs.Screen name="productos"
                options={{
                    headerShown: false,
                    title: "Buscar",
                    tabBarIcon: ({ color, size }) => <Icon source="magnify" size={size} color={color} />
                }}
            />
            <Tabs.Screen name="about" options={{
                title: "Acerca de",
                tabBarIcon: ({ color, size }) => <Icon source="information" size={size} color={color} />
            }} />
        </Tabs>
    )
}