import React , {Fragment} from 'react';

const Counter = (props) => {
    return (
        <Fragment>
          <span style={{ display: "inline-block", width: "auto", padding: "1%" }}>
            Max: {props.max}
          </span>
          <span style={{ display: "inline-block", width: "auto", padding: "1%" }}>
            Min: {props.min}
          </span>
          <span style={{ display: "inline-block", width: "auto", padding: "1%" }}>
            Total: {props.total}
          </span>
          

        </Fragment>
    )

}
export default Counter;