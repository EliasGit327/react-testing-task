import React, { useState } from 'react';
import { Card, CardContent } from "@material-ui/core";
import IGameState from "../stores/game-store/IGameState";
import { useSelector } from "react-redux";
import { GameStore } from "../stores/game-store/GameStore";

interface IGridProps {
  array?: [][];
  name?: string;
}

const GridCmp = (props: IGridProps) => {
  const [array, setArray] = useState([
    [true, false, false, true, false, false],
    [false, false, false, false, false, false],
    [false, true, true, false, false, false],
  ]);
  const state: IGameState = useSelector((state: IGameState) => state);

  return (
    <Card elevation={3} style={{ margin: 15 }}>
      <CardContent>
        {drawGrid(state.grid, (x, y) => {
          GameStore.dispatch( { type: "SELECT_CELL", payload: { x, y } });
        })}
      </CardContent>
    </Card>
  );
};

const drawGrid = (array: boolean[][], onClick?: (x: number, y: number) => void) => {
  return <div>
    {
      array.map(
        (row, rowIndex) =>
      <div key={`${rowIndex}-col`} style={{ display: "flex", flexDirection: "row" }}>
        {row.map((element, index) =>
          <div key={`${index}-el`}
               style={{...styles.cell, backgroundColor: element ? 'red' : 'transparent'}}
               onClick={() => onClick ? onClick(rowIndex, index) : null}/>
        )}
      </div>
      )
    }
  </div>
}

const styles = {
  cell: {
    height: 12,
    width: 12,
    margin: 0,
    border: 'solid 1px'
  }
};


export default GridCmp;
