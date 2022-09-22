// Higher Order Component (HOC) - A componennt (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrapperedComponent) => {
    return (props)=> (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share!</p>}
            <WrapperedComponent {...props}/>
        </div>
    );
};

// requireAuthentication
const requireAuthentication = (WrapperedComponent) => {
    return (props)=> (
        <div>
            {!props.isAuthenticated && 
                <div><p>Need Login</p></div>}
            {props.isAuthenticated && 
                <WrapperedComponent {...props}/>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);





// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the detail" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated ={false} info="This is the detail" />, document.getElementById('app'));
