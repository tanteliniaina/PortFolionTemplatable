import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AProposComponent } from './a-propos/a-propos.component';
import { SharepointComponent } from './sharepoint/sharepoint.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { Inform3Component } from './inform3/inform3.component';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';
import { ChatgptComponent } from './chatgpt/chatgpt.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    AProposComponent,
    SharepointComponent,
    EcommerceComponent,
    Inform3Component,
    ProjectmanagementComponent,
    ChatgptComponent,
    ProductsComponent
  ],
  imports: [
    MatTabsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '/', component: AProposComponent},
      {path: 'apropos', component: AProposComponent},
      {path: 'sharepoint', component: SharepointComponent},
      {path: 'ecommerce', component: EcommerceComponent},
      {path: 'infor', component: Inform3Component},
      {path: 'pmanagement', component: ProjectmanagementComponent},
      {path: 'bot', component: ChatgptComponent},
      {path: 'products', component: ProductsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
