import CartImg from '../CompoIcons/Cart'
import LikeImg from '../CompoIcons/Like'
import Menu from '../CompoIcons/Menu'
import imgHero from '../img/logoSinBg.png'
import { useState } from 'react'

const Nabvar = () => {
    const [classUse, setClassUse] = useState(false);
    const showMenu = () => {
        setClassUse(!classUse)
    }
  return (
        <nav className='
                flex
                justify-between 
                lg:justify-around 
                px-5  
                lg:py-0
                lg:gap-28
                items-center 
                relative
                h-[20]
                '
            >
            <button
                className='
                    h-full w-10 
                    hover:bg-slate-400 
                    lg:hidden'
                onClick={showMenu}
            >
                <Menu />
            </button>

            <div className={`
                    text-gray-600
                    grid
                    grid-cols-1
                    absolute
                    left-0 right-0 top-full
                    gap-4
                    lg:bg-transparent 
                    transition-all 
                    bg-gray-100 
                    font-
                    place-content-evenly
                    text-center
                    text-sm
                    lg:grid-cols-4 
                    lg:relative 
                    lg:visible 
                    lg:h-auto  
                    z-10
                    ${classUse 
                        ?'h-72 visible '
                        :'h-0 invisible overflow-hidden'
                    }`}
                >
                <a href="/">Home</a>
                <a href="/">Product</a>
                <a href="/">Contact</a>
                <a href="/">about...</a>
            </div>

            <img src={imgHero} alt="logoImgHero" className='block w-28 object-cover drop-shadow-lg lg:mr-[15%]' />
            {/* <div className='flex items-center'>
            <p className='text-4xl font-bold font-sans'>Logo</p>
            </div> */}
            
            <div className='grid grid-cols-2 items-center lg:gap-6'>
                <button className='col-span-1 scale-150 relative'>
                    <CartImg  />
                    <div className='absolute top-0 left-3/4 w-4 h-4 text-white text-center leading-[.8] rounded-full bg-black'>
                        <span className='font-normal text-xs'>0</span>
                    </div>
                </button>
                <button >
                    <LikeImg/>
                </button>
            </div>
        </nav>
    
  )
}

export default Nabvar
