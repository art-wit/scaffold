<script>
  import { route } from '@mateothegreat/svelte5-router';
  import Lightswitch from '../components/Lightswitch.svelte';
</script>

<a use:route href="/"> Home </a>
<a use:route href="/products"> Products </a>
<a use:route href="/settings"> Settings </a>
<Lightswitch />
