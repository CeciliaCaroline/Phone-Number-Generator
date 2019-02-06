import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";


const GeneratorButton = props => {
  return (
    <Fragment>
      <Button disabled={!props.length} onClick={props.onClick}>
        Generate
      </Button>
    </Fragment>
  );
};
export default GeneratorButton;
