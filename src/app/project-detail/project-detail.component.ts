import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Project } from 'src/models/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined
  challengeHtml: string | undefined
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getProjectDetail(2).subscribe((res) => {
      this.project = res
      this.challengeHtml = this.project.challenges

      console.log(res)
    })
  }
}

