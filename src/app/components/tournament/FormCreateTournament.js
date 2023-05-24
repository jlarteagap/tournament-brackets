import { InputFields, SelectInput, TextareaInput } from '../utils/Inputs'

export const FormCreateTournament = () => {
  return (
    <>
      <InputFields label="Tournament name" name="name" />
      <SelectInput
        name="typeTournament"
        type="select"
        options={[{ value: 'Elimination simple' }]}
      />
      <TextareaInput label="Description" name="description" />
      <button className="button is-success mt-3" type="submit">
        Enviar
      </button>
    </>
  )
}
