import {Images} from '/database/Images';
import {Tags} from '/database/Tags';

class ImageCollection extends Mongo.Collection {

  insert(id,name){
    let tabTag = tags.split(',');
    const tags {
      url: id,
      tags: name
    };
    Tags.schema.validate(tags);
    Tags.insert(Tags.schema);
  }

}
