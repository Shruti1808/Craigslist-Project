import { Component } from '@angular/core';
import { Job } from '../job.model';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent  {
  jobList: Job[] = [
    new Job("Senior UI/UX Developer", "Are you passionate about front-end development, love to explore new technologies, and look at solutions from a user's perspective? Do you have the chops to take our front-end development team to the next level?", "123 First Street Portland Oregon", ["You will be responsible for creating well-written, efficient code using technologies such as Angular/Backbone/React, LESS/SASS, JavaScript, Semantic UI/Material, Flexbox/Grid, HTML5 and a host of other frameworks and development tools.", "You will also work closely with our design and back-end development teams to hone our best practices and define our technology stack for future products."], ["Building cross-browser, responsive, and scalable HTML & CSS", "CSS pre/post-processors such as LESS/SASS, build systems, module loaders, and dependency management", "SOLID JavaScript, DOM and HTML5 experience"]),

    new Job("Software Developer 042", "Come be a member of the number one company in pharmacy software development, Integra. We are growing and we need your expertise! Check out our website at www.integragroup.com.", "7897 Main Street Anacortes Washington", ["Our developers work within their product team to perform feature analysis, requirements gathering, design, implementation and maintenance of C#, n-tier, enterprise applications.", "Our teams utilize Scrum, conduct design and code reviews, and ensure/validate product quality."], ["C#, .NET, WinForms or WPF, web services, error handling and recover.", "Ability to design and implement application routines utilizing OOD/OOP principles.", "Working knowledge in SQL Server 2008/2012 - TSQL, stored procedures, views, functions."])
  ];

  addJob(newJobFromChild: Job) {
    this.jobList.push(newJobFromChild);
  }


}
