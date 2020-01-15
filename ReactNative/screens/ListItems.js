import React, { Component } from 'react';
import { View } from 'react-native';
import FooterTabsIconExample from '../src/modules/common/footer';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Spinner } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
        datas: []
    };
    this.getData = this.getData.bind(this)
  }

  static navigationOptions = {
    title: 'List Frends',
  };
  async getData() {
    try {
      let response = await fetch(
        'https://5d761b657804ec0014d78cfa.mockapi.io/data',{
            method:'GET'
        }
      );
      let responseJson = await response.json();
      if (responseJson) {
        this.setState({
            datas: responseJson
        })
      }
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
      this.getData()
  }
  render() {
    const {navigate} = this.props.navigation;
    const {datas} = this.state
    console.log("DEBUG-CODE: ListItems -> render -> datas", datas)
    return (
        <Container>
        <Content/>
        <ScrollView>
            {
                datas && datas.length <= 0 ? <Spinner  color='green' /> : null
            }
            {
                datas && datas.map((item, index) => {
                    return <List>
                                <ListItem avatar onPress={() => navigate('Details', item)}>
                                <Left>
                                    <Thumbnail source={{ uri: `${item.avatar}` }} />
                                </Left>
                                <Body>
                                    <Text>{item.name}</Text>
                                    <Text note>Age: {item.age}</Text>
                                </Body>
                                <Right>
                                    <Text note>1:43 pm</Text>
                                </Right>
                                </ListItem>
                        </List>
                })
            }
         </ScrollView>
        
        <FooterTabsIconExample navigate={navigate}/>
    </Container>
    );
  }
}
