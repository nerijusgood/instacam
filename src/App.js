import { h, Component } from 'preact'
import { Router } from 'preact-router'
import { Home, Missing404 } from './containers'
import { App } from './components'

export default class Site extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		'change' event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <App class='App'>
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Missing404 path="/*" />
        </Router>
      </App>
    )
  }
}
