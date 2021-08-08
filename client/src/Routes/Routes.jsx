import React from "react";
import { Switch, Route } from "react-router";
import { ParentsRegForm } from "../Components/Forms/ParentsRegForm";
import { SchoolRegForm } from "../Components/Forms/SchoolRegForm";
import Result from "../Components/ResultPage/Result";
import ReviewPage from "../Components/ReviewPage/ReviewPage";
import SchoolDetails from "../Components/School_Details/SchoolDetails";
import FilterPage from "../Pages/Filterpage/FilterPage";
import AllReview from '../Components/ReviewPage/AllReview'
import ReviewPage from '../Components/ReviewPage/ReviewPage'
import SchoolDetails from '../Components/School_Details/SchoolDetails'
import { Navbar } from "./../Components/Navbar/Navbar.jsx";
import { Homepage } from "./../Pages/Homepage/Homepage.jsx";
import { ParentLogin } from "./../Pages/LoginPages/ParentLogin";
import { SchoolLogin } from "./../Pages/LoginPages/SchoolLogin";


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
                <Route path="/reviewpage/:id" exact>
                    <ReviewPage/>
                </Route>
                <Route path="/seepreview/:id"exact>
                    <AllReview/>
                </Route>
                <Route path="/login-parent">
                    <ParentLogin/>
                </Route>
                <Route path="/login-school">
                    <SchoolLogin/>
                </Route>
            </Switch> 
        </div>
    )
}

export default Routes;
