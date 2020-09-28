import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Strengths from './components/strengths';
import About from './components/about';
import Gallery from './components/gallery';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Strengths data={this.state.landingPageData.Strengths} />
        <About data={this.state.landingPageData.About} />
        <Gallery />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
