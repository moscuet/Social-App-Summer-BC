import React from 'react'
import {withFormik, Form, Field} from 'formik'
import * as yup from 'yup'

const FormikForm = ({values,errors, touched, handleChange}) => (
        <Form >
            <div>
                <Field type = "email" name = "email" placeholder = "Email" />
                {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <Field type = "password" name = "password" placeholder = "Password" />
                {touched.password && errors.password && <p>{errors.password}</p>}
            </div>
            <button>Submit</button>
        </Form>
    )

    const handleSubmit = (values)=>{
        console.log(values)
    }

    const validationSchema = yup.object().shape({
        email: yup.string().email().required('Required'),
        password:yup.string().min(6).required('Required')
        
      });

const LoginForm = withFormik({
    mapPropsToValues({email,password}) {
        return {
            email: email || '',
            password:password || ''
        }
    },
    validationSchema,
    handleSubmit
}) (FormikForm )

export default LoginForm

