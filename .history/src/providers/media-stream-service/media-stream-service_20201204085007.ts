import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Station } from '../../app/globals/station';
import { Media } from '@ionic-native/media';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Platform } from 'ionic-angular';
/*
  Generated class for the MediaStreamServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaStreamServiceProvider {
  private station: Station = null;
  private mediaFile: any;
  private notPlaying: boolean = false;
  public streamPause: BehaviorSubject<boolean> = new BehaviorSubject(this.notPlaying);

  private uSubscriptions: Subscription;
  private httpSubscriptions: Subscription;

  private timeout = 0;

  constructor(private http: HttpClient, private media: Media, private platform: Platform) {
    this.httpSubscriptions = new Subscription();
    this.uSubscriptions = new Subscription();
    this.streamPause.next(this.notPlaying);
    this.checkPlatform();
  }

  private checkPlatform() {
    if (this.platform.is('core') || this.platform.is('mobileweb')) {
      delete this.media;
      this.mediaFile = new Audio();

      this.checkMediaFile = () => {
        this.mediaFile.pause();
        this.mediaFile.currentTime = 0;
      };

      this.setStreamSource = (streamUrl: string) => {
        this.mediaFile.src = streamUrl;
      };
    }
  }
  pauseStream() {
    this.mediaFile.pause();
    this.notPlaying = true;
    this.streamPause.next(this.notPlaying);
  }
  resumeStream() {
    this.notPlaying = false;
    this.streamPause.next(this.notPlaying);
    this.mediaFile.play();
  }

  getActiveStation(): Station {
    return this.station;
  }

  changeStreamSource(station: Station) {
    this.station = station;
    this.checkMediaFile();
    this.updateStreamMeta();
    this.notPlaying = false;
    this.streamPause.next(this.notPlaying);
  }

  private checkMediaFile() {
    if (this.mediaFile != undefined) {
      this.mediaFile.stop();
      this.mediaFile.release();
      this.mediaFile = null;
    }
  }
  private updateStreamMeta() {
    this.setStreamSource(this.station.getMP3PlaybackURL());
    this.die();
    this.uSubscriptions.add(this.httpSubscriptions);
    this.mediaFile.play();
  }

  private setStreamSource(streamUrl: string) {
    this.mediaFile = this.media.create(streamUrl);
  }

  private die() {
    this.uSubscriptions.unsubscribe();
    clearTimeout(this.timeout || 1);
  }
}
