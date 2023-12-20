import React from "react";
import {Switch , Route, Redirect} from 'react-router-dom';
import { authRoutes } from "./routes/routes";
import {NOT_FOUND_ROUTE } from "../utils/consts"

const AppRouter = () =>{
    const isAuth= false
    return(
        <Switch>
            {isAuth && authRoutes.map(({path,component})=>
                <Route key={path} path={path} Component= {compontnt}/>
            )}
            {authRoutes.map(({path,component})=>
                <Route key={path} path={path} Component= {compontnt}/>
            )}
            <Redirect to {NOT_FOUND_ROUTE}/>
        </Switch>
    )
}

export default AppRouter;