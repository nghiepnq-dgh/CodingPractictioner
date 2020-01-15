import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FooterTabsIconExample from '../src/modules/common/footer';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';


export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    title: 'ProfileScreen',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <Container>
             <Content/>
            <FooterTabsIconExample navigate={navigate}/>
        </Container>
    );
  }
}
 const styles = StyleSheet.create({
     
 });