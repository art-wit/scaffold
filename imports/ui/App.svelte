<script>
  import { Router } from '@mateothegreat/svelte5-router';
  import BaseLayout from './layouts/BaseLayout.svelte';
  import Login from './pages/Login.svelte';
  import Home from './pages/Home.svelte';
  import Products from './pages/Products.svelte';
  import Settings from './pages/Settings.svelte';
  import Navigation from './components/Navigation.svelte';

  const routes = [
    {
      component: Home,
    },
    {
      path: 'login',
      component: Login,
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

<BaseLayout>
  <Navigation />
  <Router {routes} />
</BaseLayout>
