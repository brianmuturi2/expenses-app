import ExpenseItem from '../ExpensesItem/ExpenseItem';
import './ExpenseList.css'
import {useState} from 'react';

function ExpenseList(props) {

    const expenses = props.expenses

    const [state, setState] = useState({
        expenses
    })

    if (state.expenses.length !== expenses.length) {
        setState(prevState => ({...prevState, expenses}))
    }

    if (state.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses found!</h2>
    }

    if (state.expenses.length > 0) {
        return (
            <ul className='expenses-list'>
                {state.expenses.map(expense => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                ))}
            </ul>
        )
    }

}

export default ExpenseList
