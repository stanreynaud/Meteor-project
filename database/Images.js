export const Images = new Mongo.Collection('images');
import SimpleSchema from 'simpl-schema';

// const Schemas = {};
//
// Schemas.Images = new SimpleSchema({
//   url: {
//    type: String,
//    label: 'url de l\'image',
//    max: 200,
//  },
//  tagArray: {
//    type: "array",
//    // contains: {
//    //   type: "number"
//    // },
//    label: 'tableau des id de tags',
//  },

  // url: {
  //   type: String,
  //   label: 'url de l\'image',
  //   max: 200,
  // },
  // tagArray: {
  //   type: Array,
  //   label: 'tableau des id de tags',
  //   max: 100,
  // },
  Images.schema = new SimpleSchema({
  url: {type: String},
  tagsArray: {type: Number, defaultValue: 0},
});
// });
