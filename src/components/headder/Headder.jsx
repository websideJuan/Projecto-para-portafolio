import FormAction from "../Form/Formulario"

const Headder = () => {
    

  return (
    <div className="h-[85vh] bg-[url('./components/img/store-gc9a005ade_640.png')] bg-cover bg-center  flex items-center">
        <div className="container mx-auto py-10 lg:py-20 bg-white w-3/4 rounded-lg">
            <section className="max-w-2xl mx-auto text-center px-4 mb-5">
                <h1 className="text-3xl font-extrabold mb-2 ">Lorem ipsum dolor sit.</h1>
                <p className="font-light text-sm text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas animi quis suscipit voluptate?</p>
            </section>
            <FormAction />
        </div>
    </div>
  )
}

export default Headder
