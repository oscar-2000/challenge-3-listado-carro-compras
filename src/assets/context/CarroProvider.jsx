import React from "react";
import { useState } from "react";
import CarroContext from "@context/CarroContext";
import ProductJson from "@lib/data.json"

const CarroProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarro = (id) => {
        const producto = ProductJson.find(item => item.id === id);
        setCarrito(prev => [...prev,
        {
            id, 
            quantity : 1,
            name : producto.name,
            price : producto.price,
            thumbnail : producto.image.thumbnail,
            mobile : producto.image.mobile,
            tablet : producto.image.tablet,
            desktop : producto.image.desktop
        }]);
    }

    const aumentarCantidad = (id) => {
        setCarrito(prev => 
            prev.map((item) => 
                item.id === id ? {...item, quantity: item.quantity + 1} : item
            )
        )
    }

    const disminuirCantidad = (id) => {
        setCarrito(prev =>
            prev.map((item) => 
                item.id === id && item.quantity > 0 ? {...item, quantity: item.quantity - 1} : item
            )
            .filter(item => item.quantity > 0)
        )
    }

    const eliminarDelCarro = (id) => {
        setCarrito(prev => 
            prev.filter(item => item.id != id)
        )
    }

    return(
        <CarroContext.Provider value={{carrito, setCarrito, agregarAlCarro, aumentarCantidad, disminuirCantidad, eliminarDelCarro}}>
        {children}
        </CarroContext.Provider>
    )
}

export default CarroProvider;