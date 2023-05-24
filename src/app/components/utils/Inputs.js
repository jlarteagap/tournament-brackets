'use client'
import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const InputFields = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="field mt-3">
      <label className="label">{label}</label>
      <input
        className={`input ${meta.touched && meta.error && 'is-danger'}`}
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="help is-danger"
      />
    </div>
  )
}

export const SelectInput = ({ options, ...props }) => {
  console.log(options)
  const [field, meta] = useField(props)
  return (
    <div className="mt-3">
      <label>Tournament type</label>
      <div className="select is-fullwidth">
        <select
          {...field}
          {...props}
          className={`${meta.touched && meta.error && 'is-danger'}`}
        >
          {options.map((option, index) => {
            return (
              <option value={option.value} label={option.value} key={index}>
                {option.text}
              </option>
            )
          })}
        </select>
        <ErrorMessage
          component="div"
          name={field.name}
          className="help is-danger"
        />
      </div>
    </div>
  )
}

export const TextareaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="mt-3">
      <label>{label}</label>
      <textarea
        className={`textarea ${meta.touched && meta.error && 'is-danger'}`}
      ></textarea>
      <ErrorMessage
        component="div"
        name={field.name}
        className="help is-danger"
      />
    </div>
  )
}
