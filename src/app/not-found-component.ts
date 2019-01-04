import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found-component',
  templateUrl: './not-found-component.html',
  styleUrls: ['./not-found-component.css']
})
export class NotFoundComponent implements OnInit {
  //TODO: make 404 handling more robust
  @Input() notFoundItem: string = "resource";
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
