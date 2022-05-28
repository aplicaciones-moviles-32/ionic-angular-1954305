import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    username: string =""
    password: string =""
    cpassword: string =""

    constructor(
      public afAuth: AngularFireAuth,
      public alert: AlertController,
      public router: Router) { }

    ngOnInit() {
    }

    async login(){
      this.router.navigate(['login']);
    }

    async register() {
      const { username, password, cpassword } = this;
      if(password !== cpassword) {
        this.showAlert('Error', 'Passwords dont match');
        return console.error('Passwords dont match');
      }
      try {
        const res = await this.afAuth.createUserWithEmailAndPassword(username + '@redfox.com', password);
        console.log(res);
        this.showAlert('Success', 'Welcome to InstaRedFox!');

        this.router.navigate(['/tabs/feed']);

      } catch (error) {
        console.dir(error);
        this.showAlert('Error', 'Passwords dont match');
      }
    }

    async showAlert(header: string, message: string) {
      const alert = this.alert.create({
        header,
        message,
        buttons: ['OK']
      });

      await (await alert).present();
    }

}
