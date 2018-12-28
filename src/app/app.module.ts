import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from 'app/app.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ArticleListComponent } from 'app/articles/article-list/article-list.component';
import { ArticleDetailComponent } from 'app/articles/article-detail/article-detail.component';
import { OrganizationListComponent } from 'app/organizations/organization-list/organization-list.component';
import { OrganizationDetailComponent } from 'app/organizations/organization-detail/organization-detail.component';
import { EditorialDetailComponent } from 'app/editorials/editorial-detail/editorial-detail.component';
import { EditorialListComponent } from 'app/editorials/editorial-list/editorial-list.component';
import { ReviewListComponent } from './review-list/review-list.component';

import { InMemoryDataService } from 'app/services/in-memory-data-service';
import { ArticleListSummaryComponent } from 'app/articles/article-list-summary/article-list-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    OrganizationListComponent,
    OrganizationDetailComponent,
    DashboardComponent,
    EditorialDetailComponent,
    EditorialListComponent,
    ReviewListComponent,
    ArticleListSummaryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false},
    ),
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    CdkTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
