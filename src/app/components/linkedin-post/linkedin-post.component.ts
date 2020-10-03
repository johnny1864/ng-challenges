import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrls: ['./linkedin-post.component.scss'],
})
export class LinkedinPostComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  public get linkedinMessage() {
    const base = 'https://www.linkedin.com/shareArticle?mini=true';
    const currentSite = `&url=https://johnny1864.github.io/${this.router.url}`;

    return `${base}${currentSite}`;
  }
}
