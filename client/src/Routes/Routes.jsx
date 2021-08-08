import React from 'react'
import{Switch,Route} from "react-router"
import { ParentsRegForm } from '../Components/Forms/ParentsRegForm'
import { SchoolRegForm } from '../Components/Forms/SchoolRegForm'
import Result from '../Components/ResultPage/Result'
import SchoolDetails from '../Components/School_Details/SchoolDetails'
import FilterPage from "../Pages/Filterpage/FilterPage"
import  {Navbar}  from "./../Components/Navbar/Navbar.jsx";
import {Homepage} from "./../Pages/Homepage/Homepage.jsx"

function Routes() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/searchPage" exact>
                    <FilterPage/>
                </Route>
                <Route path="/details/:id" exact>
                    <SchoolDetails/>
                </Route>
                <Route path="/register-school">
                    <SchoolRegForm/>
                </Route>
                <Route path="/register-parent">
                    <ParentsRegForm/>
                </Route>
            </Switch>
            
        </div>
    )
}

export default Routes
