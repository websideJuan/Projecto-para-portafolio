import { useState } from "react"
import Search from "../CompoIcons/Search"



const Formulario = () => {
    const [showSearch, setShowSearch] = useState(false)

    const heightAnimated = () => {
        setShowSearch(!showSearch)
    }

    const [search, setSearch] = useState({
        name: '',
        id: 2
    })

    const handlesubmit = e => {
        setShowSearch(!showSearch)

        valueInpt(search.name)
        e.preventDefault()
    } 


    const valueInpt = (data) => {
        console.log(`estos son ${data}`)
    }
  return (

    <form className="relative col-span-3 lg:col-span-1 z-30 h-6" onSubmit={handlesubmit}>
        <label htmlFor="search" className="h-7 rounded bg-white flex items-center border-2 hover:shadow-xl  overflow-hidden">
            <input 
                type="search" 
                name="search" 
                className="px-3 w-full outline-none" 
                onChange={(e) => setSearch({...search, name: e.target.value})}
                onInvalid={heightAnimated}
            />
            
            <button className="w-min h-full text-white font-bold " 
                type="button"
                onClick={heightAnimated}
            >
                <Search />
            </button>
        </label>
        <ul className={`
            absolute 
            left-0 top-full right-0 z-20
            bg-white 
            text-xs 
            pt-1
            pl-3 
            transition-[height] 
            ${showSearch 
                ?'h-40 shadow-md visible'
                :'h-0 invisible'}`
            }>
            <li className="font-thin text-gray-400">
                {`${search.name}`}
            </li>
        </ul>
    </form>
  )
}

export default Formulario
