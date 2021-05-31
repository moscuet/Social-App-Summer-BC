import React from 'react'
import {withFormik, Form, Field} from 'formik'
import * as yup from 'yup'

const Login = ({values,errors, touched, handleChange}) => (
        <Form >
            <div>
                <Field type = "email" name = "email" placeholder = "Email" />
                {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <Field type = "password" name = "password" placeholder = "Password" />
                {touched.password && errors.password && <p>{errors.password}</p>}
            </div>
            <label>
                <Field type = "checkbox" name = "newsletter" checked = {values.newsletter} />
                Join our newsletter
            </label>
            <Field component = 'select' name ='plan'> 
                <option value ="free">Free</option>
                <option value ="pro">Pro</option>
            </Field>
            <button>Submit</button>
        </Form>
    )
    const handleSubmit = (values)=>{
        console.log(values)
    }
    const validationSchema = yup.object().shape({
        email: yup.string().email().required('req'),
        password:yup.string().min(9).required('req')
        
      });
const FormikApp = withFormik({
    mapPropsToValues({email,password, newsletter,plan}) {
        return {
            email: email || '',
            password:password || '',
            newsletter:newsletter || true,
            plan: plan || 'free'
        }
    },
    validationSchema,
    handleSubmit
})(Login)

export default FormikApp



