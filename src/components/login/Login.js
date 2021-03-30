import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import Home from '../Home'
import {InputCommonComponent} from '../InputCommonComponent'

function Login () {

    // console.log("in login");
    let history = useHistory();
    const [users, setusers] = useState([]);
    const [userid, setuserid] = useState("");
    const [password, setpassword] = useState("");

    const onInputChange = (e) => setuserid(e.target.value);
    const onPasswordChange = (e) => setpassword(e.target.value);

    useEffect(() => {
        let dataOfUsers = localStorage.getItem("users");
        setusers(JSON.parse(dataOfUsers));
    }, [])

    const handleOnclick = () => {
        // console.log("users after parsing", users);
        if(!users){
            alert("You need to Sign-Up first")
            history.push("/register");
        }
        for (const index in users) {
            console.log("users[index]", users[index]);
            if((users[index].email == userid) && (users[index].password === password) || (users[index].contact === userid) && (users[index].password === password))
            {
                localStorage.setItem("token",userid);
                alert("You are now logged in!");
                history.push("/quiz");
                break;
            }
            else{
               if((users[index].email !== userid) && (users[index].contact !== userid)){
                    alert("Your username is incorrect!")
                    break;
               }
               else if(users[index].password !== password){
                    alert("Your password is incorrect!")
                    break;
               }
            }
        }
    }

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
                                    <CardTitle><h2>Sign-In</h2></CardTitle>
                                    <CardText>
                                        <InputCommonComponent
                                        htmlFor="email"
                                        text="UserID"
                                        type="text"
                                        name="userid"
                                        placeholder="Enter Email or Contact Number"
                                        onChange={onInputChange}
                                        disabled={localStorage.getItem("token")}
                                        ></InputCommonComponent>
    
                                        <InputCommonComponent
                                        htmlFor="password"
                                        text="Password"
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        onChange={onPasswordChange}
                                        disabled={localStorage.getItem("token")}
                                        ></InputCommonComponent>
    
                                        <br></br>
                                        <Button onClick={handleOnclick} disabled={!userid || !password}>SUBMIT</Button>
                                        <br></br><br></br>
                                        <b>Don not have an account?</b>
                                        <NavLink to="/register">  <u>REGISTER</u></NavLink>
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

export default Login
