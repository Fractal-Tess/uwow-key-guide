<script lang="ts">
  import '../app.postcss';
  import { env } from '$env/dynamic/public';
  import { theme } from '$lib/stores/theme';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import Nav from '$lib/components/Nav.svelte';

  onMount(() => {
    if (browser) theme.init();
  });
  $: {
    if (browser && $theme) {
      document.documentElement.setAttribute('data-theme', $theme);
      document.documentElement.classList.value = $theme;
    }
  }
</script>

<svelte:head>
  <meta name="description" content="SvelteKit Template" />

  <meta itemprop="name" content="SvelteKit Template" />
  <meta itemprop="description" content="SvelteKit Template" />
  <meta itemprop="image" content={`${env.PUBLIC_ORIGIN_URL}/logo.png`} />

  <meta property="og:url" content={env.PUBLIC_ORIGIN_URL} />
  <meta property="og:type" content="Website" />
  <meta property="og:title" content="SvelteKit Template" />
  <meta property="og:description" content="SvelteKit Template" />
  <meta property="og:image" content={`${env.PUBLIC_ORIGIN_URL}/logo.png`} />

  <meta name="twitter:card" content={`${env.PUBLIC_ORIGIN_URL}/logo.png`} />
  <meta name="twitter:title" content="Indecisive" />
  <meta name="twitter:description" content="SvelteKit Template" />
  <meta name="twitter:image" content={`${env.PUBLIC_ORIGIN_URL}/logo.png`} />
</svelte:head>

<div class="form-control min-h-screen">
  <Nav />
  <main class="form-control container relative mx-auto flex-1">
    <slot />
  </main>
</div>
