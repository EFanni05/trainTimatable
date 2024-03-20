import { FormEvent, useState } from "react"
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export function FormRoute(){
    const [time, setTime] = useState("")
    const [routeid, setRouteid] = useState("")

    async function createRoute(e : FormEvent){
        e.isDefaultPrevented()
        await fetch("http://localhost:3000/timetable/", {
            method : "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body : JSON.stringify({
                "time" : time,
                "route_id" : routeid 
            })
        })
    }
    return <div>
        <h4>New time:</h4>
        <form onSubmit={createRoute} className="form-control">
        <h5>Time</h5>
        <input type="datetime-local" name="" id="" onChange={(e) => setTime(e.target.value)} />
        <h5>route</h5>
        <input type="radio" name="route" id="this" value={1} onChange={(e) => setRouteid(e.target.value)}/>
        <label htmlFor="this">Kerekerdő-felső - Kerekerdő-alsó</label>
        <input type="radio" name="route" id="that" value={2} onChange={(e) => setRouteid(e.target.value)}/>
        <label htmlFor="that">Kerekerdő-alsó - Kerekerdő-felső</label>
        <button type="submit" className="btn btn-outline-primary">Create</button>
        </form>
     </div>
}