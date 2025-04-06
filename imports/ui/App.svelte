<script>
  import { Router } from '@mateothegreat/svelte5-router';
  import Home from './pages/Home.svelte';
  import Products from './pages/Products.svelte';
  import Settings from './pages/Settings.svelte';
  import Navigation from './layouts/Navigation.svelte';

  const routes = [
    {
      component: Home,
    },
    {
      path: 'products',
      component: Products,
    },
    {
      path: 'settings',
      component: Settings,
    },
  ];
</script>

<div class="container">
  <Navigation />
  <Router {routes} />
</div>
