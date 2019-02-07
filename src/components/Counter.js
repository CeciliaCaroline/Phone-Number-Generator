import React , {Fragment} from 'react';

const Counter = (props) => {
    return (
        <Fragment>
          <p style={{ display: "inline-block", width: "auto", padding: "1%" }}>
            <b>Max: </b> {`0${props.max}`}
          </p>
          <p style={{ display: "inline-block", width: "auto", padding: "1%" }}>
            <b>Min: </b> {`0${props.min}`}
          </p>
          <p style={{ display: "inline-block", width: "auto", padding: "1%" }}>
            <b>Total: </b> {props.total}
          </p>
          

        </Fragment>
    )

}
export default Counter;