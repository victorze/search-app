import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-user.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  user: User;

  repos: Repo[];

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit() {
  }
    
  getUser(username: string): void {
    this.githubService.getUser(username)
      .subscribe((user: User) => this.user = { ...user });
  }

  getRepos(username: string): void {
    this.githubService.getRepos(username)
    .subscribe((repos: Repo[]) => this.repos = repos)
  }

  search(username: string) {
    this.getUser(username);
    this.getRepos(username);
  }
}
