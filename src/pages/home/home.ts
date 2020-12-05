import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Station } from '../../app/globals/station';
import { station } from '../../app/globals/constants';
import { MediaStreamServiceProvider } from '../../providers/media-stream-service/media-stream-service';
import { IDFAService } from '../../services/idfa';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  public station: Station = station;
  constructor(
    public navCtrl: NavController,
    private mediaStreamClient: MediaStreamServiceProvider,
    private idfaService: IDFAService
  ) {}

  ngOnInit() {
    this.idfaService.getInfo().then((info) => {
      if (info.aaid) {
        this.station.setGaid(info.aaid);
      }
      if (info.idfa) {
        this.station.setIdfa(info.idfa);
      }
    });
  }

  _streamInitialized: boolean = false;
  _streamPaused: boolean = true;

  streamStation() {
    if (this._streamInitialized) {
      if (this._streamPaused != true) {
        this._streamPaused = true;
        this.mediaStreamClient.pauseStream();
      } else {
        this._streamPaused = false;
        this.mediaStreamClient.resumeStream();
      }
    } else {
      this._streamInitialized = true;
      this._streamPaused = false;
      this.mediaStreamClient.changeStreamSource(this.station);
    }
  }
}
