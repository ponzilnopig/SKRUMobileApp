import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtPage } from './art';

@NgModule({
  declarations: [
    ArtPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtPage),
  ],
  exports: [
    ArtPage
  ]
})
export class ArtPageModule {}
