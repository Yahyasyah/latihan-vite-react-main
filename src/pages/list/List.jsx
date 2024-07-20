import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Widget from "../../components/widget/Widget";

const List = ({columns}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="product"/>
          <Widget type="category"/>
        </div>
        <Datatable columns={columns} />
      </div>
    </div>
  );
};

export default List;