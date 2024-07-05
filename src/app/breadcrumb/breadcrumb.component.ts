import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, NavigationEnd, RouterModule, RouterLinkActive } from '@angular/router';
import { BreadcrumbService } from '../shared/bredcrumb.servcie';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: any[] = [];
  currentRoute: string = '';
  constructor(private _breadcrumbService: BreadcrumbService, private _router: Router) {}
  ngOnInit() {
    this._breadcrumbService.setBreadcrumbs([
      { label: 'Home', route: '/recon' }
    ]);
    this._breadcrumbService.getBreadcrumbs().subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
      // Track the current route
      this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }


}
