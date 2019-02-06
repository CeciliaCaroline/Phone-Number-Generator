import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";

const ClearButton = props => {
  return (
    <Fragment>
      {props.randomPhoneNumbers.length > 0 ? (
        <Button
          randomPhoneNumbers={props.randomPhoneNumbers}
          onClick={props.onClick}
        >
          Clear
        </Button>
      ) : (
        ""
      )}
    </Fragment>
  );
};
export default ClearButton;
