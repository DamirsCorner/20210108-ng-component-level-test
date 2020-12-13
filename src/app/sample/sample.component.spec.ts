import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleService } from '../sample.service';

import { SampleComponent } from './sample.component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
class TestSampleComponent extends SampleComponent {
  constructor(sampleService: SampleService) {
    super(sampleService);
  }
}

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  let mockService: jasmine.SpyObj<SampleService>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj<SampleService>('SampleService', [
      'sampleMethod',
    ]);

    await TestBed.configureTestingModule({
      declarations: [SampleComponent],
      providers: [{ provide: SampleService, useValue: mockService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not use provided mock service', () => {
    component.invokeSample();

    expect(mockService.sampleMethod).not.toHaveBeenCalled();
  });
});

describe('TestSampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  let mockService: jasmine.SpyObj<SampleService>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj<SampleService>('SampleService', [
      'sampleMethod',
    ]);

    await TestBed.configureTestingModule({
      declarations: [TestSampleComponent],
      providers: [{ provide: SampleService, useValue: mockService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use provided mock service', () => {
    component.invokeSample();

    expect(mockService.sampleMethod).toHaveBeenCalled();
  });
});
