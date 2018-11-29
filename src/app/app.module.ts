import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { EditorialComponent } from './editorial-detail/editorial-detail.component';
import { EditorialListComponent } from './editorial-list/editorial-list.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data-service';

import { OrganizationSearchComponent } from './organization-search/organization-search.component';
import { ArticleSearchComponent } from './articles/article-search/article-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    OrganizationsComponent,
    OrganizationDetailComponent,
    MessagesComponent,
    DashboardComponent,
    OrganizationSearchComponent,
    ArticleSearchComponent,
    EditorialComponent,
    EditorialListComponent
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
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
