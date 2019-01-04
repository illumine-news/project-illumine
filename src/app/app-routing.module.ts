import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ArticleListComponent } from 'app/articles/article-list/article-list.component';
import { ArticleDetailComponent } from 'app/articles/article-detail/article-detail.component';
import { OrganizationListComponent } from 'app/organizations/organization-list/organization-list.component';
import { OrganizationDetailComponent } from 'app/organizations/organization-detail/organization-detail.component';
import { EditorialListComponent } from 'app/editorials/editorial-list/editorial-list.component';
import { EditorialDetailComponent } from 'app/editorials/editorial-detail/editorial-detail.component';
import { ReviewListComponent } from 'app/review-list/review-list.component';
import { NotFoundComponent } from 'app/not-found-component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'articles', component: ArticleListComponent }, 
  { path: 'articles/:id', component: ArticleDetailComponent},
  { path: 'articles/:**', redirectTo: '/404'},
  { path: 'editorials', component: EditorialListComponent},
  { path: 'editorials/:id', component: EditorialDetailComponent},
  { path: 'organizations', component: OrganizationListComponent },
  { path: 'organizations/:id', component: OrganizationDetailComponent},
  { path: 'reviews', component: ReviewListComponent},
  { path: 'reviews/:id', component: ReviewListComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'},
  //{ path: 'reviews/:reviewId', component: ReviewDetailComponent} //TODO
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}