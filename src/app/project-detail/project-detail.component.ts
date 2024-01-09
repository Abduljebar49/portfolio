import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService, RelatedProject } from '../app.service';
import { Project } from 'src/models/project';
import { ActivatedRoute, Router } from '@angular/router';
// import { ScrollDispatcher } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  challengeHtml: string | undefined;
  id: number | undefined;
  relatedProjects: RelatedProject[] = [];

  scrollToTop() {
    // const body = document.getElementById('scrollContainer')!;
    // this.scrollDispatcher.scrolled().subscribe(() => {
    //   body.scrollTop = 0;
    // });
  }
  constructor(
    private service: AppService, 
    activatedRoute: ActivatedRoute,
    private router:Router,
    // private scrollDispatcher: ScrollDispatcher
    ) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.fetchProject(this.id!);
    this.service.getRelatedProjects().subscribe((res)=>{
      this.relatedProjects = res;
    });
  }

  fetchProject(id:number){
    this.service.getProjectDetail(id).subscribe((res) => {
      this.project = res;
      this.challengeHtml = this.project.challenges;
    });
  }

  async open(id:number){
    this.scrollToTop()
    this.fetchProject(id)
    this.router.navigate([`/projects/${id}`]);
  }
}
