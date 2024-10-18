
import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleInput = (value) => {
        setInput(input + value);
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    };

    const calculateResult = () => {
        try {
            setResult(eval(input)); 
            setInput('');
        } catch (error) {
            setResult('Error value');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
             <h1 class="calculator-heading">The Online Calculator</h1>
            <div style={{ marginBottom: '10px', fontSize: '24px' }}>{input || '0'}</div>
            <div style={{ marginBottom: '10px', fontSize: '20px', color: 'gray' }}>{result}</div>
            <div class="button-container">
    <button class="calc-button" onClick={() => handleInput('1')}>1</button>
    <button class="calc-button" onClick={() => handleInput('2')}>2</button>
    <button class="calc-button" onClick={() => handleInput('3')}>3</button>
    <button class="calc-button operator" onClick={() => handleInput('+')}>+</button>
</div>
<div class="button-container">
    <button class="calc-button" onClick={() => handleInput('4')}>4</button>
    <button class="calc-button" onClick={() => handleInput('5')}>5</button>
    <button class="calc-button" onClick={() => handleInput('6')}>6</button>
    <button class="calc-button operator" onClick={() => handleInput('-')}>-</button>
</div>
<div class="button-container">
    <button class="calc-button" onClick={() => handleInput('7')}>7</button>
    <button class="calc-button" onClick={() => handleInput('8')}>8</button>
    <button class="calc-button" onClick={() => handleInput('9')}>9</button>
    <button class="calc-button operator" onClick={() => handleInput('*')}>*</button>
</div>

<div class="button-container">
    <button class="calc-button clear" onClick={clearInput}>AC</button>
    <button class="calc-button" onClick={() => handleInput('0')}>0</button>
    <button class="calc-button equals" onClick={calculateResult}>=</button>
    <button class="calc-button operator" onClick={() => handleInput('/')}>/</button>
</div>

        </div>
    );
};

export default Calculator;
