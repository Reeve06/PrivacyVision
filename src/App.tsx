import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import './theme/variables.css';

// Social Pages
import LoginSpotify from './pages/social/LoginSpotify';
import PlaylistsPage from './pages/social/PlaylistsSpotify';

// Information Pages
import PrivacyPage from './pages/information/PrivacyPage';
import ReputationManagementPage from './pages/information/ReputationManagementPage';
import CounteractCrowdingPage from './pages/information/CounteractCrowdingPage';
import StrongPasswordsPage from './pages/information/StrongPasswordsPage';
import TwoFactorAuthPage from './pages/information/TwoFactorAuthPage';
import DeviceUpdatesPage from './pages/information/DeviceUpdatesPage';
import EducationPage from './pages/information/EducationPage';
import SuspiciousLinksPage from './pages/information/SuspiciousLinksPage';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            {/* Redirect to default route */}
            <Route path="/" exact={true}>
              <Redirect to="/privacy" />
            </Route>

            {/* Social Pages */}
            <Route path="/social/spotify/login" exact={true}>
              <LoginSpotify />
            </Route>
            <Route path="/social/spotify/playlists" exact={true}>
              <PlaylistsPage accessToken={'PlaylistsPage'} />
            </Route>

            {/* Information Pages */}
            <Route path="/privacy" exact={true}>
              <PrivacyPage />
            </Route>
            <Route path="/reputation-management" exact={true}>
              <ReputationManagementPage />
            </Route>
            <Route path="/crowding-fatigue" exact={true}>
              <CounteractCrowdingPage />
            </Route>
            <Route path="/strong-passwords" exact={true}>
              <StrongPasswordsPage />
            </Route>
            <Route path="/two-factor-authentication" exact={true}>
              <TwoFactorAuthPage />
            </Route>
            <Route path="/suspicious-links" exact={true}>
              <SuspiciousLinksPage />
            </Route>
            <Route path="/device-updates" exact={true}>
              <DeviceUpdatesPage />
            </Route>
            <Route path="/education" exact={true}>
              <EducationPage />
            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
