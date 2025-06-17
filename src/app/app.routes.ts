import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { WalletComponent } from './component/wallet/wallet.component';
import { MybookingComponent } from './component/mybooking/mybooking.component';
import { FaqsComponent } from './component/faqs/faqs.component';
import { ContactSupportComponent } from './component/contact-support/contact-support.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { CancellationPolicyComponent } from './component/cancellation-policy/cancellation-policy.component';
import { HelpCenterComponent } from './component/help-center/help-center.component';

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
    },
    {
        path: "faqs",
        component: FaqsComponent
    },
    {
        path: "contactsupport",
        component: ContactSupportComponent
    },
    {
        path: "privacypolicy",
        component: PrivacyPolicyComponent
    },
    {
        path: "cancellationpolicy",
        component: CancellationPolicyComponent
    },
    {
        path: "helpcenter",
        component: HelpCenterComponent
    }
];
