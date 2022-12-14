// Export a stateless functional component
import React from "react";
import { Link } from 'react-router-dom';



const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>amount: {amount}  ||  created at:{createdAt}</p>
    
    <p>__________________________________</p>
    </div>
);

export default  ExpenseListItem;