import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({
    isAhthenticated,
    component: Component,
    ...rest
}) => {
  return (
    <Route { ...rest }
        component={ (props) => (
            ( isAhthenticated )
                ? <Component { ...props } />
                : <Redirect to="/auth" />
        )}
        />
  )
}
