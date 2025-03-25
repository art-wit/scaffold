import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const RuntimeCollection = new Mongo.Collection('runtime');

Meteor.startup(() => {
    if (!Meteor.isServer) {
        return;
    }
    
    Meteor.publish('runtime', () => {
        return RuntimeCollection.find();
    });
    
    Meteor.setInterval(async () => {
        await RuntimeCollection.upsertAsync('time', { $set: { value: new Date() } })
    }, 1000);
})