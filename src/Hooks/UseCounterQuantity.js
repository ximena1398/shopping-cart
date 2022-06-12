import { useState } from 'react';

export const UseCounterQuantity = (value) => {
    const [counter, setcounter] = useState(value);

    const increase = () => {
        setcounter(counter + 1);
    }

    const decrease = () => {
        setcounter(counter - 1);
        if (counter === 1) {
            setcounter(1);
        }
    }

    return [counter, increase, decrease];
}
