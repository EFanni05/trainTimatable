import { useEffect, useState } from 'react'
import './App.css'
import { Route } from './routes'
import { FormRoute } from './compones/formRoute'
import {tabelContent} from './compones/table'
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  const [route, setRoute] = useState([] as Route[])

  async function Load(){
    try{
      const response = await fetch("http://localhost:3000/route/findAll")
      if(!response.ok){
        alert('These is some problem with the load')
      }
      const x = await response.json() as Route[]
      setRoute(x)
    }catch{
      alert('These is some problem with the load')
    }
  }

  useEffect(() =>{
    Load()
  }, [])
  
  return <div>
    <h3>TimeTable</h3>
    <table className='table table-striped'>
      <tr>
        {route.map(x => `<th>${x.startingStop} - ${x.endingStop}</th> ${<tabelContent content={x.id}/>}`)}
      </tr>
    </table>
    <br/>
    <hr/>
    <FormRoute/>
  </div>
}

export default App
