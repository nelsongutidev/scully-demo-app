import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from 'src/app/services/github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-list.component.html',
  styles: [],
})
export class ProjectsListComponent {
  constructor(private readonly githubService: GithubService) {}
  githubRepos$: Observable<any[]> =
    this.githubService.getRepos('nelsongutidev');

  ngOnInit(): void {}
}
