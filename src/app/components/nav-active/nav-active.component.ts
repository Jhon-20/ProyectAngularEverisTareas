import { Component, OnInit } from '@angular/core';
import { mergeMap, map, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-active',
  templateUrl: './nav-active.component.html',
  styleUrls: ['./nav-active.component.css']
})
export class NavActiveComponent implements OnInit {
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
