'use client'



// src/components/MergeSortVisualizer.tsx
import React, { useState, useEffect } from 'react';


interface MergeSortVisualizerProps {
    array: number[];
}

const MergeSortVisualizer: React.FC<MergeSortVisualizerProps> = ({ array }) => {
    const [processSteps, setProcessSteps] = useState<number[][]>([]);

    useEffect(() => {
        const mergeSort = (arr: number[]): number[][] => {
            if (arr.length <= 1) return [arr];

            const mid = Math.floor(arr.length / 2);
            const left = arr.slice(0, mid);
            const right = arr.slice(mid);

            const leftSorted = mergeSort(left);
            const rightSorted = mergeSort(right);

            const merged = merge(leftSorted, rightSorted);
            return [arr, ...merged];
        };

        const merge = (left: number[][], right: number[][]): number[][] => {
            const result: number[][] = [];
            let i = 0, j = 0;

            while (i < left.length && j < right.length) {
                if (left[i][0] <= right[j][0]) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }

            while (i < left.length) {
                result.push(left[i]);
                i++;
            }

            while (j < right.length) {
                result.push(right[j]);
                j++;
            }

            return result;
        };

        const process = mergeSort(array);
        setProcessSteps(process);
    }, [array]);

    return (
        <div className="merge-sort-visualizer">
            {processSteps.map((step, index) => (
                <div key={index} className="step">
                    {step.map((subarray, idx) => (
                        <div key={idx} className="subarray">
                            {Array.isArray(subarray) && subarray.map((num, i) => (
                                <div key={i} className="number">
                                    {num}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MergeSortVisualizer;

