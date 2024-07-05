import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLedgerCreateComponent } from './general-ledger-create.component';

describe('GeneralLedgerCreateComponent', () => {
  let component: GeneralLedgerCreateComponent;
  let fixture: ComponentFixture<GeneralLedgerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralLedgerCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralLedgerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
