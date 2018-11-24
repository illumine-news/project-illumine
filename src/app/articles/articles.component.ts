import { Component, OnInit, ViewChild} from '@angular/core';
//import { MatTableDataSource, MatTable, MatSort} from '@angular/material';
import { Article } from '../domain/article';
import { ArticleService } from '../services/article.service';
//import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  //dataSource;
  //displayedColumns = [];
 // @ViewChild(MatSort) sort: MatSort;
  
  articles: Article[];
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  constructor(private articleService: ArticleService) { }

  // columnNames = [{
  //   id: "position",
  //   value: "No."

  // }, {
  //   id: "name",
  //   value: "Name"
  // },
  // {
  //   id: "weight",
  //   value: "Weight"
  // },
  // {
  //   id: "symbol",
  //   value: "Symbol"
  // }];

  ngOnInit() {
    //this.getArticles();
    console.log("Made it to init");
    // this.displayedColumns = this.columnNames.map(x => x.id);
    //    this.createTable();
  }

  // createTable() {
  //   let tableArr: Element[] = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
  //   ];
  //   this.dataSource = new MatTableDataSource(tableArr);
  //   this.dataSource.sort = this.sort;
  // }

  // getArticles(): void {
  //   this.articleService.getArticles()
  //   .subscribe(articles => this.articles = articles);
  // }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.articleService.addArticle({ name } as Article)
  //   .subscribe(article => {
  //     this.articles.push(article);
  //   });
  // }

  // delete(article: Article): void {
  //   this.articles = this.articles.filter(h => h !== article);
  //   this.articleService.deleteArticle(article).subscribe();
  // }
}

