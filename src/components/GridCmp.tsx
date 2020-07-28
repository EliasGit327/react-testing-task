import React, { useState } from 'react';
import { Card, CardContent } from "@material-ui/core";

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

  return (
    <Card elevation={3} style={{ margin: 15 }}>
      <CardContent>
        {drawGrid(array)}
      </CardContent>
    </Card>
  );
};

const drawGrid = (array: boolean[][]) => {
  const size = 15;

  return <div>
    {array.map((row, rowIndex) =>
      <div key={`${rowIndex}-col`} style={{ display: "flex", flexDirection: "row" }}>
        {row.map((element, index) =>
          <div key={`${index}-el`}
               style={{ height: size, width: size, backgroundColor: element ? 'red' : 'gray', margin: 1 }}/>
        )}
      </div>)
    }

    {/*  <div style={{display: "flex", flexDirection: "row"}}>*/}
    {/*    <div style={{ height: size, width: size, backgroundColor: 'gray', margin: 1 }}/>*/}
    {/*    <div style={{ height: size, width: size, backgroundColor: 'gray', margin: 1 }}/>*/}
    {/*    <div style={{ height: size, width: size, backgroundColor: 'gray', margin: 1 }}/>*/}
    {/*  </div>*/}
    {/*  <div style={{display: "flex", flexDirection: "row"}}>*/}
    {/*    <div style={{ height: size, width: size, backgroundColor: 'gray', margin: 1 }}/>*/}
    {/*    <div style={{ height: size, width: size, backgroundColor: 'gray', margin: 1 }}/>*/}
    {/*    <div style={{ height: size, width: size, backgroundColor: 'gray', margin: 1 }}/>*/}
    {/*  </div>*/}
    {/*  <div style={{display: "flex", flexDirection: "row"}}>*/}
    {/*    <div style={{ height: size, width: size, backgroundColor: 'gray', margin: 1 }}/>*/}
    {/*    <div style={{ height: size, width: size, backgroundColor: 'gray', margin: 1 }}/>*/}
    {/*    <div style={{ height: size, width: size, backgroundColor: 'gray', margin: 1 }}/>*/}
    {/*  </div>*/}
  </div>
  //
  // return <div style={{display: "flex", flexDirection: "row" }}>
  //   {
  //     newArray.map((row, rowIndex) =>
  //       row.map((e, elementIndex) => <div key={elementIndex} style={{ height: size, width: size, backgroundColor: 'gray', margin: 1 }}/>)
  //     )
  //   }
  // </div>
}

// <div key={i} style={{height: size, width: size, backgroundColor: 'gray', margin: 1}}/>)


export default GridCmp;
