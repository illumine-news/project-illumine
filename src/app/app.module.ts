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

import { AppComponent } from 'app/app.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { OrganizationSearchComponent } from 'app/organization-search/organization-search.component';
import { ArticleSearchComponent } from 'app/articles/article-search/article-search.component';
import { ArticleListComponent } from 'app/articles/article-list/article-list.component';
import { ArticleDetailComponent } from 'app/articles/article-detail/article-detail.component';
import { OrganizationListComponent } from 'app/organization-list/organization-list.component';
import { OrganizationDetailComponent } from 'app/organization-detail/organization-detail.component';
import { EditorialDetailComponent } from 'app/editorial-detail/editorial-detail.component';
import { EditorialListComponent } from 'app/editorial-list/editorial-list.component';

import { MessagesComponent } from 'app/messages/messages.component';
import { InMemoryDataService } from 'app/services/in-memory-data-service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    OrganizationListComponent,
    OrganizationDetailComponent,
    MessagesComponent,
    DashboardComponent,
    OrganizationSearchComponent,
    ArticleSearchComponent,
    EditorialDetailComponent,
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
    MatPaginatorModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
