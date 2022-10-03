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

    <form className="relative max-w-3xl z-30  mx-auto w-[90%]" onSubmit={handlesubmit}>
                <label htmlFor="search" className=" w-full h-12 bg-white flex border-2 hover:shadow-xl rounded-full overflow-hidden">
                    <input 
                        type="search" 
                        name="search" 
                        className="px-3 w-full  outline-none" 
                        onChange={(e) => setSearch({...search, name: e.target.value})}
                        onInvalid={heightAnimated}
                    />

                    <button className="p-2 pt-1 text-white font-bold rounded-r-full bg-slate-400" 
                        type="button"
                        onClick={heightAnimated}
                    >
                        <Search className={`${showSearch && 'block'}`}/>
                    </button>
                </label>
                <ul className={`
                    absolute 
                    left-1 top-full right-1 z-20
                    bg-white 
                    text-xs 
                    pt-1
                    pl-3 
                    transition-[height] 
                    ${showSearch 
                        ? 'h-40 shadow-md visible'
                        :'h-0 invisible'}`
                    }>
                    <li className="font-thin text-gray-400">
                        {`hola mundo ${search.name}`}
                    </li>
                </ul>
            </form>
  )
}

export default Formulario
