import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
    Alert,
  } from "reactstrap";
import {useAuth} from "./../../contexts/AuthContext"; 

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { resetPassword } = useAuth();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            setError('')
            setIsLoading(true);
            await resetPassword(email)
            setMessage('Check your inbox for further instructions. ')
        } catch (error) {
            setError('Failed to reset password')
        }

        setIsLoading(false)
    }

    return (
        <>
    <div className="app flex-row align-items-center">
      <div style={{marginTop:"10px"}}>
        <div className="container-fluid">
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={handleSubmit}>
                      <div className="row">
                        <div
                          className="col-md-12"
                          style={{ marginTop: "-42px" }}
                        >
                          <div className="text-center">
                          </div>
                        </div>
                      </div>
                      <h1 className="text-center">Password Reset</h1> 
                      <br/>  
                      
                      {
                          error && <Alert  color="danger">
                          <b>{error}</b>                  
                        </Alert> 
                      }
                         {
                          message && <Alert  color="success">
                          <b>{message}</b>                  
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
                      <Row>
                        <Col xs="12">
                        <Button
                        type='submit'
                        disabled={isLoading}
                        className="btn btn-block"
                        color="primary"
                        >
                       Reset Password
                       <i className="fa fa-arrow-circle-right" />
                        </Button>
                        <div className="w-100 text-center mt-3">
                           <Link to="/login">Log In</Link>
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

export default ForgotPassword
