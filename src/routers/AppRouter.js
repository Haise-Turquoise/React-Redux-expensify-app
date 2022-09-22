import React from 'react';
import AddPage from '../components/Add';
import EditPage from '../components/Edit';
import HelpPage from '../components/Help';
import DashPage from '../components/Dash';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';











const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashPage} exact={true} />
                <Route path="/create" component={AddPage}  exact={true}/>
                <Route path="/edit/:id" component={EditPage}  exact={true}/>
                <Route path="/help" component={HelpPage}  exact={true}/>
                <Route component={NotFoundPage}  exact={true}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;