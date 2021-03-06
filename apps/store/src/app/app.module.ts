import { StoreUtilFormattersModule } from '@bg-hoard/store/util-formatters';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormatRatingPipe } from './format-rating.pipe';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [AppComponent, FormatRatingPipe],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'game/:id',
          loadChildren: () =>
            import('@bg-hoard/store/feature-game-detail').then(
              (module) => module.StoreFeatureGameDetailModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    MatCardModule,
    StoreUiSharedModule,
    StoreUtilFormattersModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
