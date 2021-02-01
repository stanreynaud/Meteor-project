export const Tags = new Mongo.Collection('tags');
import SimpleSchema from 'simpl-schema';

// Définition du schema de tags
Tags.schema = new SimpleSchema({
id: {type: Number, defaultValue: 0},
name: {type: String},
});
