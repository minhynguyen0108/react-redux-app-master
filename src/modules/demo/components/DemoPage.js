import React from 'react'
import {connect} from 'react-redux'
import * as demoActions from '../actions'

class DemoPage extends React.Component{
	onclick(){
		return <div> 
				<h1 todo={todo}/>
			</div>
	}

	
	render(){
		const {
			count, 
			decrease, 
			increase
		} = this.props

		

		return <div>
			<h4>Count: {count}</h4>
			<input type="text" name="txttodo"/>
			<br/>
			<button onClick={this.onclick} >ToDo</button>
			<button onClick={ this.App } >ToDo</button>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	}
}

export default connect(state => ({
	count: state.demo.count
}), dispatch => ({
	decrease: () => dispatch(demoActions.decrease()),
	increase: () => dispatch(demoActions.increase())
}))(DemoPage)