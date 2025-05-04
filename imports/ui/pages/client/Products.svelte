<script>
  import { GradientButton } from 'flowbite-svelte';
  import { useSubscribe, useTracker } from '/lib/MeteorSvelte.svelte';
  import { LinksCollection } from '/imports/api';

  const linksReady = useSubscribe('links.all');
  const links = useTracker(() => LinksCollection.find({}).fetch());

  const reverseTitle = (linkId) => {
    Meteor.call('links.reverse-title', linkId);
  };
</script>

<h5
  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  Products
</h5>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
  Browse all available products
</p>
{#if !$linksReady}
  <div>Waiting on links...</div>
{:else}
  <ul>
    {#each $links as link (link._id)}
      <li class="m-2 flex justify-between items-center">
        <a
          class="inline-flex font-medium items-center text-blue-600 hover:underline"
          href={link.url}
          target="_blank"
          rel="noreferrer">{link.title}</a>
        <GradientButton
          shadow
          color="teal"
          on:click={() => {
            reverseTitle(link._id);
          }}>Reverse</GradientButton>
      </li>
    {/each}
  </ul>
  <ul>
    {#each $links as link (link._id)}
      <li class="m-2 flex justify-between items-center">
        <a
          class="inline-flex font-medium items-center text-blue-600 hover:underline"
          href={link.url}
          target="_blank"
          rel="noreferrer">{link.title}</a>
        <GradientButton
          shadow
          color="teal"
          on:click={() => {
            reverseTitle(link._id);
          }}>Reverse</GradientButton>
      </li>
    {/each}
  </ul>
  <ul>
    {#each $links as link (link._id)}
      <li class="m-2 flex justify-between items-center">
        <a
          class="inline-flex font-medium items-center text-blue-600 hover:underline"
          href={link.url}
          target="_blank"
          rel="noreferrer">{link.title}</a>
        <GradientButton
          shadow
          color="teal"
          on:click={() => {
            reverseTitle(link._id);
          }}>Reverse</GradientButton>
      </li>
    {/each}
  </ul>
  <ul>
    {#each $links as link (link._id)}
      <li class="m-2 flex justify-between items-center">
        <a
          class="inline-flex font-medium items-center text-blue-600 hover:underline"
          href={link.url}
          target="_blank"
          rel="noreferrer">{link.title}</a>
        <GradientButton
          shadow
          color="teal"
          on:click={() => {
            reverseTitle(link._id);
          }}>Reverse</GradientButton>
      </li>
    {/each}
  </ul>
{/if}
