import React from 'react'
import{Switch,Route} from "react-router"
import Result from '../Components/ResultPage/Result'
import SchoolDetails from '../Components/School_Details/SchoolDetails'
import FilterPage from "../Pages/Filterpage/FilterPage"

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <FilterPage/>
                </Route>
                <Route path="/details/:id" exact>
                    <SchoolDetails/>
                </Route>
            </Switch>
            
        </div>
    )
}

export default Routes
