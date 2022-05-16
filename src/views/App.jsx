import React from "react";

import './App.css'

import Menu from './../components/layout/Menu';
import Content from '../components/layout/Content';

let App = props => (

    <div className="app">
        <Menu></Menu>
        <Content></Content>
    </div>

)

export default App