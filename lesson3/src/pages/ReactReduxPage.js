import React, { Component } from 'react'
import { connect } from 'react-redux';


@connect()
class ReactReduxPage extends Component {
    render() {
        console.log('props',this.props);
        return (
            <div>
                <h3>ReactReduxPage</h3>
            </div>
        )
    }
}
export default connect() (ReactReduxPage);