import { useContext } from "react";
import CarroContext from "@context/CarroContext";

export default function Products({products}) {
    const {carrito, agregarAlCarro, aumentarCantidad, disminuirCantidad} = useContext(CarroContext)
    const data = products;
    const carritoIds = new Set(carrito.map(item => item.id));
    return (
        <>
        {data.map(item => {
          return(
            <div key={item.id}>
                <div className="overflow-hidden h-56 rounded-2xl relative z-0">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={item.image.desktop} />
                        <source media="(min-width: 768px)" srcSet={item.image.tablet} />
                        <source media="(max-width: 767px)" srcSet={item.image.mobile} />
                        <img src={item.image.thumbnail} alt={item.name} className="h-64 w-auto absolute rounded-3 bg-center" />
                    </picture>
                </div>
                {carritoIds.has(item.id) ? (
                <div className="mx-auto w-[60%] -mt-7 z-10 relative flex flex-row gap-4 justify-between items-center p-2 rounded-full bg-orange-500 border-gray-400 hover:border-orange-800 hover:bg-orange-800 duration-300 border-[1px] cursor-pointer">
                    <svg 
                    onClick={() => disminuirCantidad(item.id)}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-[20px] w-[20px] p-1 rounded-full border-white border-[1px] duration-300 hover:bg-white hover:text-orange-500 text-white" 
                    viewBox="0 0 10 2"
                    fill="none"
                    >
                        <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
                    </svg>
                    <span className="text-white">
                        {carrito.find(i => i.id === item.id)?.quantity ?? 1}
                    </span>
                    <svg 
                    onClick={() => aumentarCantidad(item.id)}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-[20px] w-[20px] p-1 rounded-full border-white border-[1px] duration-300 hover:bg-white hover:text-orange-500 text-white" 
                    fill="none" 
                    viewBox="0 0 10 10">
                        <path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
                    </svg>
                </div>
                ) : (
                <button onClick={() => agregarAlCarro(item.id)} className="mx-auto w-[60%] -mt-7 z-10 relative flex flex-row gap-2 items-center justify-center p-2 rounded-full bg-white border-gray-400 hover:border-orange-400 duration-300 border-[1px] cursor-pointer">
                    <img src="/img/icon-add-to-cart.svg" className="h-4" alt="Add to cart" />
                    <span className="text-orange-900 fw-semibold">Add to cart</span>
                </button>
                )}
                <p className="text-orange-950/70 text-md dark:text-white mt-3">{item.category}</p>
                <p className="text-orange-950 font-semibold text-lg dark:text-white">{item.name}</p>
                <p className="text-orange-500 font-semibold text-xl">${item.price}</p>
            </div>
          )  
        })}
        </>
    )
}