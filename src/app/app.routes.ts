import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { WalletComponent } from './component/wallet/wallet.component';
import { MybookingComponent } from './component/mybooking/mybooking.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "wallet",
        component: WalletComponent
    },
    {
        path: "mybookings",
        component: MybookingComponent
    }
];
