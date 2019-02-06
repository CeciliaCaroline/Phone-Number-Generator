import React , {Fragment} from 'react';

const Counter = (props) => {
    return (
        <Fragment>
          <p style={{ display: "inline-block", width: "auto", padding: "1%" }}>
            <b>Max: </b> {props.max}
          </p>
          <p style={{ display: "inline-block", width: "auto", padding: "1%" }}>
            <b>Min: </b> {props.min}
          </p>
          <p style={{ display: "inline-block", width: "auto", padding: "1%" }}>
            <b>Total: </b> {props.total}
          </p>
          

        </Fragment>
    )

}
export default Counter;