'use client'

import React from 'react'
import { InputFields, SelectInput, TextareaInput } from '../utils/Inputs'
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
          <InputFields label="Tournament name" name="name" />
          <SelectInput
            name="type"
            options={[{ value: 'Elimination simple' }]}
          />
          <TextareaInput label="Description" name="description" />
          <button className="button is-success mt-3">Enviar</button>
        </Form>
      )}
    </Formik>
  )
}
