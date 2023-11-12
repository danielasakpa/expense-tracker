import React, { createContext, useContext, useState } from 'react';

const InputContext = createContext();

const InputProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);


    const addInput = (newInput) => {
        setExpenses((prevList) => [...prevList, newInput]);

        console.log(newInput)

        if (newInput.amount > 0) {
            // Calculate and update income
            setIncome((prevIncome) => prevIncome + newInput.amount);
        } else {
            // Calculate and update expense
            setExpense((prevExpense) => prevExpense + newInput.amount);
        }
    };

    const deleteInput = () => {
        setExpenses((prevList) => prevList.slice(0, -1));
    };

    const contextValue = {
        expenses,
        income,
        expense,
        addInput,
        deleteInput,
    };

    return <InputContext.Provider value={contextValue}>{children}</InputContext.Provider>;
};

const useInput = () => {
    const context = useContext(InputContext);
    if (!context) {
        throw new Error('useInput must be used within an InputProvider');
    }
    return context;
};

export { InputProvider, useInput };
