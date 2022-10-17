import Headder from "./components/headder/Headder";
import Nabvar from "./components/nabvar/Nabvar";
import CardItems from './components/CardItems/Cards'


function App() {
  return (
    <>
      <main className="font-serif">
        <Nabvar />
        
        <Headder />
      
      </main>
        <div className=" grid grid-cols-1 lg:grid-cols-7 w-4/5 mx-auto">
          <section className="col-span-1">
            <form className="flex flex-col justify-between h-full">
                <ol className="flex flex-wrap gap-2">
                  <li><a href="/">Home</a></li>
                  <li><span>/</span></li>
                  <li><a href="/">Vesturio</a></li>
                  <li><span>/</span></li>
                  <li><a href="/" aria-current="page" className="text-blue-500">Hombre</a></li>
                </ol>

                <div className="grid grid-cols-2 items-center place-content-center">
                  <h2 className="col-span-2">lorem ipsum</h2>
                  <input type="radio" name="options" className="col-span-1"/> 
                  <label htmlFor="optionOne" className="col-span-1">option 1</label>
                
                  <input type="radio" name="options" className="col-span-1"/>
                  <label htmlFor="optionTwo" className="col-span-1">option 2</label>
                
                  <input type="radio" name="options" className="col-span-1"/> 
                  <label htmlFor="optionTree" className="col-span-1">option 3</label>
                </div>

                <div>
                  <h2>Rango de dinero</h2>
                  <input type="range" name="" className="w-fullx" />
                </div>

                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              
            </form>
          </section>
          
          <CardItems />

          <section className="col-span-1 text-right border p-2 hidden"></section>
        </div>
    </>
  );
}

export default App;
