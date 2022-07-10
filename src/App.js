import {useState} from 'react';
import './App.css';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses/Expenses';

function App() {

    const expensesList = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const [expenses, setExpenses] = useState({
        expensesList: [...expensesList]
    })

    function addExpenseHandler(expense) {
        expensesList.push(expense)
        setExpenses(prevState => ({...prevState, expensesList}))
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses.expensesList}/>
        </div>
    );
}

export default App;
