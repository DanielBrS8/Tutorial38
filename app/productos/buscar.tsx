import { Alert, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {List, Provider, Text} from "react-native-paper"
import { Producto, Productos } from '@/model/Types'
import { consultarProductos } from '@/helpers/ProductosApi'
import { useProducto } from '@/store/ProductoCompartido'
import { router } from 'expo-router'

export default function buscar() {

    const [listaProductos,setListaProductos] = useState<Productos>([])
    useEffect(accionConsultarProductos,[])
    const {producto,setProducto} =useProducto()

    function getFlatListItem(producto:Producto){

        return <List.Item title={producto.nombre}
                    description={producto.categoria}
                    left={()=> <List.Icon icon={producto.icono}/>}
                    right={()=> <View>
                            <Text variant='titleMedium'>{producto.precio}</Text>
                    </View>}
                    onPress={()=>{

                        setProducto(producto)
                        router.push("/productos/detalle")

                    }}
                    ></List.Item>
                    
    }

    function accionConsultarProductos(){

        consultarProductos()
            .then(lista => setListaProductos(lista))
            .catch(error => Alert.alert("Error",error.toString()))

    }

  return (
    <View className='flex-1 p-4'>
      
        <FlatList
        
            data={listaProductos}
            keyExtractor={p=> p.id}
            renderItem={({item}) => getFlatListItem(item)}
        
        />

    </View>
  )
}