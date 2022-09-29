import CartImg from '../CompoIcons/Cart'
import Menu from '../CompoIcons/Menu'
import { useState } from 'react'

const Nabvar = () => {
    const [classUse, setClassUse] = useState(false);
    const showMenu = () => {
        setClassUse(!classUse)
    }
  return (
    <nav className='flex justify-between px-5 py-10 items-center' >
        <button
            className='h-full w-10 hover:bg-slate-400'
            onClick={showMenu}
        >
            <Menu/>
        </button>
        <div className={`grid absolute inset-0 left-1/2 bg-gray-100 font-medium text-center lg:flex lg:relative translate-x-full transition-transform ${classUse? '-translate-x-0': ''}`}>
            <a href="/" className='hover:bg-amber-400 hover:text-sky-400'>Home</a>
            <a href="/" className='hover:bg-amber-400 hover:text-sky-400'>Catalogo</a>
            <a href="/" className='hover:bg-amber-400 hover:text-sky-400'>Contact</a>
            <a href="/" className='hover:bg-amber-400 hover:text-sky-400'>Ofertas</a>
        </div>
        <p className='ml-1/2'>Logo</p>
        
        <CartImg />

    </nav>
  )
}

export default Nabvar
