export const Images = new Mongo.Collection('images');
import SimpleSchema from 'simpl-schema';

// définition du schema des images
  Images.schema = new SimpleSchema({
  url: {type: String},
  tagsArray: {type: Number, defaultValue: 0},
});
