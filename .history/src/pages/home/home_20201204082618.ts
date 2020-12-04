import { Component, AfterViewInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Station } from '../../app/globals/station';
import { station } from '../../app/globals/constants';
import { MediaStreamServiceProvider } from '../../providers/media-stream-service/media-stream-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public station: Station = station;
  constructor(public navCtrl: NavController, private mediaStreamClient: MediaStreamServiceProvider) {}

  _streamInitialized: boolean = false;
  _streamPaused: boolean;

  streamStation() {
    if (this._streamInitialized) {
      if (this._streamPaused != true) {
        this.mediaStreamClient.pauseStream();
      } else {
        this.mediaStreamClient.resumeStream();
      }
    } else {
      this._streamInitialized = true;
      this.mediaStreamClient.changeStreamSource(this.station);
    }
  }
}
