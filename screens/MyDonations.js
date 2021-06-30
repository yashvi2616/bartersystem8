import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { ListItem } from "react-native-elements";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import MyHeader from '../components/MyHeader'

export default class MyDonations extends React.Component {
  constructor() {
    super();
    this.state = {
     
    };
   
  }


  render() {
    return (
      <View>
      <MyHeader title="My Donations" navigation={this.props.navigation} />
        <Text> No Donations Found </Text>
      
       
      </View>
    );
  }
}
