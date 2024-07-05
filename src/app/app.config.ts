import { RouterModule, provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { routes } from './app.routes';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { provideHttpClient } from '@angular/common/http';
export const appConfig = [
  provideRouter(routes),
  provideAnimations(),
  provideHttpClient(),
  importProvidersFrom( FormsModule, RouterModule, MatIconModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule,
     MatToolbarModule, MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatPaginatorModule)
];
