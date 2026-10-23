// Affiche une tâche reçue par l'intermédiaire des props
function TaskCard({ id, titre, description, statut, onChangerStatut }) {
  const classeStatut =
    statut === 'Terminée' ? 'statut termine' : statut === 'En cours' ? 'statut en-cours' : 'statut a-faire'

  return (
    <article className="task-card">
      <h3>{titre}</h3>
      <p>{description}</p>
      <span className={classeStatut}>{statut}</span>
      <button className="btn-secondaire" onClick={() => onChangerStatut(id)}>
        Changer le statut
      </button>
    </article>
  )
}

export default TaskCard
