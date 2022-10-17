// import { useState } from 'react'
import  imgProduct from '../img/97783767.jpg'
import pruebaImg from '../img/logoSinBg.png'


const Cards = () => {
    let carritoArr = []
    
    const handleAddCar = (props) => {
        const itemCard = props.parentElement
        if(carritoArr.length === 0) {
            carritoArr.push(itemCard)
        }
        console.log(carritoArr)
    }
  return (
    <div className='container mx-auto col-span-6 border flex flex-wrap justify-around py-5'>
        
        <article className='w-40 lg:w-52 flex flex-col border rounded overflow-hidden shadow-lg relative'>
            <img src={imgProduct} alt="" className='w-full h-full' />
            
            <img src={pruebaImg} className="absolute scale-75 rounded-3xl inset-0 bg-white" alt="" />
            
            <section className='grid grid-cols-1 p-2 mx-auto'>
                <h3 className='font-bold underline w-full'>Name product :</h3>
                <p className='font-thin text-xs hidden lg:block py-3'>description product Lorem ipsum dolor sit amet.</p>
                <span>$ 5.000</span>
                <button
                    className='border rounded'
                    onClick={(e) => handleAddCar(e.target)}
                >
                    add to card 
                </button>
            </section>
        </article>

        <article className='w-40 lg:w-52 flex flex-col border rounded overflow-hidden shadow-lg'>
            <img src={imgProduct} alt="" className='w-full h-full' />
            <section className='grid grid-cols-1 p-2 mx-auto'>
                <h3 className='font-bold underline w-full'>Name product :</h3>
                <p className='font-thin text-xs hidden lg:block py-3'>description product Lorem ipsum dolor sit amet.</p>
                <span>$ 5.000</span>
                <button
                    className='border rounded'
                    onClick={(e) => handleAddCar(e.target)}
                >
                    add to card 
                </button>
            </section>
        </article>

        <article className='w-40 lg:w-52 flex flex-col border rounded overflow-hidden shadow-lg'>
            <img src={imgProduct} alt="" className='w-full h-full' />
            <section className='grid grid-cols-1 p-2 mx-auto'>
                <h3 className='font-bold underline w-full'>Name product :</h3>
                <p className='font-thin text-xs hidden lg:block py-3'>description product Lorem ipsum dolor sit amet.</p>
                <span>$ 5.000</span>
                <button
                    className='border rounded'
                >
                    add to card 
                </button>
            </section>
        </article>

        <article className='w-40 lg:w-52 flex flex-col border rounded overflow-hidden shadow-lg'>
            <img src={imgProduct} alt="" className='w-full h-full' />
            <section className='grid grid-cols-1 p-2 mx-auto'>
                <h3 className='font-bold underline w-full'>Name product :</h3>
                <p className='font-thin text-xs hidden lg:block py-3'>description product Lorem ipsum dolor sit amet.</p>
                <span>$ 5.000</span>
                <button
                    className='border rounded'
                >
                    add to card 
                </button>
            </section>
        </article>
    </div>
  )
}

export default Cards
