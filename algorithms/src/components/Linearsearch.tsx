'use client'

import React, { useState, useEffect } from 'react';

export default function SearchThatIsLinear() {
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState(0);
    //these two are for storing the input and transform it from string to number

    const [currentIndex, setCurrentIndex] = useState(0);
    const [found, setFound] = useState(false);
    //values related with the useEffect function
    //found is a dependency of it,
    //currentIndex forms part of the search

    //generate Array of 30
    const array = Array.from({ length: 30 }, (_, i) => i);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const pickedNumber = parseInt(value);
        setInputValue(pickedNumber);
        setCurrentIndex(0); // Reset the index for new search
        setFound(false);    // Reset found status for new search
    };



    // useEffect function where each second the linear search is displayed
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                // If prevIndex has reached the end of the array or the value has been found,
                // clear the interval and return prevIndex as the found index.
                if (prevIndex >= array.length || found) {

                    //unmount and return value
                    clearInterval(interval);
                    return prevIndex;
                }

                // If the current element in the array matches the inputValue,
                // set found to true, clear the interval, and return prevIndex.
                if (array[prevIndex] === inputValue) {
                    setFound(true);

                    //unmount and return value
                    clearInterval(interval);
                    return prevIndex;
                }

                // If neither condition is met, increment prevIndex and repeat.
                return prevIndex + 1;
            });
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts or dependencies change.
        return () => clearInterval(interval);

        // Dependency list: the useEffect will re-run if any of these variables change.
    }, [array, inputValue, found]);




    return (
        <>
            <h3 className="font-bold"> Linear search</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {array.map((num, index) => (
                    <div
                        key={index}
                        className={`text-center w-8 h-8 border-2 m-1 ${index === currentIndex ? 'border-bold' : ''}`}
                    >
                        {num}
                    </div>
                ))}
            </div>

            <div>
                <form className="gap-3" onSubmit={handleSubmit}>
                    <input
                        className="bg-slate-100 rounded-md pr-3"
                        type="number"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <div className="border-solid border-black font-serif p-2">
                        <button type='submit' className="border-inherit">Click to look for this number</button>
                    </div>
                </form>
            </div>
        </>
    );
}
