import React, { useState } from 'react';
// COMPONENTS
import Checkbox from 'components/ui/checkbox';
import Button from 'components/ui/button';

function SortMenu({ options, params, onRequestSortHandler }) {

    const [state, setState] = useState([]);

    const setStateHandler = val => () => {
        const clone = [...state];
        const optionIndex = clone.findIndex(option => option === val);
        if (optionIndex === -1)
            clone.push(val);
        else
            clone.splice(optionIndex, 1);
        setState(clone);
    };

    return (
        <div className="vendors__sort-menu">
            <div>
                {
                    options.map(option => (
                        <Checkbox
                            key={option.value}
                            id={option.value}
                            label={option.title}
                            checked={state.includes(option.value)}
                            onChange={setStateHandler(option.value)}
                        />
                    ))
                }
            </div>

            <Button onClick={() => onRequestSortHandler(state)}> اعمال </Button>
        </div>
    )
}

export default SortMenu
