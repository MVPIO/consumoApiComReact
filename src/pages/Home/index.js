import React from "react";
import { Link } from "react-router-dom";



const home = () => {
    return(
      <>  
        
        <div>
            <h1>Home</h1>
            <nav>
                <Link to = '/cadastrovaga' target='_blank'>Cadastrar Vaga</Link>
            </nav>
            <form>
            <div>
                <input type= "text" required/>
                <button type="submit">Cadastrar</button>
            </div>
            </form>
        </div>
       </> 
    )
}

export default home;