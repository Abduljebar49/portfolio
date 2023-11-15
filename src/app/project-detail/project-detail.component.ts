import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Project } from 'src/models/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined
  challengeHtml: string | undefined
  id:number | undefined
  constructor(private service: AppService,activatedRoute:ActivatedRoute) {
    console.log("id : ",activatedRoute.snapshot.params['id'])
    this.id = activatedRoute.snapshot.params['id']
   }

  ngOnInit(): void {
    this.service.getProjectDetail(this.id!).subscribe((res) => {
      this.project = res
      this.challengeHtml = this.project.challenges

      console.log(res)
    })
  }
}

