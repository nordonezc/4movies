import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CategoriesComponent } from './pages/categories/categories.component';

import { SliderComponent } from './components/slider/slider.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { ImageEmbedComponent } from './components/image-embed/image-embed.component';
import { DescriptionItemComponent } from './components/description-item/description-item.component';

import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    CategoriesComponent,
    SliderComponent,
    BannerComponent,
    CardItemComponent,
    DetailComponent,
    VideoEmbedComponent,
    DescriptionItemComponent,
    ImageEmbedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
