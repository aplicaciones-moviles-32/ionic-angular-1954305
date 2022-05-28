import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userPosts;

  constructor(private menu: MenuController,
    private router: Router,
    private alert: AlertController,
    private afs: AngularFirestore,
    private user: UserService) {
      const posts = afs.doc(`users/${user.getUID}`);
      this.userPosts = posts.valueChanges();
  }

  bio: String;
  nombre: String;
  seguidores: number;
  siguiendo: number;

  editando: boolean = false;

  nuevoUsuario: String;
  nuevaPresentacion: String;
  publicaciones=[];


    // this.db.updateNombreUsuario(this.nuevaPresentacion).subscribe(res => { console.log(res); })

  obtenerPublicaciones(): void {
  //  this.db.getPublicaciones().subscribe(res => {
  //    console.log(res);
  //  })
  }

  ngOnInit() {
  }

  async logout(){
    this.router.navigate(['login']);
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  async showAlert(header: string, message: string) {
    const alert = this.alert.create({
      header,
      message,
      buttons: ['OK']
    });
  }
}
