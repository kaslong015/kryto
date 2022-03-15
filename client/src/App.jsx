import { Loader, Transactions, Navbar, Footer, Services, Welcome } from "./components";

const App = () => {
  return (
    <div className="min-h-scree">

      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>

      </div>
      <Services/>
      <Transactions/>
      <Footer/>

    </div>
  )
}

export default App
