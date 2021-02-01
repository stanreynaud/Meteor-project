import {Images} from '/database/Images';
import {Tags} from '/database/Tags';
import {TagsCollection} from './server/TagsCollection'

// export default ImageCollection;

export default class ImageCollection extends Mongo.Collection { // Utilisation d'une clalle hérité de la collection Mongo

  insert(url,tags){ // fonction d'insertion d'une image
    let tabTag = tags.split(',');
    const img = {
      url: url,
      tags: tabTag
    };
    ImageCollection.creationTag(tags);
    Images.schema.validate(img);
    Images.insert(Images.schema);
  }

  creationTag(tag) {

    let tabTagTmp = tags.split(','); // Découpage du string de tags
    let allT = Tags.find().fetch(); // Récupération de tous les tags dans la BDD

    let taille  = allT.length;
    let place = taille-1
    let newTabTags = [];
    let dans;
    let name;
    let lastT = allT[place];
    let lastId = lastT['id'];
    tabTagTmp.forEach((item) => { // Parcour du tabTagTmp
      name = '';
      dans = true;
      i = 0;
      allT.forEach((itemT) => { // Parcour de la BDD
        dans = (item == itemT['name'] ? true : false);
      });
      name = (!dans ? TagsCollection.insert(lastId + 5,item) : null); // Si le tags saisit n'est pas dans le tableau de tags nous l'inseront avec un id incrementé de 5 par rapport au dernier id
    });
  }

}
