import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PersonsList from './PersonsList'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const duplicatePerson = persons.find(person => person.name === newName)
    if (duplicatePerson) {
      if (!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        return
      }

      return personService
        .update(duplicatePerson.id, { ...duplicatePerson, number: newNumber})
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id !== duplicatePerson.id ? p : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const deletePerson = (personToDelete) => {
    if (!window.confirm(`Delete ${personToDelete.name} ?`)) return
    personService
      .deleteById(personToDelete.id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== personToDelete.id))
      })
  }

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChange={e => setFilter(e.target.value)}/>

      <h3>add a new</h3>
      <PersonForm 
        handleSubmit={addPerson}
        newName={newName}
        handleNameChange={e => setNewName(e.target.value)}
        newNumber={newNumber}
        handleNumberChange={e => setNewNumber(e.target.value)}
      />

      <h3>Numbers</h3>
      <PersonsList 
        persons={persons.filter((person) => {
          if (filter === '') return true
          else return person.name.toLowerCase().includes(filter.toLowerCase())
        })} 
        handlePersonDelete={deletePerson}
      />
    </div>
  )
}

export default App