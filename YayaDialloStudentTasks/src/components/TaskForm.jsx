import { useState } from 'react'

// Formulaire d'ajout : transmet les données saisies à la page Tasks via la prop onAjouter
function TaskForm({ onAjouter }) {
  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [erreur, setErreur] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation : le titre ne doit pas être vide
    if (titre.trim() === '') {
      setErreur('Le titre de la tâche est obligatoire.')
      return
    }

    onAjouter({ titre: titre.trim(), description: description.trim() })

    // Réinitialisation des champs
    setTitre('')
    setDescription('')
    setErreur('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Ajouter une tâche</h2>
      <div className="champs">
        <input
          type="text"
          placeholder="Titre de la tâche"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description de la tâche"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn-secondaire plein">
          Ajouter
        </button>
      </div>
      {erreur && <p className="erreur">{erreur}</p>}
    </form>
  )
}

export default TaskForm
