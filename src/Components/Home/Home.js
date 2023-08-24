import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll('.particle').forEach(particle => {
        const speed = parseFloat(particle.getAttribute('data-speed'));
        const rotation = parseFloat(particle.getAttribute('data-rotation'));
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        particle.style.transform = `scale(${x/30}) translateX(${x}px) translateY(${y}px) rotate(${rotation}deg)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <>

    <aside className='card card-section card-home'>
      <section>
        <div data-speed="5" data-rotation="80" className='particle dot-1'></div>
        <div data-speed="-5" data-rotation="22" className='particle dot-2'></div>
        <div data-speed="2" data-rotation="-45" className='particle dot-3'></div>
        <div data-speed="-9" data-rotation="51" className='particle dot-4'></div>
        <div data-speed="6" data-rotation="-11" className='particle dot-5'></div>
        <div data-speed="-7" data-rotation="-17" className='particle dot-6'></div>
        <div data-speed="-5" data-rotation="26" className='particle dot-7'></div>
        <div data-speed="4" data-rotation="-14" className='particle dot-8'></div>
        <h1>SANTIAGO VELANDIA GALLO</h1>
        <h2>
          <span className='typing-text'>Bienvenid@ a mi portfolio como desarrollador de software.</span>
        </h2>
      </section>
      <section className='card-motivation-words'>
        <p>...Recorriendo el camino del software y la tecnología, me he encontrado con numerosos desafíos. Explora algunos de ellos aquí...</p>
      </section>
    </aside>
    </>
  );
}

export { Home };
