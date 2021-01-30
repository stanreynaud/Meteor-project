export const Tags = new Mongo.Collection('tags');
import SimpleSchema from 'simpl-schema';

// const Schemas = {};
//
// Schemas.Tags = new SimpleSchema({
//   id: {
//     type: SimpleSchema.Integer,
//     label: 'id du tag',
//     max: 200,
//   },
//   name: {
//     type: String,
//     label: 'nom du tag',
//     max: 100,
//   },
// });

Tags.schema = new SimpleSchema({
id: {type: Number, defaultValue: 0},
name: {type: String},
});
