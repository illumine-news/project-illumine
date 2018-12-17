import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Article } from 'app/domain/article';
import { ArticleService } from 'app/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: [ './article-search.component.css' ]
})
export class ArticleSearchComponent implements OnInit {
  articles$: Observable<Article[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private router: Router,
    private articleService: ArticleService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }


  ngOnInit(): void {
    this.articles$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.articleService.searchArticles(term)),
    );
  }
}