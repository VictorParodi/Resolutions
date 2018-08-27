import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

Resolutions = new Mongo.Collection("resolutions");

Meteor.publish('allResolutions', function() {
    return Resolutions.find();
});