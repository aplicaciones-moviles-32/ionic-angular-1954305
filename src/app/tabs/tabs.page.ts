import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild('tabs') tabs: IonTabs;

  constructor() {}

  ngOnInit() {
    setTimeout(() => { this.tabs.select('feed'); }, 1500);
  }

  fileChanged(event) {
    const files = event.target.files;
    console.log(files);
  }
}
