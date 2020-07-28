import React, { useEffect } from "react";
import Button from '@material-ui/core/Button';
import { Card, CardActions, CardHeader } from "@material-ui/core";
import { GameStore } from "../stores/game-store/GameStore";
import { useSelector } from "react-redux";
import GridCmp from "../components/GridCmp";
import IGameState from "../stores/game-store/IGameState";

GameStore.subscribe(() => GameStore.getState().number);

const MainPage = () => {
  const state: IGameState = useSelector((state: IGameState) => state);


  useEffect(() => {
    const interval = setInterval(() =>  {
      if (state.status) {
        GameStore.dispatch({ type: "CHECK_CELLS" });
      }
    }, 500);

    return () => clearInterval(interval);
  }, [state.status]);

  return (
    <>
        <Card style={{ margin: 15 }} elevation={3}>
          <CardHeader title="Controls"/>
          <CardActions>
            <Button variant="contained" color="primary"
                    onClick={() => GameStore.dispatch({type: "CHECK_CELLS"})}>
              Next generation
            </Button>
            <Button variant="contained" color="primary"
                    onClick={() => GameStore.dispatch({type: "RESET_GRID"})}>
              Reset
            </Button>
            <Button variant="contained" color="primary"
                    onClick={() => GameStore.dispatch({type: "START_STOP"})}>
              {!state.status ? 'Start' : 'Stop'}
            </Button>
          </CardActions>
        </Card>

        <GridCmp/>
    </>
  );
};

export default MainPage;
