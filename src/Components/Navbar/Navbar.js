import axios from 'axios'
import { useEffect, useState } from 'react'
import './NavBar.css'


export default function Navbar(){

    const [search, setSearch] = useState('')
    const [data, setData] = useState([])


    useEffect(()=>{
        setSearch('somevalue')
    },[])

    const getDetails = () =>{
        if (search.length >= 1){
            //console.log(search)
            //await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`).then(response=>setData(response.data)).catch(error=> console.log('Not found'))}
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(response=>setData(response.data)).catch(error=> console.log('Not found'))
            console.log(data)}

    }

    return (
        <div className='navbar'>
            <img  className='logo'src="https://thumbs.dreamstime.com/b/food-logo-smile-label-company-grocery-store-friendly-vector-illustration-smiling-mouth-symbol-135565322.jpg" alt='img'/>
            <input className='search' type='text' placeholder='Search....' onChange={(e)=>setSearch(e.target.value)}/>
            <button className = 'button1' onClick={()=>getDetails()}>Search</button>
        </div>
    )
}