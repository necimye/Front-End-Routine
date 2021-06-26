import React, { useEffect } from "react";
import { Router, Link } from "@reach/router";
import { Layout, Menu, Button } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  PlusOutlined,
  GithubFilled,
  AppstoreAddOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import LabPage from "./pages/LabPage/LabPage";
import AddPage from "./pages/AddPage/AddPage";
import LecturePage from "./pages/LecturePage/LecturePage";
import AllThings from "./pages/AllThings/AllThings";
import ImpoExpo from "./pages/ImpoExpo/ImpoExpo";
// import AddClass from './pages/AddClass/AddClass';
import Class from "./pages/AddClass/AddClass";
import AppHeader from "./components/Common/Header";
import AppFooter from "./components/Common/Footer";
import AppHome from "./components/Home/Home";
import AddClassForm from "./components/AddClassForm/AddClassForm";
import Routine from "./pages/Routine/Routine";
import AddTeacher from "./components/AddTeacher/AddTeacher";
import AddProgram from "./components/AddProgram/AddProgram";
import EditProgram from "./components/EditProgram/EditProgram";
import EditTeacher from "./components/EditTeacher/EditTeacher";
import EditClass from "./components/EditClass/EditClass";
import Program from "./pages/Program/Program";
import Teacher from "./pages/Teacher/Teacher";
import ReactGa from "react-ga";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const { Header, Content, Footer, Sider } = Layout;

  useEffect(() => {
    ReactGa.initialize("UA-174022278-1");
    ReactGa.pageview("/");
  });

  return (
    <Layout>
      <Sider
        width="280px"
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          height: "100vh",
        }}
      >
        <h3 className="logo" style={{ textAlign: "center", color: "#fff" }}>
          Department of Electronics and Computer Engineering
          <span role="img" aria-label="daglo"></span>
        </h3>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ fontSize: "22px" }}
        >
          {/* <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">Lectures</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/labs">Labs</Link>
          </Menu.Item> */}
          {/* <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
            <Link to="/all">All Lectures/Labs</Link>
          </Menu.Item> */}
          <Menu.Item key="1" icon={<AppstoreAddOutlined />}>
            <Link to="/program">Program</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
            <Link to="/teacher">Teacher</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
            <Link to="/class">Add Class</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<AppstoreAddOutlined />}>
            <Link to="/routine">Routine</Link>
          </Menu.Item>
          {/* <Menu.Item key="8" icon={<AppstoreAddOutlined />}>
            <Link to="/addTeacher">Add Teacher</Link>
          </Menu.Item> */}
          {/* <Menu.Item key="9" icon={<AppstoreAddOutlined />}>
            <Link to="/addProgram">Add Program</Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <AppHeader /> */}
          <h6 style={{ fontSize: "24px", color: "#fff", marginLeft: "24px" }}>
            <b>Routine Management</b>
            <span role="img" aria-label="books">
              📚
            </span>
          </h6>
          <Link to="/add">
            <Button
              style={{ marginRight: "24px", marginTop: "16px" }}
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
            />
          </Link>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            height: "75vh",
            overflowY: "scroll",
            alignContent: "center",
          }}
        >
          <div className="site-layout-background" style={{ padding: 24 }}>
            <Router primary={false}>
              <AllThings path="/all" />
              <Program path="/" />
              <Class path="/class" />
              <Routine path="/routine" />
              <LabPage path="/labs" />
              <AddPage path="/edit" />
              <AddPage path="/add" />
              <ImpoExpo path="/ie" />
              <Teacher path="/teacher" />
              <Program path="/program" />
              <AddTeacher path="/addTeacher" />
              <AddProgram path="/addProgram" />
              <AddClassForm path="/addClass" />
              <EditProgram path="/editProgram/:id">
                {/* {props => (
                <div>
                  {props.match
                    ? props.match.id
                    : "No match"}
                </div>
              )} */}
              </EditProgram>
              <EditTeacher path="/editTeacher/:id"></EditTeacher>
              <EditClass path="/editClass/:id"></EditClass>
            </Router>
          </div>
        </Content>
        {/* <Footer>
          <AppFooter />
        </Footer> */}
      </Layout>
    </Layout>
  );
}

export default App;
