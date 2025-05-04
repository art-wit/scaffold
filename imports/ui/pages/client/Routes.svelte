<script>
  import { DarkMode } from 'flowbite-svelte';
  import { Router } from '@mateothegreat/svelte5-router';
  import Navigation from '../../components/Navigation.svelte';
  import Products from '../../pages/client/Products.svelte';
  import Settings from '../../pages/client/Settings.svelte';
  import Statistics from '../../pages/client/Statistics.svelte';

  const routes = [
    {
      path: 'statistics',
      component: Statistics,
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

<div class="overflow-y-scroll h-[calc(100dvh-4rem)] p-2">
  <div class="flex justify-end">
    <DarkMode
      class="mr-2 text-primary-500 dark:text-primary-600 dark:border-gray-800" />
  </div>
  <Router id="protected-router" basePath="client/" {routes} />
</div>
<Navigation />
