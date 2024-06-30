import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'marketplace',
        component:MarketplaceComponent
    },
    {
        path:'marketplace/publish',
        component:HomeComponent
    },
    {
        path:'login',
        component:HomeComponent
    },
    {
        path:'register',
        component:HomeComponent
    }
];
