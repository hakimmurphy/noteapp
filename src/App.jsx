import { useState, useEffect } from 'react'
import { Header } from './Header'
import { Note } from './Note'
import { Footer } from './Footer'
import { CreateArea } from './CreateArea'

const getIntialData = () => {
  const data = JSON.parse(localStorage.getItem('notes'))
  if (!data) return []
  return data
}

function App() {

  const [notes, setNotes] = useState(getIntialData)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes), [notes])
  })

  function addNote(newNote) { //note object from CreateArea
    setNotes(prevNotes => {
      return [...prevNotes, newNote] //spread from prevNotes then add note
    })
  }

  function deleteNote(id) { // id from handleClick
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id //return an array without the selected id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => { //filter has an index as well
        return <Note
          key={index} //these are added to make an id
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  )
}

export default App 