import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forma: FormGroup;
  constructor(private notasService: NotasService,
    private router: Router,
    private auth: AngularFireAuth) {
      this.forma =  new FormGroup({
        nombre: new FormControl('tarea', Validators.required)
      })

     }

  ngOnInit(): void {
  }
  continuar(value: firebase.auth.UserCredential) {
    console.log(this.notasService.nombre);
    // this.chatService.idRoom = this.forma.get('idRoom').value;
    // this.chatService.nickname = value.user.displayName;
    this.router.navigate(['/nuevo', this.forma.get('nombre').value])
      
      
  }
  logearConGoogle() {
    if(this.forma.invalid) { return; }
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      //.then( this.continuar);
      .then( value => this.continuar(value))
  }
}
