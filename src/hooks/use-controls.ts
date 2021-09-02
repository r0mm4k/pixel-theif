import { useEffect } from 'react';

interface IUseControlsProps {
  handleArrowUp: () => void;
  handleArrowDown: () => void;
  handleArrowLeft: () => void;
  handleArrowRight: () => void;
}

const useControls = ({
  handleArrowDown,
  handleArrowLeft,
  handleArrowRight,
  handleArrowUp,
}: IUseControlsProps) => {
  useEffect(() => {
    const handleKeyDown = ({ code }: KeyboardEvent) => {
      switch (code) {
        case 'ArrowDown': {
          handleArrowDown();
          break;
        }
        case 'ArrowUp': {
          handleArrowUp();
          break;
        }
        case 'ArrowLeft': {
          handleArrowLeft();
          break;
        }
        case 'ArrowRight': {
          handleArrowRight();
          break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleArrowDown, handleArrowLeft, handleArrowRight, handleArrowUp]);
};

export { useControls };
