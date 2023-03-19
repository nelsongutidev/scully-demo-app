import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project.component.html',
  styles: [],
})
export class ProjectComponent {
  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}
  repo$: Observable<any> | undefined;

  async ngOnInit(): Promise<void> {
    const currentRoute = this.route.snapshot.params['name'];
    this.repo$ = this.githubService.getRepo(currentRoute);
  }
}
