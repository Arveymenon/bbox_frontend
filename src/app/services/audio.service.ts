import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

interface Sound {
  key: string;
  asset: string;
  isNative: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private sounds: Sound[] = [];
  private audioPlayer: HTMLAudioElement = new Audio();
  private forceWebAudio: boolean = true;

  constructor(private platform: Platform, private nativeAudio: NativeAudio){
    console.log('INITED AUDIO');
  }

  preload(key: string, asset: string): void {

    if(this.platform.is('cordova')){
      console.log('ENTERED AUDIO', key)
      this.nativeAudio.preloadComplex(key, asset, 1, 1, 0)
        .then(loaded => {
          console.log('KEY', key);
          console.log('ASSET', asset);
          console.log('LOADED', loaded);
        })
        .catch(err => console.log('ASSET ERROR', err))

        let soundToPlay = this.sounds.find((sound) => {
          return sound.key === key;
        });

        console.log('Sound To Play', soundToPlay);

        if(!soundToPlay){
          this.sounds.push({
            key: key,
            asset: asset,
            isNative: true
          });
        }

    } else {
      console.log("ADDED - EXECUTED")
      let audio = new Audio();
      audio.src = asset;

      let soundToPlay = this.sounds.find((sound) => {
        return sound.key === key;
      });

      if(!soundToPlay){
        this.sounds.push({
          key: key,
          asset: asset,
          isNative: false
        });
      }

    }
    console.log('SOUNDS', this.sounds);

  }

  play(key: string): void {

    let soundToPlay = this.sounds.find((sound) => {
      return sound.key === key;
    });

    if(soundToPlay.isNative){

      this.nativeAudio.play(soundToPlay.key).then((res) => {
        console.log('PLAYED', res);
      }, (err) => {
        console.log('PLAYING Error', err);
      });

    } else {

      this.audioPlayer.src = soundToPlay.asset;
      this.audioPlayer.play();

    }

  }

  playOnLoop(key: string): void{
    let soundToPlay = this.sounds.find((sound) => {
      return sound.key === key;
    });

    if(soundToPlay.isNative){

      this.nativeAudio.loop(soundToPlay.key).then((res) => {
        console.log('PLAYED', res);
      }, (err) => {
        console.log('PLAYING Error', err);
      });

    } else {

      this.audioPlayer.src = soundToPlay.asset;
      this.audioPlayer.play();

    }
  }

  stop(key: string): void{
    let soundToPlay = this.sounds.find((sound) => {
      return sound.key === key;
    });

    if(soundToPlay.isNative){

      this.nativeAudio.stop(soundToPlay.key).then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });

    } else {

      this.audioPlayer.src = soundToPlay.asset;
      this.audioPlayer.pause();

    }
  }

}