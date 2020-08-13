import React from 'react';
import { TextInput, Button, ScrollView,View ,Text} from 'react-native';
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
            const number = data[item].number
            const status = data[item].state
            const created = new Date(data[item].created_at)
            var cdate = created.getDate();
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            var cmonth = month[created.getMonth()];
            var hours = created.getHours();
            var minutes = created.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            const date = new Date()
            const dateDiff = Math.floor((date.getTime() - created.getTime()) /(1000 * 3600 * 24))
            console.log(dateDiff)
            const dateText = dateDiff === 0? "Created Today" : dateDiff < 7? `Created ${dateDiff} days ago`: dateDiff >= 7 && dateDiff <= 14? `a week ago` : `${cdate} ${cmonth}, ${strTime}`
            return(
                <Card>
                    <CardContent text={"Title: " + title} />
                    <CardContent text={"Pull Number: " + number} />
                    <CardContent text={"Pull Status: " + status} />
                    <CardContent text={"Created: " + dateText} />
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