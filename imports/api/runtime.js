import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const RuntimeCollection = new Mongo.Collection('runtime');

export const test = 'test';

Meteor.startup(() => {
  if (!Meteor.isServer) {
    return;
  }

  Meteor.publish('runtime', () => {
    return RuntimeCollection.find();
  });

  Meteor.setInterval(async () => {
    await RuntimeCollection.upsertAsync('time', {
      $set: { value: new Date() },
    });
  }, 1000);
});
