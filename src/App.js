import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Post from './component/allPost/Post';
import Users from './component/Users/Users';
import Postdetails from './component/PostDetails/Postdetails';
import { ThemeProvider } from '@material-ui/core';
import theme from './component/theme/Theme';
// import { ThemeProvider } from '@material-ui/core';
// import theme from './component/theme/Theme';

function App() {
  return (
    <div className="App">

      <Router>
        {/* <ThemeProvider theme={theme}> */}
        <Header></Header>
        {/* </ThemeProvider> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path={`/users/:userId`} component={Post} />
          <Route path={`/users/:userId/:postId`} component={Postdetails} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
