import React from 'react';
import { TextInput, Button,View } from 'react-native';
import axios from "axios"
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

    handlePress = async()=>{
        if(this.state.org_name ==="" || this.state.repo_name ===""){
            alert("Text cant be empty")
            return
        }
        const openLink = `https://api.github.com/repos/${this.state.org_name}/${this.state.repo_name}/issues?state=open`
        const closedLink = `https://api.github.com/repos/${this.state.org_name}/${this.state.repo_name}/issues?state=closed`
        var openData = []
        var closedData = []

        await axios.get(openLink)
        .then(response => {
            openData = response.data
        })
        .catch(error => {
            alert("Error fetching open data")
            console.log(error)
            return
        })

        await axios.get(closedLink)
        .then(response =>{
            closedData = response.data
        })
        .catch(error => {
            alert("Error fetching closed data")
            console.log(error)
            return
        })
        console.log(openData)
        console.log(closedData)
        this.props.navigation.navigate('Show', {
            openData: openData,
            closedData: closedData,
        });

    }

    render(){
        return(
            <View  style={{ flex: 1 , flexDirection : 'column' , alignItems : 'center' , marginTop : 100}}>
                 <View style={{width : '90%'}}>
                    <TextInput onChange={this.handleChange} placeholder="ORG NAME" name="org_name" value={this.state.org_name} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} /><br/>
                    </View>
                    <View style={{width : '90%'}}>
                <TextInput onChange={this.handleChange} placeholder="REPO NAME" name="repo_name" value={this.state.repo} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} /><br/>
                </View>
                <View style={{width : '90%'}}>
                <Button 
                    onPress={this.handlePress}
                    title = "Submit"
                    color = "red"
                />
                </View>
            </View>
        )
    }
}

export default Home