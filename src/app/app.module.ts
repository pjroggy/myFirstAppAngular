import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
// import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListeOnomatopComponent } from './liste-onomatop/liste-onomatop.component';
import { CreateOnomatopiaComponentComponent } from './create-onomatopia-component/create-onomatopia-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    SkillComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    // FormulaireComponent,
    ListeOnomatopComponent,
    CreateOnomatopiaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
