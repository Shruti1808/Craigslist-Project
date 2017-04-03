import { Component, Output, EventEmitter } from '@angular/core';
import { Job } from '../job.model';


@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})

export class NewJobComponent {
  @Output() newJobSender = new EventEmitter();

  submitForm(name: string, description: string, address: string, duties: string, qualifications: string) {
    var dutiesArray = duties.split(",");
    var qualificationsArray = qualifications.split(",");

    var newJobToAdd: Job = new Job(name, description, address, dutiesArray, qualificationsArray);
    this.newJobSender.emit(newJobToAdd);
  }
}
