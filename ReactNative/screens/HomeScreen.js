import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FooterTabsIconExample from '../src/modules/common/footer';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
        <Container>
            <Grid>
                <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
            </Grid>
            <Content/>
            <FooterTabsIconExample navigate={navigate}/>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    
});