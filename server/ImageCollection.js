import {Images} from '/database/Images';
import {Tags} from '/database/Tags';
import {TagsCollection} from '/server/TagsCollection'

class ImageCollection extends Mongo.Collection {

  insert(url,tags){
    let tabTag = tags.split(',');
    const img {
      url: url,
      tags: tabTag
    };
    ImageCollection.creationTag(tags);
    Images.schema.validate(img);
    Images.insert(Images.schema);
  }

  creationTag(tag) {

    let tabTagTmp = tags.split(',');
    let allT = Tags.find().fetch();
    let allI = Images.find().fetch();

    let i;
    let taille  = all.length;
    let place = taille-1
    let newTabTags = [];
    let in;
    let name;
    let lastT = allT[place];
    let lastId = lastT['id'];
    tabTagTmp.forEach((item) => {
      name = '';
      in = true;
      i = 0;
      allT.forEach((itemT) => {
        in = (item == itemT['name'] ? true : false);
        // newTabTags.push(name);
        //   let in = true;
        //     tabTag.push(tabTagTmp[i])
      });
      name = (!in ? TagsCollection.insert(lastId,item) : null);
    });
  }

  //

}
