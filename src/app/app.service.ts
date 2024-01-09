import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { angularProjects, categories, projects } from 'src/db';
import { Category } from 'src/models/category';
import { Project } from 'src/models/project';
export interface RelatedProject{
  profile:string;
  id:number;
}
@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor() { }

  getProjects(){
    return of(this.projects);
  }

  getProjectDetail(id:number):Observable<Project>{
    return of(projects.filter((data)=>data.id == id)[0])
  }

  getRelatedProjects():Observable<RelatedProject[]>{
    const res:RelatedProject[] = projects;
    return of(res)
  }

  getCategories(){
    return of(this.categories);
  }

  projects: Project[] =  projects;
  categories:Category[] = categories;
  angularProjects:Project[] = angularProjects;
}
