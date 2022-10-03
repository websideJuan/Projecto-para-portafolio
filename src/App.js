import Headder from "./components/headder/Headder";
import Nabvar from "./components/nabvar/Nabvar";
import CardItems from './components/CardItems/Cards'


function App() {
  return (
    <>
      <main className="h-screen font-serif">
        <Nabvar/>
        
        <Headder/>
      
      </main>
      <section className="mt-6">
        <div className="container mx-auto h-screen">
          <div className="grid grid-cols-1  lg:grid-cols-7">

            <section className="col-span-1">1</section>
            
            <CardItems/>
            
            <section className="col-span-1 text-right">3</section>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;
