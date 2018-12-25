import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ArticleListComponent } from 'app/articles/article-list/article-list.component';
import { ArticleDetailComponent } from 'app/articles/article-detail/article-detail.component';
import { OrganizationListComponent } from 'app/organization-list/organization-list.component';
import { OrganizationDetailComponent } from 'app/organization-detail/organization-detail.component';
import { EditorialListComponent } from 'app/editorial-list/editorial-list.component';
import { EditorialDetailComponent } from './editorial-detail/editorial-detail.component';
import { ReviewListComponent } from './review-list/review-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/:id', component: ArticleDetailComponent},
  { path: 'articles/:id/reviews', component: ReviewListComponent},
  { path: 'editorials', component: EditorialListComponent},
  { path: 'editorials/:id', component: EditorialDetailComponent},
  { path: 'organizations', component: OrganizationListComponent },
  { path: 'organization-detail/:id', component: OrganizationDetailComponent},
  { path: 'reviews', component: ReviewListComponent},
  { path: 'reviews/:id', component: ReviewListComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard'},
  //{ path: 'reviews/:reviewId', component: ReviewDetailComponent} //TODO
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}