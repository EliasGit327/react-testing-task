import React from "react";
import Button from '@material-ui/core/Button';
import { Card, CardContent, CardHeader } from "@material-ui/core";

const MainPage = () => {
  return (
    <>
        <Card style={{ margin: 15 }} elevation={1}>
          <CardHeader title="Controls"></CardHeader>
          <CardContent>
            <Button variant="contained" color="primary">
              Hello World
            </Button>
          </CardContent>
        </Card>
    </>
  );
};

export default MainPage;
