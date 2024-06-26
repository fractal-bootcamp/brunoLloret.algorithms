'use client'
import { useState, useEffect } from "react";
import { binarySearch } from "@/algorithms/binarysearch";

const BinarySearch = () => {
    //inputValue transfers the value from the input form in order to transform it from string to number
    const [inputValue, setInputValue] = useState<number>(0);
    const [value, setValue] = useState<string>('');
    const [history, setHistory] = useState<Array<number>>([]);
    const [display, setDisplay] = useState<string | null>(null);
    const [currentStep, setCurrentStep] = useState<number | null>(null);

    //generate an empty array of 100 cells
    const generatedArray = Array.from({ length: 101 }, (_, index) => index);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const pickedNumber = parseInt(value);
        setInputValue(pickedNumber);

        // Execute binary search and update history when form is submitted
        const newHistory: number[] = [];
        const result = binarySearch(generatedArray, pickedNumber, 0, generatedArray.length - 1, newHistory);
        setHistory(newHistory);
        setDisplay(`Result: ${result}`);
        setCurrentStep(0); // Start stepping through the search history
    };



    //useEffect triggers a timer through which each second, along the length of the history array
    // shows the step in which currently the binarysearch algorithm is. This is of course a display
    useEffect(() => {
        if (currentStep !== null && currentStep < history.length) {
            const timer = setTimeout(() => {
                setCurrentStep(currentStep + 1);
            }, 1000);

            // Cleanup the timeout when component unmounts or currentStep updates
            return () => clearTimeout(timer);
        }
    }, [currentStep, history]);

    return (
        <>
            <div>
                <div className="grid grid-cols-10 gap-0.5 font-mono">
                    {generatedArray.map((num, index) => (
                        <span key={index}
                            style={{
                                fontWeight: currentStep !== null && history[currentStep] === num ? 'bold' : 'normal',
                                border: currentStep !== null && history[currentStep] === num ? '2px solid black' : 'none',
                                borderRadius: '50%',
                                padding: '5px',
                                display: 'inline-block',
                                width: '20px',
                                textAlign: 'center'
                            }}>
                            {num}
                        </span>
                    ))}
                </div>
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

                <h3 className="border-solid border-black font-serif">Search History:</h3>
                <div>
                    {history.map((num, index) => (
                        <span key={index} style={{
                            fontWeight: index === currentStep ? 'bold' : 'normal',
                            border: index === currentStep ? '2px solid black' : 'none',
                            borderRadius: index === currentStep ? '5%' : 'none',
                            padding: '5px',
                            display: 'inline-block',
                            width: '20px',
                            textAlign: 'center'
                        }}>
                            {num}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BinarySearch;
