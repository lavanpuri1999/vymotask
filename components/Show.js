import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Open from "./Open"
import Closed from "./Closed"
class Show extends React.Component{
    constructor(){
        super()
        this.state ={
        }
    }
    componentDidMount = ()=>{
        // console.log(this.props)
    }

    render(){
        const Tab = createMaterialTopTabNavigator();
        return(
            <Tab.Navigator>
                <Tab.Screen initialParams={this.props.route.params.openData} name="Open" component={Open} />
                <Tab.Screen initialParams={this.props.route.params.closedData} name="Closed" component={Closed} />
            </Tab.Navigator>
        )
    }
}

export default Show