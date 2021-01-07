import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuctionShowPage from './components/AuctionShowPage';
import AuctionIndexPage from './components/AuctionIndex';
import AuctionNewPage from './components/AuctionNewPage';
import { Session } from './requests';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clocksCount: [1],
      user: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  componentDidMount() {
    Session.currentUser()
      .then(user => {
        console.log(user);
        this.setState((state) => {
          return {
            user: user
          }
        })
      })
  }

  handleSubmit(params) {
    console.log(this);
    Session.create(params)
    .then(() => {
      return Session.currentUser()
    })
    .then(user => {
      console.log('user: ', user);
      this.setState((state) => {
        return {
          user: user
        }
      })
    })
  }

  destroySession() {
    Session.destroy()
      .then(res => {
        this.setState((state) => {
          return {
            user: null
          }
        })
      })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar currentUser={this.state.user} destroySession={this.destroySession}/>
          <Switch>
            <Route exact path='/auctions'>
              <AuctionIndexPage />
            </Route>
            <AuthRoute
              path='/auctions/new'
              isAuth={this.state.user}
              component={AuctionNewPage}
            />
            <Route path='/auctions/:id' component={AuctionShowPage}>
            </Route>
            <Route path='/sign_in' render={(routeProps) => 
            <SignInPage handleSubmit={this.handleSubmit} 
            {...routeProps}/>}/>
            <Route path='/sign_up'><SignUpPage/></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
