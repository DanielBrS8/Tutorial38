import { Producto } from "@/model/Types"
import create from "zustand"


type ProductoCompartido ={

    producto:Producto
    setProducto: (p:Producto)=>void
}

const PRODUCTO_INICIAL:Producto={

    id:"0",
    nombre:"",
    categoria:"",
    icono:"",
    precio:0

}

export const useProducto = create<ProductoCompartido>(set=>({

    producto:PRODUCTO_INICIAL,
    setProducto:(p:Producto)=>{

        set({producto:p})

    }

})



)