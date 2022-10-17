import CartImg from '../CompoIcons/Cart'
import LikeImg from '../CompoIcons/Like'
import Section from '../CompoIcons/Section'
import Menu from '../CompoIcons/Menu'
// import imgHero from '../img/logoSinBg.png'
import { useState } from 'react'
import FormAction from "../Form/Formulario"
// import Home from '../CompoIcons/Home'


const Nabvar = () => {
    const [classUse, setClassUse] = useState(false);
    const showMenu = () => {
        setClassUse(!classUse)
    }
  return (
        <nav className='
            grid
            grid-cols-3
            items-center
            px-5  
            relative
            z-10
            lg:py-0
            h-24
            lg:grid-cols-4
            lg:container
            lg:mx-auto
            lg:h-16
            '
        >
            {/* <img src={imgHero} alt="logoImgHero" className='w-16 h-20 object-cover' />
             */}
            <p className='font-bold text-lg'>Farm <span className='uppercase text-green-600'>shop</span></p>

            <button
                className='
                    mr-auto
                    ml-2
                    h-8
                    border
                    lg:hidden'
                onClick={showMenu}
            >
                <Menu />
            </button>

            <div className={`
                    text-green-600
                    font-bold
                    grid
                    grid-cols-1
                    items-center
                    font-sans
                    transition-all 
                    bg-gray-100 
                    text-center
                    text-sm
                    lg:gap-4
                    lg:bg-transparent
                    lg:grid-cols-4 
                    lg:visible
                    lg:h-5
                    lg:relative
                    lg:top-0
                    lg:bottom-0
                    z-10
                    ${classUse 
                        ?'absolute h-72 top-full left-0 right-0 visible'
                        :'absolute h-0 invisible top-full left-0 right-0 overflow-hidden '
                    }`}
                >
                    
                <a href="/" className='hover:text-black transition-all hover:underline'> Home</a>
                <a href="/" className='hover:text-black transition-all hover:underline'>Product</a>
                <a href="/" className='hover:text-black transition-all hover:underline'>Contact</a>
                <a href="/" className='hover:text-black transition-all hover:underline'>about...</a>
            </div>


            <div className='flex justify-between items-center lg:justify-center lg:gap-6'>
                <button className='hover:bg-slate-300 hover:h-0 hover:opacity-0 hover:transition-all h-full '>
                    <CartImg />
                </button>
                <button className='hover:bg-slate-300 hover:h-0 hover:opacity-0 hover:transition-all h-full '>
                    <LikeImg/>
                </button>
                <button className='hover:bg-slate-300 hover:h-0 hover:opacity-0 hover:transition-all h-full '>
                    <Section />
                </button>
            </div>
            <FormAction />
        </nav>
  )
}

export default Nabvar
