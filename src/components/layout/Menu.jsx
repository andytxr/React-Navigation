import React from "react";
import { Link } from "react-router-dom";


import './Menu.css'

let Menu = props => (

    <aside className="menu">
       <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/params/123">Parâmetros - 1</Link></li>
                <li><Link to="/params/sim">Parâmetros - 2</Link></li>
                <li><Link to="/about">Sobre</Link></li>   
            </ul>
       </nav>
    </aside>

)

export default Menu