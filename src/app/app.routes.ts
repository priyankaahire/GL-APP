import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneralLedgerListComponent } from './components/general-ledger-list/general-ledger-list.component';
import { GeneralLedgerCreateComponent } from './components/general-ledger-create/general-ledger-create.component';

export const routes: Routes = [
    { path:'recon', component: GeneralLedgerListComponent,},
    { path:'create-recon', component: GeneralLedgerCreateComponent},
    { path: '', redirectTo: '/recon', pathMatch: 'full' },
    { path: '**', redirectTo: '/recon' } // Handle any other routes
    
    
];
