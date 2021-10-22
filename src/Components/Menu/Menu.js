import './Menu.css'
import Axios from '../../Axios'
import { useState, useEffect, createContext} from 'react';
import Details from '../Details/Details';


export const context = createContext()

function Menu(props){

    const [menu, setMenu] = useState([])
    const [detail,setDetail] = useState([])
    

    useEffect(()=> {
        Axios.get(`filter.php?c=${props.category}`).then(responses=>setMenu(responses.data.meals))
    },[props.category])
    const getIngrediatsandMaking = (k)=>{
        Axios.get(`lookup.php?i=${k}`).then(response => setDetail([response.data.meals,true]) )
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