import React, { Component } from "react";
import { connect } from 'react-redux'; 
import { counterIncrease, counterDecrease } from './actions';



class Counter extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.props.decrease}>-</button>
                <button onClick={this.props.increase}>+</button>
            </div>
        );
    }
}

// lav redux-state om til props
const mapStateToProps = state => {
return { count: state.count };
}
// Lav event handlers om til props
const mapDispatchToProps = dispatch => {
    return { 
        decrease: () => dispatch(counterDecrease()),
        increase: () => dispatch(counterIncrease())
    }
}

// react-redux connection, connect returns a function mapState... 
// which takes the component as argument
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
