import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Inicio from '../components/Inicio'
import Acerca from '../components/Acerca'

export default function Content(){
    return(
      <>
      <Switch>
        <Route exact path='/inicio' component={ Inicio } />
        <Route exact path='/acerca' component={ Acerca } />
      </Switch>
      </>
    )
}
