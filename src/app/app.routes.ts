import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PublishItemComponent } from './pages/publish-item/publish-item.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';

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
    },
    {
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'publish',
        component:PublishItemComponent
    },
    {
        path:'p/:id',
        component:ItemDetailsComponent
    }
];
