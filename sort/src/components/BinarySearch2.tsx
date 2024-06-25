// 'use client'
// import { useState, useEffect } from "react";
// import { binarySearch } from "@/algorithms/binarysearch";
// import { BarChart, Bar, XAxis, Cell } from "recharts";




// const BinarySearch = () => {
//     const [inputValue, setInputValue] = useState<number>(0);
//     const [historyArray, setHistoryArray] = useState<number[]>([]);

//     const generatedArray = Array.from({ length: 101 }, (_, index) => index);


//     useEffect(() => {

//         return binarySearch(generatedArray, inputValue, 0, generatedArray.length - 1, historyArray);
//     }, [inputValue]);

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setInputValue(Number(event.target.value));
//     };

//     const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();

//     };

//     const arrayToBarChart = (array: number[]) => {
//         return array.map((element, index) => ({
//             name: String(element),
//             value: element,
//             fill: historyArray.includes(index) ? "red" : "green"
//         }));
//     };

//     return (
//         <>
//             <div>
//                 <form onSubmit={handleFormSubmit}>
//                     <input
//                         type="number"
//                         value={inputValue}
//                         onChange={handleInputChange}
//                         placeholder="Enter a number to search"
//                     />
//                     <button type="submit">Look for this number</button>
//                 </form>
//                 <div>
//                     <BarChart width={500} height={300} data={arrayToBarChart(generatedArray)}>
//                         <Bar dataKey="value">
//                             {
//                                 arrayToBarChart(generatedArray).map((entry, index) => (
//                                     <Cell key={`cell-${index}`} fill={entry.fill} />
//                                 ))
//                             }
//                         </Bar>
//                         <XAxis dataKey="name" />
//                     </BarChart>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BinarySearch;
