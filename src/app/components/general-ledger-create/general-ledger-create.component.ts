import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface ReconFequency {
  id: string;
  value: string;
}
@Component({
  selector: 'app-general-ledger-create',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './general-ledger-create.component.html',
  styleUrl: './general-ledger-create.component.scss'
})
export class GeneralLedgerCreateComponent implements OnInit {
  frqOption: string;
  frqOptions: ReconFequency[] = [
    { id: 'option1', value: 'Option 1' },
    { id: 'option2', value: 'Option 2' },
    { id: 'option3', value: 'Option 3' }
  ];

  form:FormGroup;
  constructor(private fb: FormBuilder) {
    this.frqOption = ''
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]    })
  }
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]    })
  }
  onSubmit(): void {
    if (this.form?.valid) {
      console.log('Form Submitted', this.form.value);
    }
  }

}
