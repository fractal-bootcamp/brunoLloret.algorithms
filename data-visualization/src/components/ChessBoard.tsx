import React from 'react';

interface Props {
    size: number;
    path: [number, number][];
    currentStep: number;  // Controls visible steps
}

const squareSize = 50; // Define the size of each square for easier reference

const ChessBoard = ({ size, path, currentStep }: Props) => {
    // Calculate the dimensions of the board
    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${size}, ${squareSize}px)`,
        position: 'relative', // Necessary for SVG overlay
        backgroundColor: 'black' // Entire board background
    };

    // Helper function to convert board coordinates to pixel coordinates
    const getPixelCoordinates = (x: number, y: number) => ({
        px: y * squareSize + squareSize / 2,
        py: x * squareSize + squareSize / 2
    });

    // Flipped axes helper
    const getFlippedPixelCoordinates = (x: number, y: number) => ({
        px: x * squareSize + squareSize / 2,
        py: y * squareSize + squareSize / 2
    });

    // Determine if the knight is here for normal and flipped paths
    const isKnightHereNormal = (x: number, y: number) => {
        return path.length && path[currentStep] && path[currentStep][0] === x && path[currentStep][1] === y;
    };
    const isKnightHereFlipped = (x: number, y: number) => {
        return path.length && path[currentStep] && path[currentStep][0] === y && path[currentStep][1] === x;
    };

    return (
        <div style={boardStyle}>
            {Array.from({ length: size * size }).map((_, index) => {
                const x = Math.floor(index / size);
                const y = index % size;
                const knightNormal = isKnightHereNormal(x, y) ? 'K' : '';
                const knightFlipped = isKnightHereFlipped(x, y) ? 'K' : '';
                return (
                    <div key={index} style={{
                        width: squareSize, height: squareSize, borderRadius: 0,
                        backgroundColor: 'black', // Each square is black
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        color: knightNormal ? 'blue' : (knightFlipped ? 'red' : 'black'),
                        fontSize: '20px', fontWeight: 'bold'
                    }}>
                        {knightNormal || knightFlipped}
                    </div>
                );
            })}
            <svg style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                {path.slice(0, currentStep).map((pos, index) => {
                    if (index === 0) return null;
                    const { px: startX, py: startY } = getPixelCoordinates(...path[index - 1]);
                    const { px: endX, py: endY } = getPixelCoordinates(...pos);
                    return (
                        <line key={`red-${index}`} x1={startX} y1={startY} x2={endX} y2={endY}
                            stroke="red" strokeWidth={3} strokeLinecap="round" />
                    );
                })}
                {path.slice(0, currentStep).map((pos, index) => {
                    if (index === 0) return null;
                    const { px: startX, py: startY } = getFlippedPixelCoordinates(...path[index - 1]);
                    const { px: endX, py: endY } = getFlippedPixelCoordinates(...pos);
                    return (
                        <line key={`blue-${index}`} x1={startX} y1={startY} x2={endX} y2={endY}
                            stroke="blue" strokeWidth={3} strokeLinecap="round" />
                    );
                })}
            </svg>
        </div>
    );
};

export default ChessBoard;