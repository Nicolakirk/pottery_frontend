import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { fetchLoginByName } from '../utils/api';

function Login() {
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage]= useState('');
  const [isLoggedIn, setIsLoggedIn] = useState (false)

  const handleSubmit = (event) => {
    event.preventDefault();
    
setErrMessage("")
  fetchLoginByName(adminName)
  .then((result)=>{
    console.log(result)
  if( result.adminname === adminName ){
    setIsLoggedIn(true)
        setPassword("")
        setAdminName("")
        console.log(isLoggedIn)
 
  }
  else {
    setErrMessage('Admin/password not found')
    setIsLoggedIn(false)
   }
  })
  };

  return (
    
    <Container>
       {isLoggedIn === false?
       <>
       <h5>{errMessage}</h5>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Admin Name</Form.Label>
          <Form.Control
            type="adminName"
            placeholder="Enter Admin Name"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      
      </Form>
      </>
      : 
      <p> you are logged in </p>
  }
    </Container>
   
  );
}

export default Login;
