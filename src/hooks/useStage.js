import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';


export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);
  
    useEffect(() => {
      setRowsCleared(0);
      const sweepRows = newStage =>
        newStage.reduce((ack, row) => {
          if (row.findIndex(cell => cell[0] === 0) === -1) {
            setRowsCleared(prev => prev + 1);
            ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
            return ack;
          }
          ack.push(row);
          return ack;
        }, []);
  
      const updateStage = prevStage => {
        // First flush the stage
        const newStage = prevStage.map(row =>
          row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
        );
  
        // drawing the tetromino
        if (player) { // Check if player is defined
          player.tetromino.forEach((row, y) => {
            row.forEach((value, x) => {
              if (value !== 0) {
                newStage[y + player.pos.y][x + player.pos.x] = [
                  value,
                  `${player.collided ? 'merged' : 'clear'}`,
                ];
              }
            });
          });
          // Then check if we got some score if collided
          if (player.collided) {
            resetPlayer();
            return sweepRows(newStage);
          }
        }
        return newStage;
      };
  
      // Here are the updates
      setStage(prev => updateStage(prev));
    }, [
      player,
      player ? player.collided : null, // Add player.collided as dependency if player is defined
      player ? player.pos.x : null,    // Add player.pos.x as dependency if player is defined
      player ? player.pos.y : null,    // Add player.pos.y as dependency if player is defined
      player ? player.tetromino : null, // Add player.tetromino as dependency if player is defined
      resetPlayer,
    ]);
  
    return [stage, setStage, rowsCleared];
  };
  
