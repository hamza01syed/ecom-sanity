"use client"
import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '@/sanity/lib/image'
import { ProductCart } from './AddToBag'
// import axios from "axios"
// import { NextResponse } from "next/server";
// const stripe = require('stripe')('sk_test_51QUlWDE3YiTYs8DS7UyqWT9GOP3uTGExTxwsa8tvJVz9J6fxCsEApxikurg3HscqLJa3mhJbhhbLipYR5MD5bhpO002JsLUp0P');


const Checkout = ({name,description,price,currency,image,price_id}:ProductCart) => {
    const {checkoutSingleItem}=useShoppingCart()
    function buyNow(priceId:string){
        console.log("price_id",priceId)
        checkoutSingleItem(priceId)
    }

    //  async function GET() {
      
      
    //   const session = await stripe.checkout.sessions.create({
    //     success_url: "http://localhost:3000/stripe/success",
    //     line_items: [
    //       {
    //        price_data:{
    //         currency:currency,
    //         product_data:{
    //             name:name
    //         },
    //         unit_amount:price*100
    //        },
    //        quantity:1
    //       },
    //     ],
    //     mode: "payment",
    //   });
    //   return NextResponse.json({ message: session });
    // }
    

    // const stripeCheckout=async()=>{
    //   const apiresult=await GET()
    //   const res=await apiresult.json()
    //   console.log("api...",res?.message?.url)
    //   window.location.href=res?.message?.url
    //       // const res=await axios.get(`/api/stripe-checkout/${priceId}`)
    //   // console.log(res?.data?.message?.url)
    //   // window.location.href=res?.data?.message?.url
    // }
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
           buyNow(Product.price_id)
          // stripeCheckout()
        }
    }>Checkout</Button>
  )
}

export default Checkout