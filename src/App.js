import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import MainPage from './components/mainPage';
import Footer from './components/footer';
import Posts from './components/posts';

function App() {
  return (
    <div className="page-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/posts" component={Posts} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);

// app-id  5f89bf78b0baa448f47363a6
