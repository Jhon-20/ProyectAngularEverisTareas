import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { AppRoutingModule } from './app.routing';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import { LoginComponent } from './pages/login/login.component';
import {​​ AngularFirestoreModule, }​​ from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { NavActiveComponent } from './components/nav-active/nav-active.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { AddComponent } from './components/add/add.component';
import {FormsModule} from '@angular/forms';
import { EditarComponent } from './components/editar/editar.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    InicioComponent,
    NuevoComponent,
    DocumentacionComponent,
    LoginComponent,
    NavActiveComponent,
    TareasComponent,
    AddComponent,
    EditarComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
