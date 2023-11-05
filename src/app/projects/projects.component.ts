import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Project } from 'src/models/project';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit{
  projects:Project[] = [];
  categories:Category[] = [];
  constructor(private service:AppService){}

  ngOnInit(): void {
    this.getProjects();
    this.getCategories();
  }

  getCategories(){
    this.service.getCategories().subscribe((categories)=>{
      this.categories = categories;
    })
  }

  getProjects(){
    this.service.getProjects().subscribe((projects)=>{
      this.projects = projects;
      console.log("projects ;",projects)
    })
  }

}
