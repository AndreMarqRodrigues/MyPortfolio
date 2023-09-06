<template>
  <main>
    <div class="card">
        <h1>About me</h1>
        <p>I am a Computer Science Gradute at Coventry University with upper second class honnors. Born and raised in portugal, allways had passion for technology and learning new skills. Throughout my life allways had gaming and cinema as main forms of entertainment and I feel like those media were what made me curious about programming and IT.</p>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Coda&display=swap');
main {
  width: 100vw;
  color: #fffcf2;
  /* z-index: 99; */
  position: absolute;
  width: 100%;
  margin: 0px auto;
  padding: 120px 0px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
}

.card {
  z-index: 1;
  grid-column: 2 / span 5;
  background: var(--dark-bg);
  background-color: rgba(0, 0, 0, 0.47);
  width: 100%;
  max-width: 100rem;
  height: 20rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
}

p {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  font-family: 'Coda';
  text-align: justify;
}

h1 {
  font-family: 'Bebas Neue';
  font-size: 3rem;
  font-style: normal;
  margin-top:  -1rem;
  margin-bottom: -1rem;
  padding-bottom: 1.5rem;
}

@media (max-width: 768px) {

p {
    font-size: 1rem; 
}

h1 {
    font-size: 1.5rem; 
  }
}

@media (max-width: 480px) {
p {
    font-size: 1rem; 
  }

h1 {
    font-size: 2rem; 
  }
}
</style>
