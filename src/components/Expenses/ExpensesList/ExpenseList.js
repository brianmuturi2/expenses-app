import ExpenseItem from '../ExpensesItem/ExpenseItem';
import './ExpenseList.css'
import Card from '../../UI/Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpenseFilter';
import {useState} from 'react';

function ExpenseList(props) {

    const [state, setState] = useState({
        filteredYear: '2020'
    });

    function filterChangeHandler(selectedYear) {
        setState(prevState => ({...prevState, filteredYear: selectedYear}));
        props.onFilterChange(selectedYear);
    }

    return (
        <Card className="expensesList">
            <ExpensesFilter selected={state.filteredYear} onChangeFilter={filterChangeHandler}/>
            {
                props.expenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                ))
            }
        </Card>
    );
}

export default ExpenseList
