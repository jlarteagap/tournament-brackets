'use client'

import React from 'react'
import { InputFields } from '../utils/Inputs'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'

export const CreateTournament = () => {
  const validate = Yup.object({
    name: Yup.string().required('El nombre del torneo es requerido')
  })
  return (
    <Formik
      initialValues={{
        name: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <Form>
          <InputFields label="Agregar nombre del torneo" name="name" />
          <button className="button is-success">Enviar</button>
        </Form>
      )}
    </Formik>
  )
}
