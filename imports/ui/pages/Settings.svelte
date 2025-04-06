<script>
  import { useSubscribe, useTracker } from '/lib/MeteorSvelte.svelte';
  import { RuntimeCollection } from '/imports/api';

  const runtimeReady = useSubscribe('runtime');
  let myClickCount = 0;

  const addToCounter = () => {
    myClickCount += 1;
    Meteor.call('runtime.click', (error, response) => {
      console.log('Click method call completed!', { error, response });
      if (error) {
        alert(error.message);
      }
    });
  };
  const clicks = useTracker(() => RuntimeCollection.findOne({ _id: 'clicks' }));
</script>

<h1>Settings</h1>
<p>Manage your settings here.</p>

<button on:click={addToCounter}>Click Me</button>
<p>
  You've pressed the button {myClickCount} times. In total, it has been clicked
  <span>
    {#if !$runtimeReady}
      (loading...)
    {:else}
      {$clicks?.value.toLocaleString() || 0}
    {/if}
  </span>
  times.
</p>
