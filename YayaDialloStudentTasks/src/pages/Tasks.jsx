import { useState } from 'react'
import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'

const STATUTS = ['À faire', 'En cours', 'Terminée']

function Tasks() {
  // Initialisation des trois tâches avec useState
  const [taches, setTaches] = useState([
    { id: 1, titre: 'Réviser React', description: 'Étudier les composants et les hooks', statut: 'À faire' },
    { id: 2, titre: 'Terminer le TP', description: 'Finaliser le travail pratique', statut: 'En cours' },
    { id: 3, titre: "Préparer l'examen", description: 'Relire les notes de cours', statut: 'À faire' },
  ])

  // Ajout d'une tâche : on crée un nouveau tableau sans modifier l'état existant
  const ajouterTache = ({ titre, description }) => {
    const nouvelleTache = {
      id: Date.now(),
      titre,
      description,
      statut: 'À faire',
    }
    setTaches((precedentes) => [...precedentes, nouvelleTache])
  }

  // Changement de statut : À faire -> En cours -> Terminée -> À faire
  const changerStatut = (id) => {
    setTaches((precedentes) =>
      precedentes.map((tache) =>
        tache.id === id
          ? { ...tache, statut: STATUTS[(STATUTS.indexOf(tache.statut) + 1) % STATUTS.length] }
          : tache,
      ),
    )
  }

  return (
    <section className="tasks">
      <TaskForm onAjouter={ajouterTache} />

      <h2>Liste des tâches</h2>
      <div className="task-list">
        {taches.map((tache) => (
          <TaskCard
            key={tache.id}
            id={tache.id}
            titre={tache.titre}
            description={tache.description}
            statut={tache.statut}
            onChangerStatut={changerStatut}
          />
        ))}
      </div>
    </section>
  )
}

export default Tasks
