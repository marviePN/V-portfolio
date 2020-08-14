import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedInformationComponent } from './related-information.component';

describe('RelatedInformationComponent', () => {
  let component: RelatedInformationComponent;
  let fixture: ComponentFixture<RelatedInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
