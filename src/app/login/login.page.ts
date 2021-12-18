import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.email === '@admin' && this.senha === '12345'){
      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('Seja bem vindo!', 'success');
    }else{
      this.presentToast('ERRO! Usuário e/ou senha inválidos!', 'danger');
    }
  }

  registro(){
    this.presentToast('ID: @admin / PW: 12345', 'success');
  }

  async presentToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    toast.present();
  }

}
