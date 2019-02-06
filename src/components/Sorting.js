import React, { Fragment } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

const styles = {
  width: "100%"
};
const Sorting = props => {
  return (
    <Fragment>
      <FormControl  style={styles}>
        <InputLabel htmlFor="sorting">Sort by:</InputLabel>
        <Select
          value={props.sorted}
          fullWidth={true}
          onChange={props.onChange}
          inputProps={{
            name: "sorting",
            id: "sorting"
          }}
        >
          <MenuItem value={"ascending"}>Ascending</MenuItem>
          <MenuItem value={"descending"}>Descending</MenuItem>
        </Select>
      </FormControl>
    </Fragment>
  );
};
export default Sorting;
