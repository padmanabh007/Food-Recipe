import { useContext } from "react"
import { context } from "../Menu/Menu"
import Youtube from 'react-youtube'

export default function Details(){



    const menus = useContext(context)
    var value=menus[0].strYoutube.split("=");
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    return (
        <div>
            {}
            <h1>{menus[0].strMeal}</h1>
            <img src={menus[0].strMealThumb} />
            <h2>{menus[0].strArea}</h2>
            <p>{menus[0].strInstructions} </p>
            <a href={menus[0].strSource} >Reference</a>
            {menus[0].strYoutube ? <Youtube videoId={value[1]} opts={opts}/>:""}

        </div>

    )
}