import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import Header from './containers/Header'
import Content from './containers/Content'
import Footer from './containers/Footer'
import { fetchingPartes } from './redux/actionCreators'
class App extends Component {
  componentDidMount() {
    this.props.fetchingPartes()
  }
  render(){
    return (
      <>
        <Header />
          <Content />
        <Footer />
      </>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchingPartes: () => { dispatch(fetchingPartes()) }
})
const mapStateToProps = (store) => ({
  partes: store.partes
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
