import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Editorial } from 'app/domain/editorial';
import { EditorialService } from 'app/services/editorial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editorial-list',
  templateUrl: './editorial-list.component.html',
  styleUrls: ['./editorial-list.component.css']
})

export class EditorialListComponent implements OnInit {
  
  editorials: Editorial[];

  constructor(private editorialService: EditorialService,
    private router: Router) { }

  ngOnInit() {
    this.getEditorials();
    this.removeDisclaimer();
  }

  getEditorials(): void {
    this.editorialService.geteditorials()
      .subscribe(retrievedEditorials => this.editorials = retrievedEditorials);
  }

  isDashboard(): Boolean {
    let dashboard = document.getElementById("dashboardIdentifier");
    if (dashboard) {
      return true;
    }
    else
    {
      return false;
    }
  }

  //TODO: find a better way to prevent the disclaimer from overlapping
  //      the editorials element
  removeDisclaimer(): void {
    let disclaimer = document.getElementById("disclaimerMsg");
    if (disclaimer && this.router.url != "/") {
      disclaimer.remove();
    }
  }
}

