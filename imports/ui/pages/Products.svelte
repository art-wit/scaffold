<script>
  import { useSubscribe, useTracker } from '/lib/MeteorSvelte.svelte';
  import { LinksCollection } from '/imports/api';

  const linksReady = useSubscribe('links.all');
  const links = useTracker(() => LinksCollection.find({}).fetch());

  const reverseTitle = (linkId) => {
    Meteor.call('links.reverse-title', linkId);
  };
</script>

<h1>Products</h1>
<p>Browse all available products.</p>

<h2>Learn Meteor!</h2>
{#if !$linksReady}
  <div>Waiting on links...</div>
{:else}
  <ul>
    {#each $links as link (link._id)}
      <li>
        <a href={link.url} target="_blank" rel="noreferrer">{link.title}</a>
        <button
          on:click={() => {
            reverseTitle(link._id);
          }}>Reverse</button>
      </li>
    {/each}
  </ul>
{/if}
