  <script>
    import { Meteor } from "meteor/meteor";
    import { Tracker } from "meteor/tracker";
    import { LinksCollection } from '../api/links';
    
    let links, subIsReady;
    Tracker.autorun(() => {
      const handle = Meteor.subscribe('links.all');
      subIsReady = handle.ready();
      links = LinksCollection.find().fetch();      
      debugger;
    });
  </script>


  <div class="container">
    <h1>Welcome to Meteor!</h1>

    <h2>Learn Meteor!</h2>
    {#if subIsReady}
      <ul>
        {#each links as link (link._id)}
          <li><a href={link.url} target="_blank" rel="noreferrer">{link.title}</a></li>
        {/each}
      </ul>
    {:else}
      <div>Loading ...</div>
    {/if}
  </div>
