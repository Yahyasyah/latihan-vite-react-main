import "./myList.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import MyDatatable from "../../components/myDatatable/MyDatatable";
import React from "react";

const MyList = () => {
  return (
    <div className="myList">
      <Sidebar />
      <div className="myListContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="product"/>
          <Widget type="category"/>
        </div>
        <div className="table">
          <MyDatatable title="All Data" />
        </div>
      </div>
    </div>
  )
}

export default MyList;