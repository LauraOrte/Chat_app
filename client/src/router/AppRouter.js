import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

//establacer rutas (principal y sencudaria)
export const AppRouter = () => {

    //verificar el estado de la sesión
    const { auth, verificaToken } = useContext( AuthContext );


    //cada vez que se recarge, solo única vez ejecutará ésto
    useEffect(() => {
      verificaToken();
    }, [verificaToken])
    

    if ( auth.checking ){
        return <h1>Espere por favor</h1>
    }


    return (
        <Router>
        <div>
            
            <Switch>
                {/* <Route path="/auth" component={ AuthRouter } /> */}
                <PublicRoute isAhthenticated={ auth.logged } path="/auth" component={ AuthRouter } />
                <PrivateRoute isAhthenticated={ auth.logged } exact path="/" component={ ChatPage } />

                <Redirect to="/" />

            </Switch>
        </div>
        </Router>
    )
    }
