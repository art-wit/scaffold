<script>
  import { Router } from '@mateothegreat/svelte5-router';
  import Home from './pages/Home.svelte';
  import Products from './pages/Products.svelte';
  import Settings from './pages/Settings.svelte';

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
  <a href="/">Home</a>
  <a href="/products">Products</a>
  <a href="/settings">Settings</a>
  <Router {routes} />
</div>
