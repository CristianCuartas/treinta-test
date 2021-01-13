  import React, { useState } from 'react'
  import { Link, useHistory } from 'react-router-dom';
  import {
      Button,
      Card,
      CardBody,
      CardGroup,
      Col,
      Form,
      Input,
      InputGroup,
      InputGroupAddon,
      InputGroupText,
      Row,
      Alert,
    } from "reactstrap";
  import {useAuth} from "./../../contexts/AuthContext"; 

  const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const [isLoading, setIsLoading] = useState(false);

      const { login } = useAuth();
      const history = useHistory()

      const handleSubmit = async (e) => {

          e.preventDefault();

          try {
              setError('')
              setIsLoading(true);
              await login(email, password)
              history.push('/')
          } catch (error) {
              setError('Failed to log in')
          }

          setIsLoading(false)
      }

      return (
          <>
      <div className="app flex-row align-items-center">
        <div style={{marginTop:"10px"}}>
          <div className="container-fluid">
            <Row className="d-flex justify-content-center">
              <Col md="6">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <Form onSubmit={handleSubmit}>
                        <div className="w-100 text-center mt-2">
                            <h1>Log In</h1> 
                        </div>                                       
                        <br/>  
                        {
                            error && <Alert  color="danger">
                            <b>{error}</b>                  
                          </Alert> 
                        }
                        <br/>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              @
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            required
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                            autoComplete="email"
                            onChange={e => {
                              setEmail(e.target.value)
                            }}
                          />
                        </InputGroup>
                        <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                           @
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Password"
                          onChange={e => {
                              setPassword(e.target.value)
                          }}
                        />
                      </InputGroup>                                                                  
                        <Row>
                          <Col xs="12">
                          <Button
                          type='submit'
                          disabled={isLoading}
                          className="btn btn-block"
                          color="primary"
                          >
                        Log In<i className="fa fa-arrow-circle-right" />
                          </Button>
                          <div className="w-100 text-center mt-3">
                            <Link to="/forgot-password">Forgot password?</Link>
                          </div>
                          <br/>
                          
                          <div className="w-100 text-center mt-2">
                              Need an account? <Link to="/signup">Sign Up</Link>
                          </div>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </div>
        </div>
        </div>
        </>
      )
  }

  export default Login
