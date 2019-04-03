import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {

  title = 'Blogs';
  blogs: Blogpost;
  error: {};
  constructor(
    private titleService: Title,
    private blogpostService: BlogpostService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.blogpostService.getFeaturedBlogs().subscribe(
      (data: Blogpost) => this.blogs = data,
      error => this.error = error
    );
  }
}
