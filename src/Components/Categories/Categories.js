import { useEffect, useState } from "react";
import axios from "axios";
import './Categories.css'
import YouTube from "react-youtube";



export default function  Categories(){

    const [category, setCategory] = useState([])
    const [details, setDetails] = useState([])
    const [name, setName] = useState([])

    let value = []
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };

    
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).then(response=>setCategory(response.data.categories))
    }, [])

    const getDishes = (k) =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${k}`).then(response=>{
            setDetails(response.data.meals)
        })
        
    }

    const getName = (id) =>{
        axios.get(`lookup.php?i=${id}`).then(response => setName([response.data.meals,true]))
        
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
                {details ? details.map((item,key)=><img key={key}src= {item.strMealThumb} alt='food.img' className='poster' onClick={()=>getName(item.idMeal)} />):""}
            </div>
            { name[1] ?
            <div className='details'>
                <h1>{name[0][0].strMeal}</h1>
                <img src={name[0][0].strMealThumb} alt='food.img' />
                <h2>{name[0][0].strArea}</h2>
                <p>{name[0][0].strInstructions} </p>
                <a href={name[0][0].strSource} >Reference</a>
                {value=name[0][0].strYoutube.split('=')}
                {name[0][0].strYoutube.length>1 ? <YouTube videoId={value[1]} opts={opts}/> : <h1 style={opts}>Not Found</h1>}
            </div>
            :""}
        </div>
    )
    
}
