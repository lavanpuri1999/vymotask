import React from 'react';
import { TextInput, Button } from 'react-native';
import axios from "axios"
class Open extends React.Component{
    constructor(){
        super()
        this.state ={
            data:[]
        }
    }

    componentDidMount(){
        // console.log(this.props)
        this.setState({data: this.props.route.params.openData})
    }

    render(){
        return(
            <div  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TextInput onChange={this.handleChange} placeholder="ORG NAME" name="org_name" value={this.state.org_name} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} /><br/>
                <TextInput onChange={this.handleChange} placeholder="REPO NAME" name="repo_name" value={this.state.repo} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} /><br/>
                <Button 
                    onPress={this.handlePress}
                    title = "Open"
                    color = "red"
                />
            </div>
        )
    }
}

export default Open