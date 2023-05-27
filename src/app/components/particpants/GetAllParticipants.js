'use client'

import React, { useState } from 'react'
import { TextareaInput } from '../utils/Inputs'
import { Form, Formik } from 'formik'

export const GetAllParticipants = () => {
  const [participants, setParticipants] = useState('')
  console.log(participants)
  return (
    <Formik
      initialValues={{
        participants: ''
      }}
      onSubmit={values => {
        setParticipants(values.participants.split('\n'))
      }}
    >
      {formik => (
        <Form>
          <TextareaInput label="Participants" name="participants" />
          <button type="submit" className="button is-success mt-3">
            Add Participants
          </button>
        </Form>
      )}
    </Formik>
  )
}
