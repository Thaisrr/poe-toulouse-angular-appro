import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {SyntaxeComponent} from "./pages/syntaxe/syntaxe.component";
import {RouteurComponent} from "./pages/routeur/routeur.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {ParentComponent} from "./pages/parent/parent.component";
import {AboutServiceComponent} from "./pages/about-service/about-service.component";
import {LoginComponent} from "./pages/login/login.component";
import {RecapComponent} from "./pages/recap/recap.component";

const routes: Routes = [
  {path: '', component: SyntaxeComponent, title: 'Syntaxe de Composant'},
  {path: 'routeur', component: RouteurComponent, title: 'Angular Routeur'},
  {path: 'communication', component: ParentComponent},
  {path: 'services', component: AboutServiceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recap', component: RecapComponent},
  {path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)},
  {path: 'accueil', redirectTo: ''},
  {path: 'acceuil', redirectTo: ''},
  {path: '**', component: NotfoundComponent, title: '404 : Page non trouvée'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
