import React from 'react';
import EmailSVG from '../../images/email.svg';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const CustomScheme = Yup.object().shape({
  email: Yup.string().email('Bitte geben Sie eine gültige Email-Adresse ein').required("Bitte geben Sie eine Email-Adresse an"),
  subject: Yup.string().required("Bitte geben Sie einen Betreff an"),
  text: Yup.string().required("Bitte geben Sie eine Nachricht an"),
});

const initialValues = {
  email: '',
  subject: '',
  text: '',
};

export const ContactSection = () => {
  return (
    <section className='row' id='contact-section'>
      <div className='col-md-6 order-last order-md-first'>
        <CustomForm/>
      </div>
      <div className='col-md-6 d-flex justify-content-center align-items-center mb-5 mb-md-0'>
        <img src={EmailSVG} alt="EmailSVG" className='svg-mail'/>
      </div>
    </section>
  );
}

const submitForm = (values, {resetForm}) => {
  fetch('http://localhost:5000/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...values}),
  }).then(data => {
    //console.log(data);
  });
  resetForm();
};

const CustomForm = () => {

  return (
    <Formik initialValues={initialValues} validationSchema={CustomScheme} onSubmit={submitForm}>
      {(formik) => {
        const {errors, touched, isValid, dirty} = formik;
        return (
          <Form>
            <fieldset>
              <div className='mb-3'>
                <label className='form-label' htmlFor='email'>Email</label>
                <Field type="email" id='email' name='email'
                       className={`form-control ${touched.email ? (errors.email ? 'border-danger' : 'border-success') : ''}`}/>
                <ErrorMessage name="email" component="span" className="text-danger"/>
              </div>
              <div className='mb-3'>
                <label className='form-label' htmlFor='subject'>Betreff</label>
                <Field type="text" id='subject' name='subject'
                       className={`form-control ${touched.subject ? (errors.subject ? 'border-danger' : 'border-success') : ''}`}/>
                <ErrorMessage name="subject" component="span" className="text-danger"/>
              </div>
              <div className='mb-3'>
                <label className='form-label' htmlFor='text'>Nachricht</label>
                <Field rows='10' as='textarea' id='text' name='text'
                       className={`form-control ${touched.text ? (errors.text ? 'border-danger' : 'border-success') : ''}`}/>
                <ErrorMessage name="text" component="span" className="text-danger"/>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <button type="submit" className={dirty && isValid ? "btn btn-dark px-3" : "btn btn-dark px-3"}
                        disabled={!(dirty && isValid)}>
                  Senden
                </button>
              </div>
            </fieldset>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactSection;
