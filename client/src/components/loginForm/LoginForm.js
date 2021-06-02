import React from 'react'
import {withFormik, Form as Formm, Field} from 'formik'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Container} from 'react-bootstrap'
import * as yup from 'yup'
import './_login.scss'
const FormikForm = ({values,errors, touched, handleChange, handleSubmit}) => (
        <Container>
            <Row>
                <div> 
                    <p> Don't have an account?  <Link to="/register">Get Started</Link> </p>
                </div>
            </Row>
            <Row>
                <h1>Sign In To Your Account</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </Row>
            <Row>
                <Form onSubmit= {handleSubmit}>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Email address*</Form.Label>
                        <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        value={values.email}
                        
                        className={touched.email && errors.email ? "has-error" : null}
                        />
                        {touched.email && errors.email && (
                            <div className="error-message">{errors.email}</div>
                        )}
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" >
                        <Form.Label>Password*</Form.Label>
                        <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={values.password}
                        className={touched.password && errors.password ? "has-error" : null}
                        />
                        {touched.password && errors.password && (
                            <div className="error-message">{errors.password}</div>
                        )}
                    </Form.Group>
                
                    <Button className="mb-2" variant="success" type="submit">
                        Submit
                    </Button>
            
                </Form>

            </Row>
        </Container>
    )
    const handleSubmit = (values) => {
        console.log('values',values)
    }

    const validationSchema = yup.object().shape({
        email: yup.string().email().required('Email equired'),
        password:yup.string().min(6).required('Password required')
        
      });



const LoginForm = withFormik({
    mapPropsToValues({email,password}) {
        return {
            email: email || '',
            password:password || ''
        }
    },
    validationSchema,
    handleSubmit,
}) (FormikForm )

export default LoginForm



