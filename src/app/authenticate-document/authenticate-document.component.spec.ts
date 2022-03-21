import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticateDocumentComponent } from './authenticate-document.component';

describe('AuthenticateDocumentComponent', () => {
  let component: AuthenticateDocumentComponent;
  let fixture: ComponentFixture<AuthenticateDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticateDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticateDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
