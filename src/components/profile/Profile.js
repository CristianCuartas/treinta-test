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
import {useAuth} from "../../contexts/AuthContext"; 
import NavbarComponent from '../dashboard/navbar';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { currentUser, updateEmail, updatePassword } = useAuth();
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== passwordConfirm){
            return setError('Password do not match')
        }

        const promises = []
        setError('')

        if(email !== currentUser.email){
            promises.push(updateEmail(email))
        }

        if(password){
            promises.push(updatePassword(password))
        }
        
        Promise.all(promises).then(()=>{
            history.push('/')
        }).catch(()=>{
            setError('Failed to update account')
        }).finally(()=>{
            setIsLoading(false);
        })

        try {
            history.push('/')
        } catch (error) {
            setError('Failed to redirect')
        }

        setIsLoading(false)
    }

    return (
        <>
    <NavbarComponent/>
    <div className="app flex-row align-items-center">
      <div style={{marginTop:"10px"}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={handleSubmit}>                    
                      <h1 className="text-center"> Update Profile</h1> 
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
                          defaultValue={currentUser.email}
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
                        placeholder="Leave blank to keep the same"
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
                        placeholder="Leave blank to keep the same"
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
                        Update<i className="fa fa-arrow-circle-right" />
                        </Button>
                        <br/>
                        <div className="w-100 text-center mt-2">
                            <Link to="/">Cancel</Link>
                        </div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
      </>
    )
}

export default Profile
