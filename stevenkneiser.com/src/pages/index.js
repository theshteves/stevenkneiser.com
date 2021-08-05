import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import About from './about'
import NavBar from '../components/navbar'


const IndexPage = () => {
  return (
    <Router>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <title>Home Page</title>
            <h1>Welcome to my Gatsby site!</h1>
            <p>I'm making this by following the Gatsby Tutorial.</p>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default IndexPage
