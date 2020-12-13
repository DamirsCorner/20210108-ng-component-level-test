import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  providers: [SampleService],
})
export class SampleComponent {
  constructor(private sampleService: SampleService) {}

  public invokeSample() {
    this.sampleService.sampleMethod();
  }
}
