import './Expenses.css'
import Card from '../../UI/Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpenseFilter';
import {useState} from 'react';
import ExpenseList from '../ExpensesList/ExpenseList';

function Expenses(props) {

    let expenses = props.expenses

    const [state, setState] = useState({
        filteredYear: '2020',
        expenses: props.expenses
    });

    function filterChangeHandler(selectedYear) {
        setState(prevState => ({...prevState, filteredYear: selectedYear}));
        filterExpenses(selectedYear);
    }

    function filterExpenses(date) {
        setState(prevState => ({...prevState, expenses: expenses.filter(expense => ((new Date(expense.date).getFullYear()) == new Date(date).getFullYear()))}));
    }

    return (
        <Card className="expensesList">
            <ExpensesFilter selected={state.filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseList expenses={state.expenses}/>
        </Card>
    );
}

export default Expenses
