import React from 'react';
import {NavLink} from 'react-router-dom';

const Header =() => (
    <header>
        <h1>Expensify</h1>
        <div className="nav">
        <NavLink to="/" activeClassName="is-active" exact={true}>首页</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>添加</NavLink>
        <NavLink to="/help" activeClassName="is-active" exact={true}>帮助</NavLink>
        </div>
    </header>
);

export default Header;