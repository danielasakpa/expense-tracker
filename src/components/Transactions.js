import React from 'react'
import Transaction from './Transaction'
import { useInput } from '../context/InputProvider';

function Transactions() {
    const { expenses } = useInput();

    return (
        <div>
            <h3>History</h3>
            <ul className='list'>
                {
                    expenses.map((expense, i) => (
                        <Transaction key={i} expense={expense} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Transactions