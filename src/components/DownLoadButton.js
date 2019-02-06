import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";

const DownloadButton = props => {
  return (
    <Fragment>
      {props.randomPhoneNumbers.length > 0 ? (
        <Button
          randomPhoneNumbers={props.randomPhoneNumbers}
          onClick={props.onClick}
        >
          Download
        </Button>
      ) : (
        ""
      )}
    </Fragment>
  );
};
export default DownloadButton;
