import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    username: string =""
    password: string =""

    constructor(public afAuth: AngularFireAuth,
      public user: UserService,
      public router: Router,
      public alert: AlertController) { }

    ngOnInit() {
    }

    async return(){
      this.router.navigate(['register']);
    }

    async login() {
        const { username, password } = this;
        try{

          //Nadie ha visto nadaaa...
          const res = await this.afAuth.signInWithEmailAndPassword(username + '@redfox.com', password);

          if(res.user) {
            this.user.setUser({
              username,
              uid: res.user.uid
            });

            this.showAlert('Done!', 'Welcome again!');

            this.router.navigate(['/tabs/feed']);

          }

        } catch(err) {
          console.dir(err);
          if(err.code === 'auth/user-not-found'){

            this.showAlert('Wrong password or user not found', 'Try again');

          }
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
