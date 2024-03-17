import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './features/signup/signup.component';
import { LoginComponent } from './features/login/login.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AthleteSignupComponent } from './features/signup/athlete-signup/athlete-signup.component';
import { CoachSignupComponent } from './features/signup/coach-signup/coach-signup.component';
import { PopUpComponent } from './shared/components/pop-up/pop-up.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { HomeComponent } from './features/home/home.component';
import { AuthService } from './core/services/auth/auth.service';
import { AuthInterceptorService } from './core/interceptors/auth.interceptor';
import { FooterComponent } from './core/components/footer/footer.component';
import { PostComponent } from './shared/components/posts/post/post.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { CreatePostComponent } from './shared/components/posts/create-post/create-post.component';
import { CreateAndEditPostPopupComponent } from './shared/components/posts/create-and-edit-post-popup/create-and-edit-post-popup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NetworkComponent } from './features/network/network.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { RequestsComponent } from './features/network/requests/requests.component';
import { ConnectionsComponent } from './features/network/connections/connections.component';
import { GroupsComponent } from './features/network/groups/groups.component';
import { RequestFormComponent } from './features/network/requests/request-form/request-form.component';
import { RequestComponent } from './features/network/requests/request/request.component';
import { RequestPopupComponent } from './features/network/requests/request-popup/request-popup.component';

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LoginComponent,
        NavbarComponent,
        AthleteSignupComponent,
        CoachSignupComponent,
        PopUpComponent,
        LoadingSpinnerComponent,
        HomeComponent,
        FooterComponent,
        PostComponent,
        PostsComponent,
        CreatePostComponent,
        CreateAndEditPostPopupComponent,
        NetworkComponent,
        SidebarComponent,
        RequestsComponent,
        ConnectionsComponent,
        GroupsComponent,
        RequestFormComponent,
        RequestComponent,
        RequestPopupComponent
    ],
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule { }
