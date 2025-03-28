// import { Meteor } from 'meteor/meteor';
import { RuntimeCollection, test } from '/imports/api/runtime';
import { LinksCollection } from '/imports/api/links';
import { Meteor } from 'meteor/meteor';
import '/imports/api';

// debugger;
// const a = `b${test}`;
// const a1 = `b${test}`;
// [1, 2, 3].map((a) => {
console.log(test);
// });
// [1, 2, 3].map((a) => {
//   console.log(a);
// });

// const er = ({ a }) => {
//   a + a1;
// };

// const er2 = ({ a2 }) => {
//   a + a2;
// };

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.publish('links.all', function publishLinksAll() {
  return LinksCollection.find();
});
Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if ((await LinksCollection.find().countAsync()) === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://svelte-tutorial.meteor.com/',
    });
    await insertLink({
      title: 'Follow the Guide',
      url: 'https://guide.meteor.com',
    });
    await insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    });
    await insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
    });
  } else {
    //
  }

  if ((await RuntimeCollection.find({ _id: 'clicks' }).countAsync()) === 0) {
    await RuntimeCollection.insertAsync({ _id: 'clicks', value: 0 });
  }

  Meteor.methods({
    'runtime.click': async () => {
      const { value } = (await RuntimeCollection.findOneAsync({
        _id: 'clicks',
      })) || { value: 0 };

      await RuntimeCollection.updateAsync(
        { _id: 'clicks' },
        { $set: { _id: 'clicks', value: value + 1 } },
      );
    },
  });

  Meteor.methods({
    async 'links.reverse-title'(linkId) {
      const { title } = await LinksCollection.findOneAsync(linkId);
      await LinksCollection.updateAsync(linkId, {
        $set: { title: title.split('').reverse().join('') },
      });
    },
  });

  console.log(`Meteor server started up successfully: ${Meteor.absoluteUrl()}`);
});
