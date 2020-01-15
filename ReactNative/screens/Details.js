import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {  Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List,ListItem } from 'native-base';
import FooterTabsIconExample from '../src/modules/common/footer';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    const { navigation } = this.props;
    return (
        <Container>
            <ScrollView>
                <Grid>
                    <Row style={{ backgroundColor: 'sky-blue'}} size={1}>
                        <Content>
                        <List>
                            <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: `${navigation.getParam('avatar')}` }} />
                            </Left>
                            <Body>
                                <Text>{navigation.getParam('name')}</Text>
                                <Text note>Age: {navigation.getParam('age')}</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                            </ListItem>
                        </List>
                        </Content>
                    </Row>
                    <Row size={3}>
                        <Content>
                            <Card>
                                <CardItem>
                                <Left>
                                    <Thumbnail source={{uri: `${navigation.getParam('avatar')}` }} />
                                    <Body>
                                    <Text>To date Im sad :`(</Text>
                                    </Body>
                                </Left>
                                </CardItem>
                                <CardItem cardBody>
                                <Image source={require('../images/images.jpeg')} style={{height: 200, width: null, flex: 1}}/>
                                </CardItem>
                                <CardItem>
                                <Left>
                                    <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>120 HaHa</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>11h ago</Text>
                                </Right>
                                </CardItem>
                            </Card>

                            <Card>
                                <CardItem>
                                <Left>
                                    <Thumbnail source={{uri: `${navigation.getParam('avatar')}` }} />
                                    <Body>
                                    <Text>Tet den roi(</Text>
                                    </Body>
                                </Left>
                                </CardItem>
                                <CardItem cardBody>
                                <Image source={require('../images/images2.jpeg')} style={{height: 200, width: null, flex: 1}}/>
                                </CardItem>
                                <CardItem>
                                <Left>
                                    <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>11h ago</Text>
                                </Right>
                                </CardItem>
                            </Card>
                         </Content>
                    </Row>
                </Grid>
               
            </ScrollView>
            <FooterTabsIconExample navigate={navigate}/>
        </Container>
    );
  }
}
