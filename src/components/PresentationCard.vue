<template>
  <main>
    <div class="card">
      <header>
        <h1>Andre Rodrigues</h1>
        <p>Welcome to my portfolio</p>
      </header>
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

h1 {
  font-family: 'Bebas Neue';
  font-size: 8rem;
  font-style: normal;
  margin-top: 1rem;
}

.card {
  grid-column: 1 / span 7;
  background: var(--dark-bg);
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  max-width: 100rem;
  height: 20rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-top: 7rem;
  padding-bottom: 2rem;
  margin-top: 1rem;
}

p {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  font-family: 'Coda';
}
</style>
