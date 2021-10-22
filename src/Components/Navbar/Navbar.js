import { useState } from 'react'
import './NavBar.css'
import Axios from '../../Axios'


export default function Navbar(){

    const [data, setData] = useState([])
    var value=''


    const getDetails = () =>{
        Axios.get(`filter.php?i=${value}`).then(response=>{setData(response.data.meals)}).catch(error=> console.log(error.response) )
    }



    return (
        <div className='navbar'>
            <img  className='logo'src="https://thumbs.dreamstime.com/b/food-logo-smile-label-company-grocery-store-
            friendly-vector-illustration-smiling-mouth-symbol-135565322.jpg" alt='img'/>
            <div className='right'>
                <input className='search' type='text' placeholder='Search....' onChange={(e)=>value=e.target.value}/>
                <button className = 'button1' onClick={()=>getDetails()}>Search</button>
            </div>
            {data !== null ? console.log(data):console.log('No data')}
        </div>
    )
}