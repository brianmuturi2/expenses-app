import { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from '../ExpensesDate/ExpenseDate';
import Card from '../../UI/Card/Card';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        setTitle('Updated')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;
