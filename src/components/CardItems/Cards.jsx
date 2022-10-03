import  imgProduct from '../img/97783767.jpg'


const Cards = () => {
  return (
        // <h2 className='font-bold hover:font-light'>Destacados... <span>👑</span></h2>
    <div className='col-span-5 text-center'>
        <article className='w-40 flex flex-col border rounded overflow-hidden shadow-lg'>
            <img src={imgProduct} alt="" className='w-full h-full' />
            <section className='grid grid-cols-1 p-2 mx-auto'>
                <h3 className='font-bold underline w-full'>Name product :</h3>
                <p className='font-thin hidden lg:block py-3'>description product Lorem ipsum dolor sit amet.</p>
                <span>$ 5.000</span>
                <button
                    className='border rounded'
                >
                    add to card
                </button>
            </section>
        </article>
        <article className='w-40 border flex flex-col rounded overflow-hidden shadow-lg'>
            <img src={imgProduct} alt="" className='w-full h-full' />
            <section className='grid grid-cols-1 p-2 mx-auto'>
                <h3 className='font-bold underline w-full'>Name product :</h3>
                <p className='font-thin hidden lg:block py-3'>description product Lorem ipsum dolor sit amet.</p>
                <span>$ 5.000</span>
                <button
                    className='border rounded'
                >
                    add to card
                </button>
            </section>
        </article>
        <article className='w-40 flex flex-col border rounded overflow-hidden shadow-lg'>
            <img src={imgProduct} alt="" className='w-full h-full' />
            <section className='grid grid-cols-1 p-2 mx-auto'>
                <h3 className='font-bold underline w-full'>Name product :</h3>
                <p className='font-thin hidden lg:block py-3'>description product Lorem ipsum dolor sit amet.</p>
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
