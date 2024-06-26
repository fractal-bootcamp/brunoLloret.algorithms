'use client'

import { bubblesort } from "@/algorithms/bubblesort"
import { number } from "prop-types";
import { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
} from "recharts";

const INITIAL_ARRAY = [1, 3, 5, 1, 2, 3, 4, 9, 1, 2, 7, 1]

const sortHistory = [INITIAL_ARRAY]

bubblesort(INITIAL_ARRAY, (newArr) => sortHistory.push(newArr))


const arrayToBarChart = (array: Array<number>): { name: string, value: number }[] => {

    return array.map((element, index, _) => {
        const newElement = { name: "", value: element }
        return newElement
    })
}

// static: INITIAL ARRAY (no state needed)
// dynamic: animatedArray (state needed)

const BubbleSort = () => {
    const [historicalIndex, setHistoricalIndex] = useState(0)


    useEffect(() => { setTimeout(() => { historicalIndex < sortHistory.length - 1 ? setHistoricalIndex(historicalIndex + 1) : undefined }, 200) }, [historicalIndex])


    return (
        <div>
            <div>
                <BarChart width={200} height={200} data={arrayToBarChart(INITIAL_ARRAY)}>
                    <Bar dataKey="value" fill="green" />
                </BarChart>
            </div>

            <div>
                <BarChart width={200} height={200} data={arrayToBarChart(sortHistory[historicalIndex])}>
                    <Bar dataKey="value" fill="red" />
                </BarChart>
            </div>
        </div >
    )
}

export default BubbleSort


// generate an initial display of the array following color and height of bars
//for this, we design the component, and we map with data over the designed component

// we will render the graph as it is getting organized every second
// for this, we need to store the change of state and display it every certain amount of time
//

