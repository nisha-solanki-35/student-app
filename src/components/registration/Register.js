import React, { Component } from 'react'
import Home from '../Home'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import { ButtonComponent, CalenderComponent, InputCommonComponent, RadioComponent } from '../InputCommonComponent'


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
          dob: new Date(),
          users : []
        };
        this.handleOnClick = this.handleOnClick.bind(this);
      }

      handleOnchange = (event) => {
        // console.log(`event.target.name ${event.target.name} event.target.value ${event.target.value}`);
        this.setState(() => {
          return { [event.target.name]: event.target.value };
        });
      };
    
      onDateChange = (date) => {
        // console.log(`date ${date}`);
        this.setState(() => {
          return { dob: date };
        });
      };
    
      handleOnClick(data) {
        this.setState(prev => { return { modal : !prev.modal} } );
        console.log("data", this.state.modal);
        let newState = this.state;
        let date = data.dob.getDate();
        let month = data.dob.getMonth() + 1;
        let year = data.dob.getFullYear();
        // console.log(date, month, year);
        newState = {
          details: {
            name: data.name,
            password : data.password,
            email: data.email,
            contact : data.contact,
            dob: `${date}/${month}/${year}`,
            gender: data.gender,
          },
        };
        this.setState(newState);
        this.state.users.push(newState.details)
        console.log("newstate", this.state.details);
        localStorage.setItem("users",JSON.stringify(this.state.users));
        localStorage.setItem("token", newState.details.email)
        console.log("email", newState.details.email);
        console.log("localstorage", localStorage.getItem("users"));
        // alert("You are now logged in!")
      }

    render(){
        return (
            <div>
                <Home></Home>
                <Container>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h2">Sign-Up</CardTitle>
                                    <CardText>
                                        <InputCommonComponent
                                            htmlFor="name"
                                            text="Name"
                                            type="text"
                                            name="name"
                                            value={this.state.name || ""}
                                            placeholder="Enter Name"
                                            onChange={this.handleOnchange}
                                            ></InputCommonComponent>
        
                                            <InputCommonComponent
                                            htmlFor="password"
                                            text="Password"
                                            type="password"
                                            name="password"
                                            value={this.state.password || ""}
                                            placeholder="Enter Password"
                                            onChange={this.handleOnchange}
                                            ></InputCommonComponent>
    
                                            <InputCommonComponent
                                            htmlFor="email"
                                            text="Email"
                                            type="email"
                                            name="email"
                                            value={this.state.email || ""}
                                            placeholder="Enter Email"
                                            onChange={this.handleOnchange}
                                            ></InputCommonComponent>
        
                                            <InputCommonComponent
                                            htmlFor="contact"
                                            text="Contact"
                                            type="digit"
                                            name="contact"
                                            value={this.state.contact || ""}
                                            maxLength={10}
                                            placeholder="Enter Contact Number"
                                            onChange={this.handleOnchange}
                                            ></InputCommonComponent>
                                        
                                        <label htmlFor="dob"><b>Date of Birth</b></label>
                                        <CalenderComponent name="dob" onDateChange={this.onDateChange} value={this.state.dob}></CalenderComponent>
                                        <RadioComponent name="gender" onGenderChange={this.handleOnchange} value={this.state.gender || ""}></RadioComponent>
                                        <br></br>
                                        <ButtonComponent data={this.state} 
                                        onClick={this.handleOnClick}
                                        username={this.state.name}
                                        email={this.state.email}
                                        password={this.state.password}
                                        contact={this.state.contact}
                                        dob={this.state.dob}
                                        gender={this.state.gender}
                                        >SUBMIT</ButtonComponent>
                                        <br></br><br></br>
                                        <b>Already have an account?</b>
                                        <NavLink to="/login"><u>LOGIN</u></NavLink>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Register
