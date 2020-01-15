import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class FooterTabsIconExample extends Component {
constructor(props) {
    super(props);
        this.state = {
        };
    }
  render() {
    const {navigate} = this.props
    return (
        <Footer>
          <FooterTab>
            <Button  onPress={() => navigate('Profile')}>
              <Icon name="user" size={15} color='#fff'/>
            </Button>
						<Button onPress={() => navigate('Home')}>
              <Icon name="home" size={15} color="#fff"/>
            </Button>
            <Button onPress={() => navigate('ListItems')}>
              <Icon name="th-list" size={15} color="#fff"/>
            </Button>
          </FooterTab>
        </Footer>
      
    );
  }
}