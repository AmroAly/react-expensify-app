
import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ description, amount, createdAt, id}) => (
    <div>
        <h3>Expense Description: {description}</h3>
        <p>Amount: {amount} - {createdAt}</p>

        <Link to={`/edit/${id}`}>Edit</Link>
    </div>
);

export default ExpenseListItem;