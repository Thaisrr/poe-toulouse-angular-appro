import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SyntaxeComponent } from './pages/syntaxe/syntaxe.component';
import { RouteurComponent } from './pages/routeur/routeur.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ParentComponent } from './pages/parent/parent.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterShortComponent } from './components/counter-short/counter-short.component';
import { AboutServiceComponent } from './pages/about-service/about-service.component';
import { ToastComponent } from './components/toast/toast.component';
import { IconPipe } from './utils/pipes/icon.pipe';
import { CodeComponent } from './components/code/code.component';
import {HIGHLIGHT_OPTIONS, HighlightModule} from "ngx-highlightjs";
import {HttpClientModule} from "@angular/common/http";
import { TodoFilterPipe } from './utils/pipes/todo-filter.pipe';
import { LoginComponent } from './pages/login/login.component';
import { RecapComponent } from './pages/recap/recap.component';
import {NgxToastModule} from "@thaisrr/ngx-toaster";

@NgModule({
  declarations: [
    AppComponent,
    SyntaxeComponent,
    RouteurComponent,
    NotfoundComponent,
    ParentComponent,
    EnfantComponent,
    NavigationComponent,
    CounterComponent,
    CounterShortComponent,
    AboutServiceComponent,
    ToastComponent,
    IconPipe,
    CodeComponent,
    TodoFilterPipe,
    LoginComponent,
    RecapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighlightModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxToastModule
  ],
  providers: [
   {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          twig: () => import('highlight.js/lib/languages/twig.js')
        },
        themePath: '../assets/styles/themes/kimbie-dark.css',

      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
