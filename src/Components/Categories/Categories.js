import { useEffect, useState } from "react";
import axios from "axios";
import './Categories.css'



export default function  Categories(){

    const [category, setCategory] = useState([])
    const [details, setDetails] = useState([])

    
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).then(response=>setCategory(response.data.categories))
    }, [])

    const getDishes = (k) =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${k}`).then(response=>{
            setDetails(response.data.meals)
        })
        
    }

    return(
        <div>
            <h2 className='head'>Select Your Favorite</h2>
            <div className= 'buttons'>
            {
                category.map((items,key)=>{
                    return (<button key={key} className='button' onClick={()=>getDishes(items.strCategory)}>{items.strCategory}</button>)
                })
            }
            </div>
            <div className='row'>
                {details ? details.map((item)=><img src= {item.strMealThumb} alt='food.img' className='poster' />):""}
            </div>
        </div>
    )
    
}
