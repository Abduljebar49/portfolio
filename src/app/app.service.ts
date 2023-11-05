import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { categories, projects } from 'src/db';
import { Category } from 'src/models/category';
import { Project } from 'src/models/project';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor() { }

  getProjects(){
    return of(this.projects);
  }

  getCategories(){
    return of(this.categories);
  }

  projects: Project[] =  projects;
  categories:Category[] = categories;
}
