import './Menu.css'
import axios from 'axios'
import { useState, useEffect, createContext} from 'react';
import Details from '../Details/Details';


export const context = createContext()

function Menu(props){

    const [menu, setMenu] = useState([])
    const [detail,setDetail] = useState([])
    

    useEffect(()=> {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.category}`).then(responses=>setMenu(responses.data.meals))
    },[])
    const getIngrediatsandMaking = (k)=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${k}`).then(response => setDetail([response.data.meals,true]) )
    }


    return(
        <div>
            <h2 className='head'>{props.title}</h2>
            <div className='posters'>
                {menu.map((item,k)=>{
                    return(<img className='poster'key={k} src={item.strMealThumb} alt='food.png' onClick={()=>getIngrediatsandMaking(item.idMeal)} />) 
                })}
            </div>
                {detail[1] ?<context.Provider value={detail[0]}> <Details /></context.Provider>:""}
        </div>
    )
}
export default Menu