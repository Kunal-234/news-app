import Navbar from "./components/Navbar";
import "./App.css";
import React, { Component } from "react";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {

state={
  progress:0
}
setProgress=(progress)=>{
this.setState({progress:progress})
}

  render() {
    // const [progress, setProgress] = useState(0);
    
   
    return (
      <BrowserRouter>
        <Navbar />
        <LoadingBar
      color="red"
      height={1.5}
      progress={this.state.progress}
      
    />;

        <Routes>
          <Route
            path="/"
            element={<News setProgress={this.setProgress} key="Top Headlines" category="india" />}
          />
          <Route
            exact
            path="/politics"
            element={<News setProgress={this.setProgress} key="politics" category="politics-india" />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={this.setProgress} key="sports" category="sports" />}
          />
          <Route
            exact
            path="/cricket"
            element={<News setProgress={this.setProgress} key="cricket" category="cricket" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={this.setProgress} key="entertainment" category="bollywood" />}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={this.setProgress} key="technology" category="technology" />}
          />
          <Route
            exact
            path="/world"
            element={<News setProgress={this.setProgress} key="world" category="world-news" />}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={this.setProgress} key="health" category="health" />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
