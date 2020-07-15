import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login';

import Dashboard from './pages/Dashboard';

import Calls from './pages/Calls';
import AddCall from './pages/AddCall';
import EditCall from './pages/EditCall';
import History from './pages/History';

import Workers from './pages/Workers';
import AddWorker from './pages/AddWorker';
import EditWorker from './pages/EditWorker';

import Users from './pages/Users';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Página de login */}
        <Route exact path="/login" exact component={Login} />

        {/* Home Page */}
        <Route path="/home" component={Dashboard} />

        {/* Call Routes */}
        <Route path="/calls" exact component={Calls} />
        <Route path="/calls/add" component={AddCall} />
        <Route path="/calls/edit/:id" component={EditCall} />
        <Route path="/history" component={History} />

        {/* Worker Routes */}
        <Route path="/workers" exact component={Workers} />
        <Route path="/workers/add" component={AddWorker} />
        <Route path="/workers/edit/:id" component={EditWorker} />

        {/* User routes */}
        <Route path="/users" exact component={Users} />
        <Route path="/users/add" component={AddUser} />
        <Route path="/users/edit/:id" component={EditUser} />

        {/* Redirection */}
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  )
};

export default Router;