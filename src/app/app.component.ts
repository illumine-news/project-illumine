import { Component } from '@angular/core';
import { ResponsiveService } from './services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ResponsiveService]
})
export class AppComponent {
  title: string = '';
  isMobile: Boolean;

  constructor(private responsiveService: ResponsiveService) {}

  getPathForLogo(): string {
    this.isMobile = this.responsiveService.mobileCheckRegEx();
    
    let path;

    if (this.isMobile) {
      path = "assets/img/illumine_logo.svg";
    }
    else
    {
      path = "assets/img/illumine_logo.svg";
    }

    return path;
  }
}
