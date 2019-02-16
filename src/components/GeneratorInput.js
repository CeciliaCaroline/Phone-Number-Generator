import React , {Fragment} from 'react';
import TextField from "@material-ui/core/TextField";
const GeneratorInput = (props) => {
    return (
        <Fragment>
        
          <TextField
            type="number"
            value={props.input}
            onChange={props.onChange}
            fullWidth={true}
            placeholder="Enter number between 1 and 10000"
            name="generateNumber"
          />
      
          
        </Fragment>
    )

}
export default GeneratorInput;