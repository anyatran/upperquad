import React from 'react'
import { render } from 'react-dom'
// import { browserHistory, IndexRedirect, IndexRoute, Redirect, Router, Route, Link } from 'react-router'
import './styles/app.scss'

// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home} />
//       <Route path="about" component={About} />
//       <Route path="contact" component={Contact} />
//       <Route path="work" component={Work}>
//         <IndexRedirect to="code" />
//         <Route path="code" component={Code} />
//         <Route path="drawings" component={Drawings} />
//         <Route path="music" component={Music} />
//       </Route>
//     </Route>
//   </Router>
// ), document.getElementById('main'))
render((
  <h1>hello there</h1>
), document.getElementById('main'))
