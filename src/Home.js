import './Home.css';

function Home() {
  return (
      <aside className='card-home'>
        <span>
        <h1>SANTIAGO VELANDIA GALLO</h1>
        <h2>
        <span className='typing-text'>Bienvenido a mi portafilio como desarrollador web
        </span>
        </h2>
        </span>
        <span className='card-motivation-words'>
          <p>...Recorriendo el camino del software y la tecnología, me he encontrado con numerosos desafíos. Explora algunos de ellos aquí...</p>
        </span>
      </aside>
  );
}

export { Home };