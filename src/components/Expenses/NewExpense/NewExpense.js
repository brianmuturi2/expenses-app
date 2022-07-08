import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {

    function saveExpenseDataHandler(emittedExpenseData) {
        const expenseData = {
            ...emittedExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense
