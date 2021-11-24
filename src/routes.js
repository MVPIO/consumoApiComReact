import React from 'react';
import {
        Routes,
        Route,
        Link,
        BrowserRouter
} from "react-router-dom";

import CadastroVaga from './pages/CadastroVagas';
import Home from './pages/Home'

function MyRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path= '/' element={<Home/>} />
                <Route path='/cadastrovaga' element={<CadastroVaga/>} />
            </Routes>
        </BrowserRouter>
        
    );
}

export default MyRoutes;