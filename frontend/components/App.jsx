import React from 'react';
import NavBar from './nav_bar_container';
import Modal from './auth/modal_container';
import SplashPage from './splash_page';

const App = () => (
    <div>
        <Modal />
        <NavBar />
        <SplashPage />
    </div>
);

export default App;