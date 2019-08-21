import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HomeComponent } from '../component/home/home.component';
import { TripInquiryComponent } from '../component/trip-inquiry/trip-inquiry.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { AllCustomersListComponent } from '../component/all-customers-list/all-customers-list.component';
import { SingleCustomerComponent } from '../component/single-customer/single-customer.component';
import { PastTripsComponent } from '../component/past-trips/past-trips.component';
import { NotificationsComponent } from '../component/notifications/notifications.component';
import { AccountComponent } from '../component/account/account.component';
import { SingleTripComponent } from '../component/single-trip/single-trip.component';
import { InquiryFormComponent } from '../component/inquiry-form/inquiry-form.component';
import { PrefrencesComponent } from '../component/prefrences/prefrences.component';
import { CustomerBriefcaseComponent } from '../component/customer-briefcase/customer-briefcase.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        pathMatch: "full",
        redirectTo: 'dashboard'
      },
      {
        path: 'trip-inquiry',
        component: TripInquiryComponent
      },
      {
        path: 'all-customers-list',
        component: AllCustomersListComponent
      },
      {
        path: 'single-customer/:id',
        component: SingleCustomerComponent
      },
      {
        path: 'past-trips',
        component: PastTripsComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'single-trip/:tripId',
        component: SingleTripComponent
      },
      {
        path: 'inquiry-form',
        component: InquiryFormComponent
      },
      {
        path: 'prefrences',
        component: PrefrencesComponent
      },
      {
        path: 'customer-briefcase',
        component: CustomerBriefcaseComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    TripInquiryComponent,
    AllCustomersListComponent,
    SingleCustomerComponent,
    PastTripsComponent,
    NotificationsComponent,
    AccountComponent,
    SingleTripComponent,
    InquiryFormComponent,
    PrefrencesComponent,
    CustomerBriefcaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  exports: [
    RouterModule
  ]
})
export class LazyLoadModule { }
