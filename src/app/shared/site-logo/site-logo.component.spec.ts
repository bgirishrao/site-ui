import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLogoComponent } from './site-logo.component';

describe('SiteLogoComponent', () => {
  let component: SiteLogoComponent;
  let fixture: ComponentFixture<SiteLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
