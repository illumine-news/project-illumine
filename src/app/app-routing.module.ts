import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ArticleListComponent } from 'app/articles/article-list/article-list.component';
import { ArticleDetailComponent } from 'app/articles/article-detail/article-detail.component';
import { OrganizationListComponent } from 'app/organization-list/organization-list.component';
import { OrganizationDetailComponent } from 'app/organization-detail/organization-detail.component';
import { EditorialListComponent } from 'app/editorial-list/editorial-list.component';
import { EditorialDetailComponent } from './editorial-detail/editorial-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'article-detail/:id', component: ArticleDetailComponent},
  { path: 'editorials', component: EditorialListComponent},
  { path: 'editorial-detail/:id', component: EditorialDetailComponent},
  { path: 'organizations', component: OrganizationListComponent },
  { path: 'organization-detail/:id', component: OrganizationDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}