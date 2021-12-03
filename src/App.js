import React, { Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header";
import  {HelmetProvider } from 'react-helmet-async';

class App extends React.Component {

  render() {
    return (
      <Suspense fallback="loading">
        <HelmetProvider>
          <div className="App">
            <Header />
          </div>
        </HelmetProvider>
      </Suspense>
    );
  }
}

export default App;
