import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Inicio from '../components/Inicio'
import Acerca from '../components/Acerca'
import PartesContainers from './PartesContainer'

function Content(){
    return(
      <>
      <Switch>
        <Route exact path='/inicio' component={ Inicio } />
        <Route exact path='/acerca' component={ Acerca } />
        <Route exact path='/parte' component={ PartesContainers } />
      </Switch>
      </>
    )
}

export default Content
