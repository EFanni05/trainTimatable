import { useEffect, useState } from "react";
import { Timetable } from "../timetable";

export function tabelContent(content : number){
    const [timetable, setTimetable] = useState([] as Timetable[])

    async function Load(){
        try{
            const response = await fetch(`http://localhost:3000/timetable/find-stop${content}`)
            if(!response.ok){
                alert('These is some problem with the load')
            }
            const x = await response.json() as Timetable[]
            setTimetable(x)
        }catch{
            alert('These is some problem with the load')
        }
    }

    useEffect(() =>{
        Load()
      }, [])

      return <>{timetable.map(x => '<td>' + x.time + '</td>')}</>
}