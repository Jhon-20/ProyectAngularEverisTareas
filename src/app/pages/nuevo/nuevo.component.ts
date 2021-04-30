import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map,take } from 'rxjs/operators';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  nombre: string;
  constructor(private router: Router,
    private fireStore: AngularFirestore,
    private auth: AngularFireAuth) {
      const user$ = this.auth.user.pipe( map( user => user.displayName ), take(1));
      
   user$.subscribe( nombre => this.nombre = nombre);
   }


  ngOnInit(): void {
  }

}
