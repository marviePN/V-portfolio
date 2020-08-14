import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPortfolioComponent } from './about-portfolio.component';

describe('AboutPortfolioComponent', () => {
  let component: AboutPortfolioComponent;
  let fixture: ComponentFixture<AboutPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
