import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'categories', component: CategoriesComponent},
  {path : '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
