<script>
  import { Router } from '@mateothegreat/svelte5-router';
  import Products from '../../pages/protected/Products.svelte';
  import Settings from '../../pages/protected/Settings.svelte';
  import Navigation from '../../components/Navigation.svelte';

  const routes = [
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

<Navigation />
<Router id="protected-router" basePath="/protected" {routes} />
