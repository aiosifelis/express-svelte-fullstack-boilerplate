<script>
  import { onMount } from 'svelte';
  import svelteLogo from './assets/svelte.svg';
  import Counter from './lib/Counter.svelte';
  import viteLogo from '/vite.svg';

  let fetchedData = {}


    async function getData() {
        try {
            const res = await fetch("/api/health")
            const data = await res.json()
            console.log(data)
            fetchedData = data
        } catch (error) {
            console.error(error)
        }
    }


    onMount(() => {
      console.log('mounted');
        getData()
    });

</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <pre>{JSON.stringify(fetchedData, null, 4)}</pre>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more. Thank you
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
