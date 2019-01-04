import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Editorial } from 'app/domain/editorial';
import { EditorialService } from 'app/services/editorial.service';
import { OrganizationService } from 'app/services/organization.service';

@Component({
  selector: 'app-editorial-list',
  templateUrl: './editorial-list.component.html',
  styleUrls: ['./editorial-list.component.css']
})

export class EditorialListComponent implements OnInit {
  
  editorials: Editorial[];

  constructor(private editorialService: EditorialService,
    private organizationService: OrganizationService) { }

  ngOnInit() {
    this.getEditorials();
  }

  getEditorials(): void {
    this.editorialService.geteditorials()
      .subscribe(retrievedEditorials => this.editorials = retrievedEditorials);
  }
}

