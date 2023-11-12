import React, { useState } from 'react';
import { useInput } from '../context/InputProvider';

function AddTransaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addInput } = useInput();

    const handleSubmit = (e) => {
        e.preventDefault();
        addInput({ expenseName: text, amount: amount });
    };

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="text">Text:</label>
                    <input
                        type="text"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..."
                    />
                </div>

                <div>
                    <label htmlFor="amount">Amount (negative - expense, positive - income):</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..."
                    />
                </div>

                <button type="submit" className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction