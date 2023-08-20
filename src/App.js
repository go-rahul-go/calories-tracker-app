import "./style.css";
import Header from "./components/Header"
import Form from "./components/Form";

function App()
{

  return(
    <>
    <Header/>
    <div className="container">
      <Form/>
    </div>
    </>
  )
}

export default App;