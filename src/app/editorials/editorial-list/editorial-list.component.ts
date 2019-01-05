import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Editorial } from 'app/domain/editorial';
import { EditorialService } from 'app/services/editorial.service';
import { OrganizationService } from 'app/services/organization.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

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

  removeDisclaimer(): void {
    let disclaimer = document.getElementById("disclaimerMsg");
    console.log(this.router.url);
    if (disclaimer && this.router.url != "/") {
      disclaimer.remove();
    }
  }
}

