import React from 'react';
import { TextInput, Button, ScrollView } from 'react-native';
import axios from "axios"
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

class Open extends React.Component{
    constructor(){
        super()
        this.state ={
            data:[]
        }
    }

    componentDidMount(){
        // this.setState({data: this.props.route.params.openData})
        const data = this.props.route.params
        console.log(data)
        const comp = Object.keys(data).map(item =>{
            const title = data[item].title
            const titleText = `Title: ${title}`
            const number = data[item].number
            const numberText = `PR Number: ${number}`
            const status = data[item].state
            const statusText = `Pull Status: ${status}`
            const created = data[item].created_at
            const createdText = `Created: ${created}`
            return(
                <Card>
                    <CardContent text={"Title: " + title} />
                    <CardContent text={"Pull Number: " + number} />
                    <CardContent text={"Pull Status: " + status} />
                    <CardContent text={"Created: " + created} />
                </Card>
            )
        })
        this.setState({comp})
    }   

    render(){
        return(
            <ScrollView>
                {
                    this.state.comp?this.state.comp:[]  
                }
            </ScrollView>
        )
    }
}

export default Open