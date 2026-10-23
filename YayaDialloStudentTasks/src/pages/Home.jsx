import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home">
      <h1>
        Bienvenue sur Student<span className="accent">Tasks</span>
      </h1>
      <p>
        Organisez vos tâches, suivez vos progrès et restez concentré
        <br />
        sur vos objectifs étudiants.
      </p>
      <Link to="/tasks" className="btn-principal">
        Consulter mes tâches
      </Link>
    </section>
  )
}

export default Home
