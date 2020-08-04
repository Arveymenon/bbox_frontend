import { NgModule, ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
// import { BackgroundMode } from '@ionic-native/background-mode/ngx';

import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Contacts } from '@ionic-native/contacts/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ZBar } from '@ionic-native/zbar/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { UserService } from './shareduser/user.service';
import { GroupService } from './shared/group.service';
import { GroupDetailsPageModule } from './group-details/group-details.module';
import { SharedModule } from './shared/shared.module';
// import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Globalization } from '@ionic-native/globalization/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { IonicGestureConfig } from "../utils/IonicGestureConfig";
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
import { Autostart } from '@ionic-native/autostart/ngx';
import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Network } from '@ionic-native/network/ngx';
import { BranchIo } from '@ionic-native/branch-io/ngx';
// import { Dialogs } from '@ionic-native/dialogs/ngx';
// import * as Hammer from '_hammerjs';

const config: SocketIoConfig = { url: 'http://198.12.92.202:5001', options: {} };
// const config: SocketIoConfig = { url: 'http://localhost:5001', options: {} };
 
export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['198.12.92.202:5000']
  }
}

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/languages/','.json');
}
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    SharedModule,
    GroupDetailsPageModule,        
    SocketIoModule.forRoot(config),
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage],
      }
    }),
    NgxLinkifyjsModule.forRoot()
  ],
  providers: [
    StatusBar,
    // Facebook,
    Keyboard,
    GooglePlus,
    SplashScreen,
    UserService,
    GroupService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AndroidPermissions,
    Diagnostic,
    File,
    ImagePicker,
    // Dialogs,
    Camera,
    FileTransfer,
    WebView,
    FilePath,
    Contacts,
    SMS,
    Keyboard,
    SocialSharing,
    // BarcodeScanner,
    FileChooser,
    OneSignal,
    Globalization,
    ScreenOrientation,
    Autostart,
    Clipboard,
    // HammerGestureConfig, 
    FileOpener,
    Crop,
    NativeStorage,
    NativeRingtones,
    NativeAudio,
    ZBar,
    Network,
    BranchIo,
    { provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig }
    // BackgroundMode
  ],
  bootstrap: [AppComponent],
  exports: [
    SharedModule
  ]
})
export class AppModule {}