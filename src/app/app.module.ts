import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminService } from './admin/admin.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductManagementComponent } from './admin/product-management/product-management.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogService } from './catalog/catalog.service';
import { ProductCardComponent } from './catalog/productCard/productCard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    NavbarComponent,
    LoginComponent,
    CatalogComponent,
    ProductCardComponent,
    ProductManagementComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CatalogService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
