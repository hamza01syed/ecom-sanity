"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,

  } from "@/components/ui/sheet"
import { useShoppingCart } from 'use-shopping-cart'
import Image from 'next/image'
import { Button } from './ui/button'


const ShoppingCartModel = () => {
    const {cartCount,shouldDisplayCart,handleCartClick, cartDetails,removeItem,totalPrice,redirectToCheckout}=useShoppingCart()

    async function handleCheckoutClick(event: { preventDefault: () => void }) {
        event.preventDefault()
       try {
        
             const result=await redirectToCheckout()
             console.log("results",result)
       } catch (error) {
            console.log("errorrr...",error)
       }
           
        
    }
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()} >
    <SheetContent className='sm:max-w-lg w-[90vw] '>
      <SheetHeader>
        <SheetTitle>Shopping Cart</SheetTitle>
      </SheetHeader>
      <div className='h-full flex flex-col justify-between'>
        <div className="flex-1 mt-8 overflow-y-auto">
            <ul className='-my-6 divide-y divide-gray-200 '>
                {
                    cartCount===0?(
                            <h1 className=' py-6'>you dont have any items</h1>
                    ):(
                        <>
                        {Object.values(cartDetails ?? {}).map((entry)=>(
                            <li key={entry.id} className='py-6 flex'>
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <Image src={entry.image as string} alt="product image" width={100} height={100} />
                                </div>
                                <div className="flex ml-4 flex-1 flex-col ">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900 ">
                                            <h3>{entry.name}</h3>
                                            <p>${entry.price}</p>
                                        </div>
                                        <p className='mt-1 text-sm text-gray-500 line-clamp-2'>{entry.description}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className='text-gray-500'>QTY:{entry.quantity}</p>
                                        <div className="flex">
                                            <button type="button" onClick={()=>removeItem(entry.id)} className='font-medium text-purple-600 hover:text-purple-900'>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        ))}
                        </>
                    )
                }
            </ul>
        </div>
        <div className="px-4 border-t border-gray-200 py-6 sm:px-6 ">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>SubTotal:</p>
                    <p>${totalPrice}</p>
                </div>
                <p className='mt-0.5 text-sm text-gray-500 '>Shipping and taxes are calculated at checkout</p>
                <div className="mt-6">
            <Button onClick={handleCheckoutClick} className='w-full '>
                checkout
            </Button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        OR <button onClick={()=>handleCartClick()} className='font-medium text-purple-500 hover:text-purple-500/80'>Continue Shopping</button>
                    </p>
            </div>
        </div>
       
      </div>
     
    </SheetContent>
  </Sheet>
  )
}

export default ShoppingCartModel