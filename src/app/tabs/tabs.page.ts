import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild('tabs') tabs: IonTabs;

  constructor() { }

  ngOnInit() {
    setTimeout(() => { this.tabs.select('feed'); }, 1500);
  }

  fileChanged(event) {
    const files = event.target.files;
    console.log(files);
  }
}
