import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable()
export class CategoriesService {

  firestore = firebase.firestore();
constructor() { }

getCategories() {
  return new Promise((resolve, reject) => {
    this.firestore
      .collection('articles')
      .get()
      .then(snapshot => {
        resolve(snapshot);
      });
  });
}

getArticleList(law_id) {
  return new Promise((resolve, reject) => {
    this.firestore
      .collection('articles')
      .doc(law_id)
      .collection('articles_list')
      .get()
      .then(snapshot => {
        resolve(snapshot);
      });
  });
}

}
