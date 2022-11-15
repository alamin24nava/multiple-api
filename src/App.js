import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './layout/layout.module.css'
import Aside from './layout/Aside';
import Header from './layout/Header';
import { useState } from 'react';
import Countries from './pages/Countries/Index';
import Todo from './pages/Todo/Index';

function App() {
    const [expandSideBar, setExpandSideBar] = useState(true)
    const handleExpand = (expand) =>{
        setExpandSideBar(!expand)
    }
    return (
        <div className="main">
            <Header onExpand = {handleExpand} />
            <Aside expandSideBar ={expandSideBar} />
            <div className='main-content'>
                <Countries />
                <Todo />
            </div>
        </div>
    );
}

export default App;
