import React  from "react";
import Button from '@material-ui/core/Button';
import { Card, CardActions, CardContent, CardHeader } from "@material-ui/core";
import { GameStore, IGameState } from "../stores/GameStore";
import { useSelector } from "react-redux";
import GridCmp from "../components/GridCmp";

GameStore.subscribe(() => GameStore.getState().number);

const MainPage = () => {
  const state: IGameState = useSelector((state: IGameState) => state);

  return (
    <>
        <Card style={{ margin: 15 }} elevation={3}>
          <CardHeader title="Controls"/>
          <CardContent>
            {state.number}
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary"
                    onClick={() => GameStore.dispatch({type: "DECREMENT_NUMBER", payload: 1})}>
              -
            </Button>
            <Button variant="contained" color="primary"
                    onClick={() => GameStore.dispatch({type: "INCREMENT_NUMBER", payload: 1})}>
              +
            </Button>
          </CardActions>
        </Card>

        <GridCmp/>
    </>
  );
};

export default MainPage;
