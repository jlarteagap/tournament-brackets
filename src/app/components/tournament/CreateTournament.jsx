'use client'

import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { FormCreateTournament } from './FormCreateTournament'

export const CreateTournament = () => {
  const validate = Yup.object({
    name: Yup.string().required('El nombre del torneo es requerido')
  })
  return (
    <Formik
      initialValues={{
        name: '',
        typeTournament: '',
        description: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <Form>
          <FormCreateTournament />
        </Form>
      )}
    </Formik>
  )
}
