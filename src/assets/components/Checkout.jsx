import React from "react";
import { useContext, useState, useEffect } from "react";
import CarroContext from "@context/CarroContext";
import { Modal } from "antd";

export default function Checkout() {
    const {carrito, setCarrito, eliminarDelCarro} = useContext(CarroContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const newOrder = () => {
        setCarrito(prev => []);
        setIsModalOpen(false);
    }
    var total = 0;
    return(
        <div className="rounded-xl bg-white p-6">
            <h5 className="mb-5 text-orange-700 font-bold text-2xl capitalize">Your cart ({carrito.length})</h5>
            <div className="flex flex-col gap-y-4">
                {carrito.map(item => {
                    total += item.price*item.quantity;
                    return(
                        <div className="py-3 border-b-[1px] border-b-gray-300">
                            <div className="flex flex-row gap-3 justify-between items-center">
                                <div className="flex flex-col gap-y-1">
                                    <p className="text-gray-900 font-semibold text-md">{item.name}</p>
                                    <div className="flex flex-row gap-4">
                                        <p className="text-orange-500 font-semibold text-lg">{item.quantity}x</p>
                                        <div className="flex flex-row gap-2">
                                            <p className="text-[#5a4e4a]/70 text-lg">${item.price}</p>
                                            <p className="text-[#5a4e4a] font-bold text-lg">${item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                                <svg 
                                onClick={() => eliminarDelCarro(item.id)}
                                xmlns="http://www.w3.org/2000/svg" 
                                className="cursor-pointer h-[20px] w-[20px] p-1 rounded-full text-gray-400 border-gray-400 border-[2px]"
                                fill="none" 
                                viewBox="0 0 10 10">
                                    <path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
                                </svg>
                            </div>
                        </div>
                    )
                }
                )}
                {carrito.length > 0 ?
                <>
                <div className="py-3 border-b-[1px] border-b-gray-300 flex flex-row items-end gap-2 flex-wrap justify-between">
                    <p className="text-lg text-gray-800 font-semibold">Order Total</p>
                    <p className="text-2xl font-bold text-orange-950">${total}</p>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center bg-[#fcf8f5] p-4 rounded-lg">
                    <img src="/img/icon-carbon-neutral.svg" className="h-5 w-auto" alt="Carbon neutral" />
                    <p className="text-md text-orange-950">This is a <span className="font-bold">carbon-neutral</span> delivery</p>
                </div>
                <button onClick={showModal} className="cursor-pointer mt-4 p-4 rounded-full bg-orange-500 hover:bg-orange-950 duration-300 text-white text-lg font-semibold">Confirm Order</button>
                <Modal
                    open={isModalOpen}
                    centered
                    footer={false}
                    closable={false}
                >
                    <div className="flex flex-col items-start gap-y-4 my-10">
                        <div className="flex flex-row items-center gap-2">
                            <img src="/img/icon-order-confirmed.svg" className="h-9 w-auto"/>
                            <p className="font-bold text-orange-950 text-3xl">Order Confirmed</p>
                        </div>
                        <p className="text-orange-950">We hope you enjoy your food!</p>
                    </div>
                    <div className="bg-[#fcf8f5] rounded-md p-8">
                        {carrito.map(item => {
                            return(
                                <div className="pb-4">
                                    <div className="flex flex-row gap-3 justify-between items-end">
                                        <div className="flex flex-row gap-3">
                                            <div className="overflow-hidden h-14 w-16 rounded-md relative z-0">
                                                <img src={item.thumbnail} className="h-16 absolute w-auto rounded-3" alt={item.name} />
                                            </div>
                                            <div className="flex flex-col gap-y-2">
                                                <p className="text-gray-900 font-semibold text-md">{item.name}</p>
                                                <div className="flex flex-row gap-4 items-end">
                                                    <p className="text-orange-500 font-semibold text-md">{item.quantity}x</p>
                                                    <p className="text-[#5a4e4a]/70 text-md">${item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[#5a4e4a] font-bold text-lg">${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            )
                        }
                        )}
                        <div className="py-3 flex flex-row items-end gap-2 flex-wrap justify-between">
                            <p className="text-md text-orange-950">Order Total</p>
                            <p className="text-2xl font-bold text-orange-950">${total}</p>
                        </div>
                    </div>
                    <button onClick={() => newOrder()} className="cursor-pointer w-full mt-4 p-4 rounded-full bg-orange-500 hover:bg-orange-950 duration-300 text-white dark:bg-white dark:text-orange-950 text-lg font-semibold capitalize">Start new order</button>
                </Modal>
                </> 
                : 
                <div className="flex flex-col items-center justify-center my-5">
                    <img src="/img/illustration-empty-cart.svg" className="h-44 w-auto" alt="Empty cart" />
                    <p className="text-[#5a4e4a]/70 text-md font-bold">You added items will appear here</p>
                </div>
                }
            </div>
        </div>
    )
}