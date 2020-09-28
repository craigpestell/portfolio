import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import Strengths from './strengths';
import About from './about';
import Gallery from './gallery';
import Contact from './contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        <Strengths data={this.state.resumeData.Strengths}/>
        <About  data={this.state.resumeData.About}/>
        <Gallery />
        <Contact  data={this.state.resumeData.Contact}/>
      </div>
    )
  }
}

export default App
