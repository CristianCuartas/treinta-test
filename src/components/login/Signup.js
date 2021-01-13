import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
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

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { signup } = useAuth();
    const history = useHistory()

    const handleSubmit = async (e) => {

        e.preventDefault();

        if(password !== passwordConfirm){
            return setError('Password do not match')
        }

        try {
            setError('')
            setIsLoading(true);
            await signup(email, password)
            history.push('/')
        } catch (error) {
            setError('Failed to create an account')
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
                      <h1 className="text-center"> Sign Up</h1> 
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
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          @
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="passwordConfirm"
                        type="password"
                        placeholder="Confirm your password"
                        onChange={e => {
                            setPasswordConfirm(e.target.value)
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
                        Sign Up!<i className="fa fa-arrow-circle-right" />
                        </Button>
                        <br/>
                        <div className="w-100 text-center mt-2">
                            Already have an account? <Link to="/login">Log In</Link>
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

export default Signup
