<script>
  import { RuntimeCollection } from '/imports/api';
  import { useSubscribe, useTracker } from '/lib/MeteorSvelte.svelte';

  const runtimeReady = useSubscribe('runtime');
  const serverTime = useTracker(() =>
    RuntimeCollection.findOne({ _id: 'time' }),
  );
</script>

<h1>Welcome to Meteor!</h1>
{#if !$runtimeReady}
  (loading...)
{:else}
  <h3>The current server time is {$serverTime?.value}</h3>
{/if}
