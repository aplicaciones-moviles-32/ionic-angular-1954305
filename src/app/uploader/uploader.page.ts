import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import uploadcare from 'uploadcare-widget/uploadcare.lang.en.min.js';
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  imageURL: string;
  desc: string;

  constructor(
    public http: HttpClient,
    public user: UserService,
    public afstore: AngularFirestore) { }

  ngOnInit() {
  }

  createPost(){
    const image = this.imageURL;
    const desc = this.desc;

    this.afstore.doc(`users/${this.user.getUID}`).update({
        posts: firestore.FieldValue.arrayUnion({image, desc})
    });
  }

  fileChanged(event) {
    const files = event.target.files;

    const data = new FormData();
    data.append('file', files [0]);
    data.append('UPLOADCARE_STORE', '1');
    data.append('UPLOADCARE_PUB_KEY', 'ca074d73a3b4d8c1db35');

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
      console.log(event);
      var val = JSON.stringify([event['file']]);
      var val1 = JSON.parse(val);
      this.imageURL = val1;
    });
  }

}
