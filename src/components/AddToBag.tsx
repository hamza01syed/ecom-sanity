"use client"
import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '@/sanity/lib/image'

export interface ProductCart{
    name:string
    description :string
    price:number
    currency:string
    image:string
    price_id:string
}

const AddToBag = ({name,description,price,currency,image,price_id}:ProductCart) => {
    const {addItem,handleCartClick}=useShoppingCart()
    const Product={
        name:name,
        description:description,
        price:price,
        currency:currency,
        image:urlFor(image).url(),
        price_id:price_id
    }
  return (
    <Button onClick={
        ()=>{
            addItem(Product),handleCartClick()
        }
    }>Add to Cart</Button>
  )
}

export default AddToBag