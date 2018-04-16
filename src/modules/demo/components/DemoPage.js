import React from 'react'

class DemoPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			task : ''
		};
		
	}
	onChange = (event)=>{
		var target = event.target;
		var task = target.name;
		var value = target.value;
		this.setState({
			[task] : value
		});
	}
	
	onSubmit = (event)=>{
		event.preventDefault();
		console.log(this.state);
		this.props.onSubmit(this.state);
		
		
	}

	

	

	
	


	
	render(){
		
		return <div>
			
			
			<form  onSubmit= {this.onSubmit}>
				<legend></legend>
				
				<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
				
				
				
				<div className="form-group">
				<input type="text" className="form-control"  name="task" value={this.state.task} onChange={this.onChange} />
				</div>
		
			
				<button type="submit" className="btn btn-primary" >ADD</button>
				</div>
				
				
				
			</form>
			
			

			
			
		</div>
	}
}

export default (DemoPage)