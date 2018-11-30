import { Component, OnInit, Input } from '@angular/core';
import { Editorial } from 'app/domain/editorial';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EditorialService }  from 'app/services/editorial.service';
 
@Component({
  selector: 'app-editorial-detail',
  templateUrl: './editorial-detail.component.html',
  styleUrls: ['./editorial-detail.component.css']
})
export class EditorialDetailComponent implements OnInit {
  @Input() editorial: Editorial;
 
  constructor(
    private route: ActivatedRoute,
    private editorialService: EditorialService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.geteditorial();
  }
  
  geteditorial(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.editorialService.geteditorial(id)
      .subscribe(editorial => this.editorial = editorial);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.editorialService.updateeditorial(this.editorial)
    .subscribe(() => this.goBack())
  }
}