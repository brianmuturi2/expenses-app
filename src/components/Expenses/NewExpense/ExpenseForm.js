import {useState} from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {

     const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const [addExpenseState, setAddExpenseState] = useState({
        addExpense: false
    })

    function titleChangeHandler(event) {
        setUserInput(prevState => ({...prevState, title: event.target.value}))
    }

    function amountChangeHandler(event) {
        setUserInput(prevState => ({...prevState, amount: event.target.value}))
    }

    function dateChangeHandler(event) {
        setUserInput(prevState => ({...prevState, date: event.target.value}))
    }

    function submitHandler(event) {
        event.preventDefault();
        props.onSaveExpenseData(userInput)
        setUserInput(prevState => ({...prevState, title: '', amount: '', date: ''}));
        cancelAddExpenseHandler();
    }

    function cancelAddExpenseHandler(event) {
        event.preventDefault();
        setAddExpenseState(prevState => ({...prevState, addExpense: false}));
    }

    function addExpenseHandler() {
        setAddExpenseState(prevState => ({...prevState, addExpense: true}));
    }

    if (!addExpenseState.addExpense) {
        return <button onClick={addExpenseHandler}>Add Expenses</button>
    }

    if (addExpenseState.addExpense) {
        return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} value={userInput.title}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={userInput.amount}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-01" onChange={dateChangeHandler} value={userInput.date}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={cancelAddExpenseHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        )
    }

}

export default ExpenseForm
