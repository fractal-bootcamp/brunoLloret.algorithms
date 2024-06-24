// components/ChessBoard.tsx
import React from 'react';

interface Props {
    size: number;
    path: [number, number][];
    currentStep: number;  // New prop to control visible steps
}

const ChessBoard = ({ size, path, currentStep }: Props) => (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${size}, 1fr)` }}>
        {Array.from({ length: size * size }).map((_, index) => {
            const x = Math.floor(index / size);
            const y = index % size;
            const isKnightHere = path.slice(0, currentStep + 1).some(([px, py]) => px === x && py === y);
            return (
                <div key={index} style={{
                    width: 50, height: 50, backgroundColor: (x + y) % 2 ? 'black' : 'white',
                    color: (x + y) % 2 ? 'white' : 'black',
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    {isKnightHere ? 'K' : ''}
                </div>
            );
        })}
    </div>
);

export default ChessBoard;
