"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'
const links=[
    {name:"Home",href:"/"},
    {name:"Men",href:"/Men"},
    {name:"Women",href:"/Women"},
    {name:"Teens",href:"/Teens"},

]

const Navbar = () => {
    const {handleCartClick}=useShoppingCart()
  return (
    <header className='mb-8 border-b'>
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl ">
            <Link href="/">
                <h1 className='text-2xl md:text-4xl font-bold'>Next<span className='text-purple-600'>Commerce</span></h1>
            </Link>
            <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
                 {
                    links.map((link,index)=>(
                        <div key={index}>
                            <Link href={link.href} className='text-lg font-semibold hover:text-purple-600'>
                                {link.name}
                            </Link>
                        </div>
                    ))
                 }
            </nav>
            <div className="flex divide-x border-r sm:border-l">
                    <Button variant={'outline'} onClick={()=>handleCartClick()} className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none'>
                        <ShoppingBag/>
                        <span className='hidden text-xs font-semibold text-gray-500 sm:block'>
                            cart
                        </span>
                    </Button>
            </div>
        </div>
    </header>
  )
}

export default Navbar