
import { useState, useEffect } from 'react';
import BoardSettings from './components/BoardSettings';
import ChessBoard from './components/ChessBoard';
import { warnsdorffsTour } from './algorithms/knightsTour';

const Home = () => {
  const [boardSize, setBoardSize] = useState(8);
  const [path, setPath] = useState<[number, number][]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleUpdateSize = (size: number) => {
    setBoardSize(size);
    const tourResult = warnsdorffsTour(size);
    const newPath = extractPathFromTour(tourResult);
    setPath(newPath);
    setCurrentStep(0);  // Reset current step on size change
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < path.length - 1) {
          return prevStep + 1;
        } else {
          clearInterval(timer);
          return prevStep;
        }
      });
    }, 10); // Update step every second

    return () => clearInterval(timer); // Clear the timer when component unmounts or path changes
  }, [path]);

  const extractPathFromTour = (tourResult: number[][]): [number, number][] => {
    let path: [number, number][] = [];
    for (let i = 0; i < tourResult.length; i++) {
      for (let j = 0; j < tourResult[i].length; j++) {
        if (tourResult[i][j] !== -1) {
          path[tourResult[i][j]] = [i, j];
        }
      }
    }
    return path;
  };

  return (
    <div>
      <BoardSettings onUpdateSize={handleUpdateSize} />
      <ChessBoard size={boardSize} path={path} currentStep={currentStep} />
    </div>
  );
};

export default Home;
