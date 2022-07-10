import ExpenseItem from '../ExpensesItem/ExpenseItem';
import './ExpenseList.css'

function ExpenseList(props) {

    const expenses = props.expenses

    if (expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses found!</h2>
    }

    if (expenses.length > 0) {
        return (
            <ul className='expenses-list'>
                {expenses.map(expense => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                ))}
            </ul>
        )
    }

}

export default ExpenseList
