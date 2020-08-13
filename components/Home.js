import React from 'react';
import { TextInput, Button } from 'react-native';

class Home extends React.Component{
    constructor(){
        super()
        this.state ={
            org_name:"",
            repo_name:"",
        }
    }

    handleChange = (e)=>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handlePress = ()=>{
        if(this.state.org_name ==="" || this.state.repo_name ===""){
            alert("Text cant be empty")
            return
        }
        console.log(this.state.org_name,this.state.repo_name)

    }

    render(){
        return(
            <div  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TextInput onChange={this.handleChange} placeholder="ORG NAME" name="org_name" value={this.state.org_name} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} /><br/>
                <TextInput onChange={this.handleChange} placeholder="REPO NAME" name="repo_name" value={this.state.repo} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} /><br/>
                <Button 
                    onPress={this.handlePress}
                    title = "Submit"
                    color = "red"
                />
            </div>
        )
    }
}

export default Home