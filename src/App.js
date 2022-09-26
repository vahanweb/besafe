import React from "react";
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AnalyticaContent from './components/AnalyticaContent/AnalyticaContent';
import Header from './components/header/header';
import QuestionsAnsw from './components/QuestionsAnsw/QuestionsAnsw';
import Service from './components/Service/Service';
import { BrowserRouter } from "react-router-dom";
import TeamMembers from './components/TeamMembers/TeamMembers';
import GetFreeConsultation from './components/GetFreeConsultation/GetFreeConsultation';
import News from './components/News/News';
import Recruitment from './components/Recruitment/Recruitment';
import Client from './components/Client/Client';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <AnalyticaContent />
      <AboutUs />
      <Service />
      <BrowserRouter>
        <QuestionsAnsw />
      </BrowserRouter>
      <TeamMembers />
      <GetFreeConsultation />
      <News />
      <Recruitment />
      <Client />
      <Footer />
    </div>
  );
}

export default App;
