import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { filter, map, Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styles: [],
})
export class BlogListComponent {
  constructor(private scully: ScullyRoutesService) {}
  posts$: Observable<ScullyRoute[]> = this.scully.allRoutes$.pipe(
    map((routes) => routes.filter((route) => route.route.startsWith('/blog/')))
  );
}
