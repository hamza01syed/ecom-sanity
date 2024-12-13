import { ProductCart } from "@/components/AddToBag";
import { NextResponse } from "next/server";
const stripe = require('stripe')('sk_test_51QUlWDE3YiTYs8DS7UyqWT9GOP3uTGExTxwsa8tvJVz9J6fxCsEApxikurg3HscqLJa3mhJbhhbLipYR5MD5bhpO002JsLUp0P');

export async function GET({name,description,price,currency,image,price_id}:ProductCart) {
  
  console.log(name)
  const session = await stripe.checkout.sessions.create({
    success_url: "https://example.com/success",
    line_items: [
      {
       price_data:{
        currency:"usd",
        product_data:{
            name:"MAcbook Air"
        },
        unit_amount:1000
       },
       quantity:1
      },
    ],
    mode: "payment",
  });
  return NextResponse.json({ message: session });
}
