import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-profile', pathMatch: 'full' },

  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignUpComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'article-list', component: ArticleListComponent},
  { path: 'article/:id', component: ArticleDetailComponent},

  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
