import React, { Component } from 'react';
import {
	IonApp,
	IonTabs,
	IonTabBar,
	IonTabButton,
	IonLabel,
	IonRouterOutlet,
	IonIcon
} from '@ionic/react'
import { Route } from 'react-router-dom'
import { IonPage } from '@ionic/react'
import profle from '../profile/profle';
import Details from '../details/Details';
import About from '../about/About';

class Home extends Component {
    render() {
        return (
            <IonApp>
				<IonPage>

					<IonTabs>
						<IonRouterOutlet>
							<Route path="/About" component={About} exact />
							<Route path="/profle" component={profle} exact />
							<Route path="/Details" component={Details} exact />
						</IonRouterOutlet>

						<IonTabBar slot="bottom">
							<IonTabButton tab="home" href="/About">
								<IonIcon name="home" />
								<IonLabel>Tab 1</IonLabel>
							</IonTabButton>
							<IonTabButton tab="settings" href="/profle">
								<IonIcon name="settings" />
								<IonLabel>Tab 2</IonLabel>
							</IonTabButton>
							<IonTabButton tab="about" href="/Details">
								<IonIcon name="information-circle" />
								<IonLabel>Tab 3</IonLabel>
							</IonTabButton>
						</IonTabBar>
					</IonTabs>
				</IonPage>
			</IonApp>
        );
    }
}

export default Home;