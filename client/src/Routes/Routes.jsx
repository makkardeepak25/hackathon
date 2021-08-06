import React from 'react'
import{Switch,Route} from "react-router"
import Result from '../Components/ResultPage/Result'
import FilterPage from "../Pages/Filterpage/FilterPage"

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <FilterPage/>
                </Route>
                <Route path="/result" exact>
                    <Result/>
                </Route>
            </Switch>
            
        </div>
    )
}

export default Routes
