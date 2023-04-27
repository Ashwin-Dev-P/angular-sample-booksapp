import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Http
import { HttpClientModule } from '@angular/common/http';

// Forms
import { FormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksComponentComponent } from './components/books-component/books-component.component';
import { BooksItemComponent } from './components/books-item/books-item.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';

const appRoutes: Routes = [
  { path: '', component: BooksComponentComponent },
  { path: 'about', component: AboutComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponentComponent,
    BooksItemComponent,
    AddBookComponent,
    AboutComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
