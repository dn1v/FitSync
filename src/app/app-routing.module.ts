import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './features/signup/signup.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NetworkComponent } from './features/network/network.component';
import { RequestsComponent } from './features/network/requests/requests.component';
import { GroupsComponent } from './features/network/groups/groups.component';
import { ConnectionsComponent } from './features/network/connections/connections.component';
import { ConnectionDetailsComponent } from './features/network/connections/connection-details/connection-details.component';
import { GroupDetailsComponent } from './features/network/groups/group/group-details/group-details.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'network', component: NetworkComponent, canActivate: [AuthGuard], children: [
            { path: 'requests', component: RequestsComponent },
            { path: 'groups', component: GroupsComponent },
            { path: 'groups/:id', component: GroupDetailsComponent },
            { path: 'connections', component: ConnectionsComponent },
            { path: 'connections/:id', component: ConnectionDetailsComponent}
        ]
    },
    { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
