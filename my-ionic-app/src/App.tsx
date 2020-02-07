import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonModal,
  IonCardContent,
  IonButton
} from '@ionic/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  showModal: boolean
}

class App extends Component <AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false
    }
    this.handleShowModal = this.handleShowModal.bind(this)
  }
  handleShowModal () {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  
  render() {
    return (
      <IonApp>
        <Router>
          <Switch>
            <Route path="/" component = {Home} />
          </Switch>
        </Router>
      </IonApp>
    );
  }
}

export default App;