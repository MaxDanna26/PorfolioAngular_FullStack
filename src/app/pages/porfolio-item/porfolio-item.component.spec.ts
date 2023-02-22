import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioItemComponent } from './porfolio-item.component';

describe('PorfolioItemComponent', () => {
  let component: PorfolioItemComponent;
  let fixture: ComponentFixture<PorfolioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorfolioItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorfolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
