import './Expenses.css'
import Card from '../../UI/Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpenseFilter';
import {useState} from 'react';
import ExpenseList from '../ExpensesList/ExpenseList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

function Expenses(props) {

    let expenses = props.expenses

    const [state, setState] = useState({
        filteredYear: '2020',
        expenses
    });

    function filterChangeHandler(selectedYear) {
        setState(prevState => ({...prevState, filteredYear: selectedYear}));
        filterExpenses(selectedYear);
    }

    function filterExpenses(date) {
        const newExpenses = expenses.filter(expense => ((new Date(expense.date).getFullYear()) == (new Date(date).getFullYear())));
        setState(prevState => ({...prevState, expenses: newExpenses}));
    }

    return (
        <Card className="expensesList">
            <ExpensesFilter selected={state.filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={state.expenses}/>
            <ExpenseList expenses={state.expenses}/>
        </Card>
    );
}

export default Expenses
