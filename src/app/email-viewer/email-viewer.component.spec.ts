import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailViewerComponent } from './email-viewer.component';

describe('EmailViewerComponent', () => {
  let component: EmailViewerComponent;
  let fixture: ComponentFixture<EmailViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
