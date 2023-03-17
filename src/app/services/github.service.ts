import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const GITHUB_URL = 'https://api.github.com/';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepos(username: string) {
    return this.http.get<[]>(`${GITHUB_URL}users/${username}/repos`);
  }
}
