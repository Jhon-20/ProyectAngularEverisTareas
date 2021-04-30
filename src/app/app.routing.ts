import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';



const routes: Routes = [
    { path: 'inicio', component:  InicioComponent},
    { path: 'documentacion', component: DocumentacionComponent},
    { path: 'login', component: LoginComponent},
    { path: 'nuevo/:tarea', component: NuevoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }