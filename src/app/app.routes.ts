import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '', component: MainComponent },
    { path: 'main', component: MainComponent },
    { path: '**', component: MainComponent }
];
