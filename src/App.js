import React, { useState } from "react";
import "./App.css";
import PictureList from "./Components/Main";
// import { Nav, NavLink } from "reactstrap";
import styled from "styled-components";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   DatePicker,
//   TimePicker,
//   DateTimePicker,
//   MuiPickersUtilsProvider
// } from "@material-ui/pickers";

const Bg = styled.div`
  background-image: url("Img/White-Line.jpg");
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0, auto;
  // border: 2px solid red;
`;

const NavLink = styled.a`
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 100%;
  height: 5rem;
  padding-top: 2.5rem;
  font-size: 1.1rem;

  &:hover {
    color: red;
  }
`;

const Pic = styled.div`
  display: flex;
  margin: 20rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  padding: 5rem;
  // border: 2px solid red;
`;

const Card = styled.div``;

const Intro = styled.div`
  margin-top: 2.5rem;
  color: grey;
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px dotted red;
  margin: 2.5rem, 0;
  padding: 2rem;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border: 1px solid red;
`;
const Para = styled.p`
  display: flex;
  width: 100%;
  height: auto;
  margin: 0, auto;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;
const Space = styled.div`
  display: flex;
  width: 50%;
  margin-top: 2%;
`;

// const Background = styled.div`
//   padding-top: 2%;
//   margin: 0, auto;
//   padding-bottom: 2%;
//   background: url("../img/White-line.png");
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

function App() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div className="App">
      <div className="background">
        <Nav>
          <NavLink href="#"> Home </NavLink>

          <NavLink href="#"> About </NavLink>

          <NavLink href="#"> Contact </NavLink>
        </Nav>

        <Intro>
          <h1>Welcome to NASA's picture of the day!</h1>
        </Intro>
        <section>
          <Card>
            <Pic>
              <PictureList />
            </Pic>
          </Card>
          <Container className="container">
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker value={selectedDate} onChange={handleDateChange} />
              <TimePicker value={selectedDate} onChange={handleDateChange} />
              <DateTimePicker
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider> */}
            <Space>
              <Para>These are beautiful pictures.</Para>
            </Space>

            <Space>
              <Para>these are also good pictures</Para>
            </Space>
          </Container>
        </section>
        <Footer>
          <p>This is a product of a student of Lambda School.</p>
        </Footer>
      </div>
    </div>
  );
}

export default App;
