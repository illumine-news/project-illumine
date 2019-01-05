import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'app/domain/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService }  from 'app/services/article.service';
import { Review } from 'app/domain/review';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input() article: Article;
  illumineScore: number;
  reviews: Observable<Review[]>;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.getarticle();
  }

  getarticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe((article => this.article = article),
      (error) => this.router.navigate(['404'])
      );
  }
}