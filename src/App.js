import React from 'react'
import {Layout} from './modules/common'
import {DemoPage} from './modules/demo'

export default class App extends React.Component {
    constructor(props){
		super(props);
		this.state = {
                task : []
		};
		
	}
    onSubmit = (data) => {
        
        
        var {task} = this.state;
        console.log(task);
        task.push(data);
        this.setState({
            task:task
        });
        localStorage.setItem('task', JSON.stringify(task));
        
        
    }
    show(task){
        var {task} = this.state;
        var eletask = task.map((task, index)=>{
            return <h1>{eletask}</h1>
        });
    }
    
    render() { 
        
        return <Layout onSubmit= {this.show}>
 			<DemoPage  onSubmit= {this.onSubmit} />
        </Layout>
    }
}