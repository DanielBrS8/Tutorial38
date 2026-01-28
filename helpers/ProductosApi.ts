import { Productos } from "@/model/Types";
import { Platform } from "react-native";
import axios from "axios";


export async function consultarProductos():Promise<Productos> {

    const IP= "192.168.40.138"
    const url = `http://${IP}:3000/productos`
    const respuesta = await axios.get(url)
    return respuesta.data

}