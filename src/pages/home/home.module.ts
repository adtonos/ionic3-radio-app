import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { HttpClientModule } from '@angular/common/http';
import { Media } from '@ionic-native/media';
import { MediaStreamServiceProvider } from '../../providers/media-stream-service/media-stream-service';
import { IDFAService } from '../../services/idfa';

@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage), HttpClientModule],
  providers: [Media, MediaStreamServiceProvider, IDFAService],
})
export class HomePageModule {}
