import { Component, OnInit } from '@angular/core';
import {BlogpostService} from '../blogpost.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {
  blogs: Blogpost;
  error: {};
  constructor(private blogpostservice:BlogpostService) { }

  ngOnInit() {
    this.blogpostservice.getFeaturedBlogs().subscribe(
      (data:Blogpost) => this.blogs = data,
      error => this.error = error
    );
  }

}
