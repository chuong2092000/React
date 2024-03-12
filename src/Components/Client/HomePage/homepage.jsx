import React, { Component } from "react";
import NavigationComponent from "./Navigation/NavigationComponent";
import TopbarComponent from "../Topbar/TopbarComponent";
import CarouselComponent from "../Carousel/CarouselComponent";
import FindNav from "./FindNav/FindNav";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <TopbarComponent/> 
        <div className="container-fluid position-relative p-0">
            <NavigationComponent/>
            <CarouselComponent/>
            <FindNav/>
        </div>
      </div>
    );
  }
}
