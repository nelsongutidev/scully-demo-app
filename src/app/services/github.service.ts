import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const GITHUB_URL = 'https://api.github.com/';
const USERNAME = 'nelsongutidev';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepos() {
    return this.http.get<[]>(`${GITHUB_URL}users/${USERNAME}/repos`);
  }

  getRepo(repo: string) {
    return this.http.get<any>(`${GITHUB_URL}repos/${USERNAME}/${repo}`);
  }
}
