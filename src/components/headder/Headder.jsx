import imgHero from '../img/cannabis-2152602_1280.jpg'
import imgHeroTwo from '../img/weedHero.jpg'
import imgHeroBanner from '../img/heroIMG.jpg'
// import ArrowRight from '../CompoIcons/ArrowRight'
// import ArrowLeft from '../CompoIcons/ArrowLeft'


const Headder = () => {
  return (
    //banner 
        <div className="grid grid-cols-4">
            <section className='relative z-0 col-span-4 py-20 flex items-center lg:py-36 before:absolute before:inset-0 before:bg-[#0000007c] before:z-10'>
                <img src={imgHeroBanner} alt="" className='absolute object-cover h-full w-full inset-0'/>
                <div className="w-full lg:w-1/2 text-center relative text-gray-100 p-5 z-10 mx-auto">
                    <h5 className='font-bold text-6xl'>Lorem, <strong className='text-green-600'>ipsum</strong> dolor.</h5>
                    <p className='font-thin hidden lg:block '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident soluta enim, nam iste similique nesciunt rem ab ad et tempore deleniti consequuntur distinctio eligendi quaerat asperiores ratione harum nemo doloribus!</p>
                </div>
            </section>
            <section className="relative z-10 col-span-4 ">
                <div className='flex flex-col items-center gap-6 py-5 lg:h-96 justify-evenly lg:flex-row'>
                    
                    
                    <div className="h-auto lg:h-60 w-72 hover:shadow-lg lg:hover:h-80 hover:scale-110 transition-all rounded text-center lg:overflow-hidden">
                        <img src={imgHeroTwo} alt="" className='w-full' />
                        <div className=' p-2'>
                            <h5 className="font-bold pt-3">Informacion</h5>
                            <p className='text-center text-xs text-green-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href="/" className='my-3'>Ir</a>
                        </div>
                    </div>

                    <div className="h-auto lg:h-60 w-72 hover:shadow-lg lg:hover:h-80  hover:scale-110 transition-all rounded text-center lg:overflow-hidden">
                        <img src={imgHero} alt="" className='w-full' />
                        <div className='flex flex-col gap-2 p-2'>
                            <h5 className="font-bold pt-3">Banco de semillas</h5>
                            <p className='text-center text-xs text-green-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, illo!</p>
                            <a href="/" className='my-3'>Ir</a>
                        </div>
                    </div>

                    <div className="h-auto lg:h-60 w-72 hover:shadow-lg lg:hover:h-80 hover:scale-110 transition-all rounded text-center lg:overflow-hidden">
                        <img src={imgHeroTwo} alt="" className='w-full' />
                        <div className=' p-2'>
                            <h5 className="font-bold pt-3">kit's Parafernalia</h5>
                            <p className='text-center text-xs text-green-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href="/" className='my-3'>Ir</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
   
  )
}

export default Headder
