import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss'],
})
export class TwitterPostComponent implements OnInit {
  @Input() public baseHref: string = 'https://johnny1864.github.io/portfolio/';
  @Input() public hashTags: string[] = [
    'Johnny',
    'JavaScript',
    'TypeScript',
    'Angular',
  ];

  constructor(private title: Title) {}

  ngOnInit(): void {}

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent('Check this out');
    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(
      hashTags
    )}&related=johnny1864&url=${route}`;
  }
}
