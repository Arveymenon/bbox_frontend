(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~group-chat-admin-group-chat-admin-module~send-message-send-message-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/group-chat-admin/group-chat-admin.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/group-chat-admin/group-chat-admin.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n              <ion-icon class=\"back-button\" slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <img *ngIf=\"loadingChats == false\" class=\"user-icon\" src=\"http://198.12.92.202/public/uploads/{{ img_src }}\" onError=\"this.src='assets/images/user.png';\" style=\"position: absolute !important;\">\n        <ion-title *ngIf=\"this.adminidval == this.group_admin_id\" (click)=\"detailsPage()\" style=\"padding-inline-start: 40px;\">\n            {{ groupService.selectedGroup }}  \n        </ion-title>\n        <ion-title *ngIf=\"this.adminidval != this.group_admin_id\" style=\"padding-inline-start: 40px;\">\n          {{ groupService.selectedGroup }}  \n        </ion-title>\n        <ion-buttons slot=\"end\" size-xs=\"small\">\n          <!--  -->\n          <ion-button (click)=\"addmember( idval )\" *ngIf=\"this.adminidval == this.group_admin_id\">\n              <ion-icon slot=\"icon-only\"  name=\"md-add\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"createAudioVideoChat(0)\">  \n              <ion-icon slot=\"icon-only\" name=\"md-call\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"createAudioVideoChat(1)\">\n              <ion-icon slot=\"icon-only\" name=\"md-videocam\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"this.adminidval == this.group_admin_id\">\n    <ion-fab-button (click)=\"goToSendMessagePage()\">\n      <ion-icon name=\"md-create\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div class=\"main\">\n  <!-- Date or Time header -->\n  <!-- To change the text in the hr tag change 'data-content' attribute -->\n  <!-- <hr class=\"hr-text\" data-content=\"Yesterday\"> -->\n\n\n  <!-- Chat Bubbles -->\n  \n  <!-- Received Bubble -->\n\n  <!-- Bubble 1 -->\n  <!-- <form [formGroup]=\"chatArray\">\n    <div class=\"bubble-container\" (onload)=\"addReplyControl(1)\">\n        <div class=\"message-received-flex-box\" id=\"1-container\">\n            <div class=\"img-container-received-flex\">\n                <img class=\"sender-photo-flex\" src=\"assets/images/user.png\">\n            </div>\n\n            <div class=\"message-bubble-received-flex-container\">\n                <div class=\"message-bubble-received-flex\" id=\"1-bubble\">  \n                <p class=\"sender-name\">Emma</p>\n                <p class=\"received-message-flex\">The quick, brown fox jumps over a \n                    lazy dog. DJs flock by when MTV \n                    ax quiz prog. Junk MTV quiz</p>\n                </div>\n                <p class=\"message-time\">\n                13:05\n                </p>\n            </div>\n\n            <div class=\"reply-button-container-flex\">\n                <ion-button fill=\"clear\" color=\"dark\" id=\"1-reply\" (click)=\"replyOnClick($event)\">\n                    <ion-icon slot=\"icon-only\" name=\"ios-undo\" class=\"reply-button\"></ion-icon>\n                </ion-button>\n            </div>      \n        </div>\n\n        <div class=\"reply-text-area hidden\" id=\"1-textarea\">\n            <img class=\"user-photo\" src=\"assets/images/user.png\">\n            <ion-textarea [formControlName]=\"1\" class=\"rounded textarea\" placeholder=\"Enter Message...\" rows=\"1\"></ion-textarea>\n            <div class=\"buttons-container\">\n                <ion-button fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-attach\" color=\"medium\"></ion-icon>\n                </ion-button>\n                \n                <ion-button fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-camera\" color=\"medium\"></ion-icon>\n                </ion-button>\n                \n                <ion-button fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-send\" color=\"primary\"></ion-icon>\n                </ion-button>\n            </div>\n        </div>\n    </div>\n</form> -->\n  \n  <!-- Bubble 2 -->\n  <!-- <div class=\"bubble-container\">\n      <div class=\"message-received-flex-box\" id=\"2-container\">\n          <div class=\"img-container-received-flex\">\n              <img class=\"sender-photo-flex\" src=\"assets/images/user.png\">\n          </div>\n\n          <div class=\"message-bubble-received-flex-container\">\n            <div class=\"message-bubble-received-flex\" id=\"2-bubble\">  \n              <p class=\"sender-name\">Emma</p>\n              <p class=\"received-message-flex\">The quick, brown fox jumps over a \n                  lazy dog. DJs flock by when MTV \n                  ax quiz prog. Junk MTV quiz</p>\n            </div>\n            <p class=\"message-time\">\n              13:05\n            </p>\n          </div>\n\n          <div class=\"reply-button-container-flex\">\n              <ion-button fill=\"clear\" color=\"dark\" id=\"2-reply\" (click)=\"replyOnClick($event)\">\n                  <ion-icon slot=\"icon-only\" name=\"ios-undo\" class=\"reply-button\"></ion-icon>\n              </ion-button>\n          </div>      \n      </div>\n\n      <div class=\"reply-text-area hidden\" id=\"2-textarea\">\n          <img class=\"user-photo\" src=\"assets/images/user.png\">\n          <ion-textarea class=\"rounded textarea\" placeholder=\"Enter Message...\" rows=\"1\"></ion-textarea>\n          <div class=\"buttons-container\">\n              <ion-button fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"md-attach\" color=\"medium\"></ion-icon>\n              </ion-button>\n              \n              <ion-button fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"md-camera\" color=\"medium\"></ion-icon>\n              </ion-button>\n              \n              <ion-button fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"md-send\" color=\"primary\"></ion-icon>\n              </ion-button>\n          </div>\n      </div>\n  </div> -->\n\n    <!-- Bubble 3\n    <div class=\"bubble-container\">\n        <div class=\"message-received-flex-box\" id=\"3-container\">\n            <div class=\"img-container-received-flex\">\n                <img class=\"sender-photo-flex\" src=\"assets/images/user.png\">\n            </div>\n  \n            <div class=\"message-bubble-received-flex-container\">\n              <div class=\"message-bubble-received-flex\" id=\"3-bubble\">  \n                <p class=\"sender-name\">Emma</p>\n                <p class=\"received-message-flex\">The quick, brown fox jumps over a \n                    lazy dog. DJs flock by when MTV \n                    ax quiz prog. Junk MTV quiz</p>\n              </div>\n              <p class=\"message-time\">\n                13:05\n              </p>\n            </div>\n  \n            <div class=\"reply-button-container-flex\">\n                <ion-button fill=\"clear\" color=\"dark\" id=\"3-reply\" (click)=\"replyOnClick($event)\">\n                    <ion-icon slot=\"icon-only\" name=\"ios-undo\" class=\"reply-button\"></ion-icon>\n                </ion-button>\n            </div>      \n        </div>\n  \n        <div class=\"reply-text-area hidden\" id=\"3-textarea\">\n            <img class=\"user-photo\" src=\"assets/images/user.png\">\n            <ion-textarea class=\"rounded textarea\" placeholder=\"Enter Message...\" rows=\"1\"></ion-textarea>\n            <div class=\"buttons-container\">\n                <ion-button fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-attach\" color=\"medium\"></ion-icon>\n                </ion-button>\n                \n                <ion-button fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-camera\" color=\"medium\"></ion-icon>\n                </ion-button>\n                \n                <ion-button fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-send\" color=\"primary\"></ion-icon>\n                </ion-button>\n            </div>\n        </div>\n    </div>\n  \n      <div class=\"message-sent-flex-box\" >\n          <div class=\"img-container-sent-flex\">\n              <img class=\"sender-photo-flex\" src=\"assets/images/user.png\">\n          </div>\n  \n          <div class=\"message-buble-sent-flex\">\n              <p class=\"sent-message-flex\">The quick, brown fox jumps over a \n                  lazy dog. DJs flock by when MTV \n                  ax quiz prog. Junk MTV quiz</p>\n          </div>\n\n      </div> -->\n\n      <!-- OLD CODE -->\n\n      <!-- Skeleton -->\n    <div class=\"skeleton\" *ngIf=\"loadingChats == true\">\n      <ion-list>\n          <ion-item lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </ion-avatar>\n              <ion-label>\n                <p style=\"height:40px; border-radius:5px\">\n                  <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                </p>\n              </ion-label>\n            </ion-item>\n\n          <ion-item lines=\"none\" style=\"display:flex; flex-direction:row-reverse\">\n            <ion-avatar slot=\"end\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <p style=\"height:40px; border-radius:5px;margin-left:40px\">\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <p style=\"height:40px; border-radius:5px\">\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\" style=\"display:flex; flex-direction:row-reverse\">\n            <ion-avatar slot=\"end\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <p style=\"height:40px; border-radius:5px;margin-left:40px\">\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </ion-avatar>\n              <ion-label>\n                <p style=\"height:40px; border-radius:5px\">\n                  <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                </p>\n              </ion-label>\n            </ion-item>\n\n          <ion-item lines=\"none\" style=\"display:flex; flex-direction:row-reverse\">\n            <ion-avatar slot=\"end\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <p style=\"height:40px; border-radius:5px;margin-left:40px\">\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <p style=\"height:40px; border-radius:5px\">\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\" style=\"display:flex; flex-direction:row-reverse\">\n            <ion-avatar slot=\"end\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <p style=\"height:40px; border-radius:5px;margin-left:40px\">\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n\n\n      </ion-list>\n    </div>\n    <!-- Skeleton End -->\n\n    <!-- Date or Time header -->\n    <!-- To change the text in the hr tag change 'data-content' attribute -->\n    <div class=\"visible\" *ngIf=\"loadingChats == false\">\n      \n    <!-- <hr class=\"hr-text\" data-content=\"Yesterday\"> -->\n\n    <form [formGroup]=\"chatArray\">\n    <!-- Sent Bubble -->\n        <div class=\"bubble-container\" *ngFor =\"let gp of groupService.groups; let i = index\"> \n\n\n          <div class=\"message-received-flex-box\" id=\"{{ gp._id }}-container\" \n            *ngIf = \"(findMatch(adminidval, gp.messageFor) && !gp.file && filtered == false)\n            || (findMatch(adminidval, gp.messageFor) && filtered == true && filtered_users.includes(gp.messageBy._id)  && !gp.file)\"\n            >\n                <div (press)=\"longPress(i)\" class=\"img-container-received-flex\">\n                    <img class=\"sender-photo-flex\" src=\"http://198.12.92.202/public/uploads/{{ gp.messageBy.avatar ? gp.messageBy.avatar : 'assets/images/user.png' }}\">\n                </div>\n      \n                <div class=\"message-bubble-received-flex-container\">\n                  <div class=\"message-bubble-received-flex\" id=\"{{ gp._id }}-bubble\" (press)=\"othersActions(gp._id)\">  \n                      <div class=\"sent-response-to\" *ngIf=\"gp.replyFor && gp.replyFor.message\">\n                          <b>{{ gp.replyFor.messageBy.name }}</b><br>\n                          {{ gp.replyFor.message }}\n                        </div>\n                    <p class=\"sender-name\">{{ gp.messageBy.name }}</p>\n                    <p class=\"received-message-flex\">{{ gp.message }}</p>\n                  </div>\n                  \n                  <p class=\"message-time\">\n                      {{gp.chattime|date: 'H:mm'  }}\n                  </p>\n                  \n                </div>     \n                  <div class=\"reply-button-container-flex\">\n                      <ion-button fill=\"clear\" color=\"dark\" id=\"{{ gp._id }}-reply\" (click)=\"replyOnClick($event)\">\n                          <ion-icon slot=\"icon-only\" name=\"ios-undo\" class=\"reply-button\"></ion-icon>\n                      </ion-button>\n                  </div>\n            </div>\n            <div class=\"hidden\" id=\"{{ gp._id }}-textarea\">\n              <div class=\"reply-text-area \">\n                  <!-- Show Attached Images -->\n                  <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\n                      <ion-thumbnail *ngIf=\"getExt(img) != 'video'\" slot=\"start\">\n                        <ion-img [src]=\"img.path\"></ion-img>\n                      </ion-thumbnail>\n                      <ion-thumbnail *ngIf=\"getExt(img) == 'video'\" slot=\"start\">\n                        <video [src]=\"img.path\" height=\"50\" width=\"70\"  muted [muted]=\"true\" preload=\"auto\" playsinline autoplay loop></video>\n                      </ion-thumbnail>\n                      <ion-label>\n                        {{ img.displayName }}\n                      </ion-label>\n                      <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(img, pos)\">\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                      </ion-button>\n                      <ion-spinner *ngIf=\"uploading == true\" name=\"crescent\" color=\"primary\"></ion-spinner>\n                    </ion-item>\n\n                  <!-- Show Attached Docs -->\n                    <ion-item *ngFor=\"let doc of docs; index as pos\" text-wrap>\n                      <ion-chip color=\"primary\">\n                        <ion-icon name=\"attach\" color=\"primary\"></ion-icon>\n                      </ion-chip>\n                      <ion-label>\n                        {{ doc.name}}\n                      </ion-label>  \n                      <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(doc, pos)\">\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                      </ion-button>\n                      <ion-spinner *ngIf=\"uploading == true\" name=\"crescent\" color=\"primary\"></ion-spinner>\n                    </ion-item>\n              </div>\n             <div class=\"reply-text-area\">\n                \n                      <img class=\"user-photo\" src=\"assets/images/user.png\">\n                      <ion-textarea [formControlName]=\"gp._id\" class=\"rounded textarea\" placeholder=\"Enter Message...\" rows=\"1\"></ion-textarea>\n                      <div class=\"buttons-container\">\n                        <ion-button fill=\"clear\" (click)=\"selectAFile()\">\n                          <ion-icon slot=\"icon-only\" name=\"md-attach\" color=\"medium\"></ion-icon>\n                        </ion-button>\n                        \n                        <ion-button fill=\"clear\" (click)=\"selectImage()\">\n                          <ion-icon slot=\"icon-only\" name=\"md-camera\" color=\"medium\"></ion-icon>\n                        </ion-button>\n                        \n                        <ion-button fill=\"clear\" (click)=\"replyToMessage(gp._id, gp.messageBy)\">\n                          <ion-icon slot=\"icon-only\" name=\"md-send\" color=\"primary\"></ion-icon>\n                        </ion-button>\n                      </div>\n                    <!-- <ion-grid>\n                      <ion-row>\n                        <ion-col size='12'>\n                          <ion-item>\n                            <ion-textarea [formControlName]=\"gp._id\" class=\"rounded textarea\" placeholder=\"Enter Message...\" rows=\"1\"></ion-textarea>\n                            <ion-buttons slots=\"end\">\n                                <ion-button fill=\"clear\" (click)=\"selectAFile()\">\n                                  <ion-icon slot=\"icon-only\" name=\"md-attach\" color=\"medium\"></ion-icon>\n                                </ion-button>\n                                \n                                <ion-button fill=\"clear\" (click)=\"selectImage()\">\n                                  <ion-icon slot=\"icon-only\" name=\"md-camera\" color=\"medium\"></ion-icon>\n                                </ion-button>\n                                \n                                <ion-button fill=\"clear\" (click)=\"replyToMessage(gp._id, gp.messageBy)\">\n                                  <ion-icon slot=\"icon-only\" name=\"md-send\" color=\"primary\"></ion-icon>\n                                </ion-button>\n                              </ion-buttons>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid> -->\n                </div>\n            </div>\n\n            <div class=\"message-received-flex-box\" *ngIf = \"findMatch(adminidval, gp.messageFor) && gp.file == true\">\n              <div class=\"img-container-received-flex\">\n                <img (load)=\"contentArea.scrollToBottom(); scrollToBottom()\" class=\"sender-photo-flex\" src=\"http://198.12.92.202/public/uploads/{{ gp.messageBy.avatar ? gp.messageBy.avatar : 'assets/images/user.png' }}\" onError=\"this.src='assets/images/user.png';\">\n              </div>\n              <div class=\"message-buble-recieved-flex-image\" *ngIf=\"fileSourceArray[gp._id] != null && gp.fileType != 'doc'\">\n                <div class=\"image-container\">\n                  <img (load)=\"contentArea.scrollToBottom(); scrollToBottom()\" *ngIf=\"gp.fileType == 'image' && gp.attachment\" [src]=\"fileSourceArray[gp._id]\" (click)=\"viewImage(fileSourceArray[gp._id])\"> \n                  <video *ngIf=\"gp.fileType == 'video' && gp.attachment\" [src]=\"fileSourceArray[gp._id]\"  muted [muted]=\"true\" preload=\"auto\" playsinline autoplay loop (click)=\"viewVideo(fileSourceArray[gp._id])\"></video>\n                  <div *ngIf=\"gp.fileType == 'video' && gp.attachment\" class=\"playpause {{ fileArray[gp._id] ? '' : 'hidden' }}\" id=\"play-{{ i }}\" (click)=\"viewVideo('http://198.12.92.202/public/uploads/'+ gp.attachment)\"></div>\n                  <div class=\"download {{ fileArray[gp._id] ? 'hidden' : '' }}\" id=\"download-{{ i }}\" (click)=\"downloadAttachment(gp.attachment, i)\"></div>\n                  <ion-spinner name=\"lines\" color=\"primary\" class=\"hidden\" id=\"spinner-{{ i }}\"></ion-spinner>\n                </div>\n              </div>\n              <div class=\"message-buble-recieved-flex-file\" *ngIf=\"gp.fileType == 'doc'\" style=\" display: flex; justify-content: center;\">\n                <div>\n                    <ion-icon name='attach'></ion-icon>\n                </div>\n                <div>\n                  {{ gp.attachment }}\n                </div>\n                <div>\n                    <ion-icon class=\"file-attach {{ fileArray[gp._id] ? 'hidden' : '' }}\" name='md-download' ios=\"ios-download\" id=\"download-{{ i }}\" md=\"md-download\" (click)=\"downloadAttachment(gp.attachment, i)\"></ion-icon>\n                    <ion-icon class=\"file-attach {{ fileArray[gp._id] ?  '' : 'hidden' }}\" name='md-open' ios=\"ios-open\" id=\"play-{{ i }}\" md=\"md-open\" (click)=\"openFile(gp.attachment, i)\"></ion-icon>\n                    <ion-spinner name=\"lines\" color=\"primary\" class=\"hidden\" id=\"spinner-{{ i }}\"></ion-spinner>\n                </div>\n              </div>\n            </div>\n\n          \n\n        <!-- Sending Message -->\n\n\n\n\n        <!-- If its a test as Message -->\n        <div class=\"message-sent-flex-box\"  *ngIf = \"(gp.messageBy ? gp.messageBy._id == adminidval : false) && !gp.file\">\n            <div class=\"flex-box-fix\">\n\n              <div class=\"message-buble-sent-flex\" (press)=\"myActions(gp._id)\">\n                <div class=\"response-to\" *ngIf=\"gp.replyFor && gp.replyFor.message\">\n                  <b>{{ gp.replyFor.messageBy.name }}</b><br>\n                  {{ gp.replyFor.message }}\n                  </div>\n                  <p class=\"sent-message-flex  dont-break-out\">{{ gp.message }}</p>\n              </div>\n\n              <!-- <div class=\"reply-button-container-flex\">\n                  <ion-button fill=\"clear\" color=\"dark\">\n                      <ion-icon slot=\"icon-only\" name=\"ios-undo\" class=\"reply-button\"></ion-icon>\n                  </ion-button>\n              </div> -->\n            </div>\n            <div class=\"flex-box-fix\">\n            <p class=\"message-time\">\n              {{gp.chattime|date: 'H:mm'  }}\n            </p>\n            </div>\n        </div>\n\n        <!-- If its a file as Message-->\n          <div class=\"message-sent-flex-box\" *ngIf = \"(gp.messageBy ? gp.messageBy._id == adminidval : false) && gp.file == true\" style=\"display:flex; flex-direction:row-reverse\">\n              <div class=\"message-buble-sent-flex-image\" *ngIf=\"fileSourceArray[gp._id] != null && gp.fileType != 'doc'\">\n                  <img (load)=\"contentArea.scrollToBottom(); scrollToBottom()\" *ngIf=\"gp.fileType == 'image' && gp.attachment\" [src]=\"fileSourceArray[gp._id]\" width=\"200px\" (click)=\"viewImage(fileSourceArray[gp._id])\"> \n                  <div *ngIf=\"gp.fileType == 'video' && gp.attachment\" class=\"mh\">\n                    <video muted [muted]=\"true\" preload=\"auto\" playsinline>\n                      <source [src]=\"fileSourceArray[gp._id]\">\n                    </video>\n                  </div>\n                  <div *ngIf=\"gp.fileType == 'video' && gp.attachment\" class=\"playpause {{ fileArray[gp._id] ? '' : 'hidden' }}\" id=\"play-{{ i }}\" (click)=\"viewVideo(fileSourceArray[gp._id])\"></div>\n                  <div class=\"download {{ fileArray[gp._id] ? 'hidden' : '' }}\" id=\"download-{{ i }}\" (click)=\"downloadAttachment(gp.attachment, i)\"></div>\n                  <ion-spinner name=\"lines\" color=\"primary\" class=\"hidden\" id=\"spinner-{{ i }}\"></ion-spinner>\n              </div>\n              <div class=\"message-buble-sent-flex-file\" *ngIf=\"gp.fileType == 'doc'\" style=\" display: flex; justify-content: center; color: white\">\n                <div>\n                    <ion-icon name='attach'></ion-icon>\n                </div>\n                <div>\n                  {{ gp.attachment }}\n                </div>\n                <div>\n                  <ion-icon class=\"file-attach {{ fileArray[gp._id] ? 'hidden' : '' }}\" name='md-download' ios=\"ios-download\" id=\"download-{{ i }}\" md=\"md-download\" (click)=\"downloadAttachment(gp.attachment, i)\"></ion-icon>\n                  <ion-icon class=\"file-attach {{ fileArray[gp._id] ?  '' : 'hidden' }}\" name='md-open' ios=\"ios-open\" id=\"play-{{ i }}\" md=\"md-open\" (click)=\"openFile(gp.attachment, gp._id)\"></ion-icon>\n                  <ion-spinner name=\"lines\" color=\"primary\" class=\"hidden\" id=\"spinner-{{ i }}\"></ion-spinner>\n                </div>\n              </div>\n\n              <div class=\"flex-box-fix\">\n                  <p class=\"message-time\">\n                    {{gp.chattime|date: 'H:mm'  }}\n                  </p>\n                  </div>\n          </div>\n          </div> \n      </form>\n    </div>\n    <div class=\"show-block\" *ngIf=\"showBlock\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button fill=\"outline\" size=\"small\" expand=\"block\" (click)=\"acceptGroup()\">Allow</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button fill=\"outline\" size=\"small\" expand=\"block\" (click)=\"rejectGroup()\">Block</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <br><br><br><br><br>\n    <div *ngIf=\"this.adminidval != this.group_admin_id\"><br><br></div>\n    \n    <div class=\"type-message\" *ngIf=\"this.adminidval != this.group_admin_id\">\n        <!-- Text Message Area -->\n        <div class=\"type-message-container\">\n          <ion-item class=\"preview\" *ngFor=\"let img of images; index as pos\" text-wrap>\n            <ion-thumbnail *ngIf=\"getExt(img) != 'video'\" slot=\"start\">\n              <ion-img [src]=\"img.path\"></ion-img>\n            </ion-thumbnail>\n            <ion-thumbnail *ngIf=\"getExt(img) == 'video'\" slot=\"start\">\n              <video [src]=\"img.path\" height=\"50\" width=\"70\" muted [muted]=\"true\" preload=\"auto\" playsinline autoplay loop></video>\n            </ion-thumbnail>\n            <ion-label> \n              {{ img.displayName }}\n            </ion-label>\n            <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(img, pos)\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n            <ion-spinner *ngIf=\"uploading == true\" name=\"crescent\" color=\"primary\"></ion-spinner>\n          </ion-item>\n          <ion-item class=\"preview\" *ngFor=\"let doc of docs; index as pos\" text-wrap>\n            <ion-chip color=\"primary\">\n              <ion-icon name=\"attach\" color=\"primary\"></ion-icon>\n            </ion-chip>\n            <ion-label>\n              {{ doc.name}}\n            </ion-label>  \n            <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(doc, pos)\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n            <ion-spinner *ngIf=\"uploading == true\" name=\"crescent\" color=\"primary\"></ion-spinner>\n          </ion-item>\n          <form [formGroup]=\"groupform\" (ngSubmit)=\"onSubmit()\">\n          <ion-input type=\"text\"  formControlName=\"adminname\" value=\"{{ adminname }}\" hidden></ion-input>\n            <div class=\"chatbox-wrapper\">\n              <ion-item class=\"rounded\" lines=\"none\">\n                  <ion-textarea placeholder=\"{{'Enter Message' | translate}}...\" rows=\"3\" name=\"message\" formControlName=\"message\"></ion-textarea>\n              </ion-item>\n            </div>\n          \n            <div class=\"buttons-container\">\n                <ion-button (click)=\"selectAFile()\" fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-attach\" color=\"medium\"></ion-icon>\n                </ion-button>\n                <!-- <input type=\"file\" (change)=\"getFileFromBrowser($event, 'video')\" id=\"video\" accept=\"video/mp4,video/x-m4v,video/*\" style=\"display: none\"> -->\n                <ion-button (click)=\"selectVideoFromGallery()\" fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-videocam\" color=\"medium\"></ion-icon>\n                </ion-button>\n                \n                <!-- <input type=\"file\" (change)=\"getFileFromBrowser($event, 'image')\" id=\"image\" accept=\"image/*\" style=\"display: none\"> -->\n                <ion-button (click)=\"selectImage()\" fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"md-camera\" color=\"medium\"></ion-icon>\n                </ion-button>\n  \n                <ion-button (click)=\"onSubmit()\"  fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"md-send\" color=\"primary\"></ion-icon>\n                </ion-button>\n            </div>\n          </form>\n        </div>\n      </div>\n\n</div>\n<div class=\"outer-chatbox-wrapper\" *ngIf=\"this.adminidval != this.group_admin_id\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/group-chat-admin/group-chat-admin.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/group-chat-admin/group-chat-admin.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-received-flex-box {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 10px; }\n\n.user-icon {\n  margin: 1px;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px; }\n\n.sent-response-to {\n  margin-bottom: 6px;\n  padding: 7px;\n  color: #797979;\n  border-radius: 5px;\n  background-color: #6161612b; }\n\n.response-to {\n  margin-bottom: 6px;\n  padding: 7px;\n  color: #fff;\n  border-radius: 5px;\n  background-color: #ffffff38; }\n\n.message-sent-flex-box {\n  margin-bottom: 10px; }\n\n.flex-box-fix {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse; }\n\n.img-container-sent-flex {\n  margin-left: 15px; }\n\n.sender-photo-flex {\n  max-width: 50px;\n  border-radius: 50%; }\n\n.message-buble-sent-flex {\n  background: #005DDD;\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 15px;\n  max-width: 90%; }\n\n.message-buble-sent-flex-image {\n  background: #005DDD;\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 5px;\n  width: 210px;\n  max-height: 210px; }\n\n.message-buble-sent-flex-image img {\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  max-height: 200px; }\n\n.message-buble-sent-flex-image video {\n  min-width: 100%;\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  max-width: 200px;\n  max-height: 200px; }\n\nion-title {\n  text-align: left; }\n\n.main {\n  margin: 10px; }\n\n.bubble-container {\n  overflow: auto; }\n\n.message-received-flex-box {\n  display: -webkit-box;\n  display: flex; }\n\n.img-container-received-flex {\n  margin-right: 15px; }\n\n.sender-photo-flex {\n  max-width: 50px;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px; }\n\n.message-bubble-received-flex-container {\n  max-width: 90%;\n  min-width: 75px; }\n\n.sender-name {\n  color: #7A8AA0;\n  margin: 0; }\n\n.message-bubble-received-flex {\n  background: #F1F1F1;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 15px; }\n\n.message-bubble-received-flex-longpress {\n  background: #a9a9a9;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 15px; }\n\n.message-bubble-received-flex-reported {\n  background: #F1F1F1;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 15px; }\n\n.message-bubble-received-flex.active {\n  background: #DDEDFF; }\n\n.received-message-flex {\n  margin: 0;\n  color: #475255; }\n\n.reply-button {\n  font-size: 22px; }\n\n.message-time {\n  font-size: 10px;\n  color: #7A8AA0;\n  margin: 5px; }\n\n.reply-text-area {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  width: 100%;\n  margin-bottom: 20px; }\n\n.reply-text-area ion-textarea {\n  padding-right: 100px; }\n\n.reply-text-area ion-textarea textarea {\n  width: 65%; }\n\n.reply-text-area .buttons-container {\n  max-width: 40%; }\n\n.hidden {\n  display: none; }\n\nion-textarea {\n  display: inline-block;\n  text-align: left;\n  width: 80% !important; }\n\ntextarea {\n  display: inline-block;\n  margin-left: 20px;\n  text-align: left;\n  max-width: 80% !important; }\n\n.user-photo {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-left: 10px; }\n\n.sent-message-flex {\n  margin: 0;\n  color: white; }\n\n.hr-text {\n  line-height: 1em;\n  position: relative;\n  outline: 0;\n  border: 0;\n  color: black;\n  text-align: center;\n  height: 1.5em;\n  opacity: .5; }\n\n.hr-text:before {\n    content: '';\n    background: #E2E2E2;\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 1px; }\n\n.hr-text:after {\n    content: attr(data-content);\n    position: relative;\n    display: inline-block;\n    color: black;\n    font-family: 'avenir', sans-serif;\n    font-size: 12px;\n    padding: 0 .5em;\n    line-height: 1.5em;\n    color: #818078;\n    background-color: #fcfcfa; }\n\n.rounded {\n  border: 2px solid #E2E2E2;\n  --border-width: 0 0 0 0;\n  border-radius: 8px; }\n\n.type-message-container {\n  width: 95%; }\n\n.reply-text-area .buttons-container {\n  text-align: right;\n  position: absolute;\n  right: 70px;\n  margin-top: 7px;\n  z-index: 1000; }\n\n.reply-text-area .buttons-container ion-button {\n  --padding-start:5px;\n  --padding-end:5px; }\n\n.reply-text-area .buttons-container ion-icon {\n  padding: 0;\n  font-size: 18px; }\n\n.message-buble-sent-flex-image {\n  background: #005DDD;\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 5px;\n  width: 210px;\n  max-height: 210px;\n  display: block;\n  position: relative; }\n\n.message-buble-sent-flex-image img {\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  max-height: 200px; }\n\n.message-buble-sent-flex-image video {\n  min-width: 100%;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  max-width: 200px;\n  max-height: 200px; }\n\n.message-buble-recieved-flex-image {\n  background: #F1F1F1;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 5px;\n  width: 210px;\n  max-height: 210px;\n  margin-bottom: 10px; }\n\n.message-buble-recieved-flex-image img {\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px; }\n\n.message-buble-recieved-flex-image video {\n  min-width: 100%;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  max-width: 200px;\n  max-height: 200px; }\n\n.mh {\n  display: block;\n  width: auto;\n  position: relative;\n  width: 100%; }\n\n.preview ion-chip {\n  padding: 10px !important; }\n\n.preview ion-chip ion-icon {\n  margin: unset !important; }\n\n.chatbox-wrapper {\n  width: calc(100% - 20px); }\n\n.type-message-container .preview {\n  width: calc(100% - 20px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2dyb3VwLWNoYXQtYWRtaW4vZ3JvdXAtY2hhdC1hZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZBO0VBQ0ksb0JBQVk7RUFBWixhQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQW9EZjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQTJCO0VBQTNCLDhCQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTs7QUFPL0I7RUFDSSxpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBS2xCO0VBQ0ksbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBY3JCO0VBQ0ksNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFzSHJCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBS3BCO0VBQ0ksWUFDSixFQUFBOztBQU1BO0VBQ0ksY0FDSixFQUFBOztBQUVBO0VBQ0ksb0JBQVk7RUFBWixhQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjO0VBQ2QsU0FBUyxFQUFBOztBQUViO0VBQ0ksbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsYUFBYSxFQUFBOztBQUdqQjtFQUNJLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixhQUFhLEVBQUE7O0FBSWpCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksU0FBUztFQUNULGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBSWY7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBMkI7RUFBM0IsOEJBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsbUJBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFnQixFQUFBOztBQThCcEI7RUFDSSxTQUFTO0VBQ1QsWUFBWSxFQUFBOztBQVFoQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBUmI7SUFVSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXLEVBQUE7O0FBaEJmO0lBbUJJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QixFQUFBOztBQUs3QjtFQUNJLHlCQUF5QjtFQUN6Qix1QkFBZTtFQUNmLGtCQUNKLEVBQUE7O0FBRUE7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUVqQjtFQUNJLG1CQUFnQjtFQUNoQixpQkFBYyxFQUFBOztBQUdsQjtFQUNJLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBS25CO0VBQ0ksbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUlyQjtFQUNJLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLCtCQUErQixFQUFBOztBQUluQztFQUNJLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYTtFQUNiLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsV0FBVSxFQUFBOztBQUdkO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ncm91cC1jaGF0LWFkbWluL2dyb3VwLWNoYXQtYWRtaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gSGVhZGVyIFN0eWxlc1xuLy8gaW9uLXRpdGxle1xuLy8gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyB9XG5cbi8vIC8vTWFpbiBTdHlsZXNcblxuLy8gLm1haW57XG4vLyAgICAgbWFyZ2luOjEwcHhcbi8vIH1cblxuLy8gLnJlcGx5LXRleHQtYXJlYXtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4vLyB9XG5cbi8vIC5oaWRkZW57XG4vLyAgICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gLnRleHRhcmVhe1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICBtYXJnaW4tbGVmdDogMjBweDtcbi8vICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gfVxuXG4vLyAudXNlci1waG90b3tcbi8vICAgICBtYXgtd2lkdGg6IDUwcHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4vLyB9XG5cblxuLy8gLy9DaGF0IFN0eWxlc1xuXG4vLyBSZWNlaXZlZCBNZXNzYWdlIFN0eWxlc1xuLy8gLmltZy1jb250YWluZXJ7XG4vLyAgICAgbWF4LXdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5zZW5kZXItcGhvdG97XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICAgIG1hcmdpbi10b3A6MjBweDtcbi8vIH1cblxuLy8gLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVkLWNvbnRhaW5lcntcbi8vICAgICBtYXJnaW46IDIwcHggMTVweCAwcHggMTBweDtcbi8vIH1cblxuLy8gLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVke1xuLy8gICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XG4vLyAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbi8vICAgICBwYWRkaW5nOiAxNXB4O1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vIH1cblxuLy8gLnNlbmRlci1uYW1le1xuLy8gICAgIGNvbG9yOiAjN0E4QUEwO1xuLy8gICAgIG1hcmdpbjogMDtcbi8vIH1cblxuLy8gLnJlY2VpdmVkLW1lc3NhZ2V7XG4vLyAgICAgY29sb3I6IzQ3NTI1NTtcbi8vICAgICBtYXJnaW46IDA7XG4vLyB9XG5cbi8vIC5tZXNzYWdlLXRpbWV7XG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICAgIGNvbG9yOiAjN0E4QUEwO1xuLy8gICAgIG1hcmdpbjogNXB4O1xuLy8gfVxuXG5cbi8vIC5idWJibGUtY29udGFpbmVye1xuLy8gICAgIG92ZXJmbG93OiBhdXRvXG4vLyB9XG5cbi5tZXNzYWdlLXJlY2VpdmVkLWZsZXgtYm94e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udXNlci1pY29ue1xuICAgIG1hcmdpbjogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG59XG5cbi8vIC5pbWctY29udGFpbmVyLXJlY2VpdmVkLWZsZXh7XG4vLyAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4vLyB9XG5cbi8vIC5zZW5kZXItcGhvdG8tZmxleHtcbi8vICAgICBtYXgtd2lkdGg6IDUwcHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICAgIGhlaWdodDogNDBweDtcbi8vICAgICB3aWR0aDogNDBweDtcbi8vIH1cblxuLy8gLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVkLWZsZXgtY29udGFpbmVye1xuLy8gICAgIG1heC13aWR0aDogNTAwcHg7XG4vLyAgICAgbWluLXdpZHRoOiA3NXB4O1xuLy8gfVxuXG4vLyAuc2VuZGVyLW5hbWV7XG4vLyAgICAgY29sb3I6ICM3QThBQTA7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gfVxuLy8gLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVkLWZsZXh7XG4vLyAgICAgYmFja2dyb3VuZDogI0YxRjFGMTtcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbi8vICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuLy8gICAgIHBhZGRpbmc6IDE1cHg7XG4vLyAgICAgbWF4LXdpZHRoOiA1MDBweDtcbi8vIH1cblxuXG5cbi8vIC5yZWNlaXZlZC1tZXNzYWdlLWZsZXh7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gICAgIGNvbG9yOiAjNDc1MjU1O1xuLy8gfVxuXG4vLyAucmVwbHktYnV0dG9ue1xuLy8gICAgIGZvbnQtc2l6ZTogMjJweDtcbi8vIH1cblxuLy8gLm1lc3NhZ2UtdGltZXtcbi8vICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgY29sb3I6ICM3QThBQTA7XG4vLyAgICAgbWFyZ2luOiA1cHg7XG4vLyB9XG5cblxuXG4vLyAvL1NlbnQgTWVzc2FnZSBTdHlsZXNcbi5zZW50LXJlc3BvbnNlLXRve1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgY29sb3I6ICM3OTc5Nzk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjEyYjtcbn1cblxuLnJlc3BvbnNlLXRve1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYzODtcbn1cblxuLm1lc3NhZ2Utc2VudC1mbGV4LWJveHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZmxleC1ib3gtZml4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4vLyAuZmxleC1ib3gtZml4IC5tZXNzYWdlLXRpbWV7XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuLy8gfVxuXG4uaW1nLWNvbnRhaW5lci1zZW50LWZsZXh7XG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcbn1cblxuLnNlbmRlci1waG90by1mbGV4e1xuICAgIG1heC13aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5tZXNzYWdlLWJ1YmxlLXNlbnQtZmxleHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA1REREO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1heC13aWR0aDogOTAlO1xufVxuXG4vLyAvL1NlbnQgaW1hZ2VcblxuLm1lc3NhZ2UtYnVibGUtc2VudC1mbGV4LWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA1REREO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDIxMHB4O1xufVxuXG4vLyAuaW1hZ2UtY29udGFpbmVye1xuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vIH1cblxuLm1lc3NhZ2UtYnVibGUtc2VudC1mbGV4LWltYWdlIGltZyB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4ubWVzc2FnZS1idWJsZS1zZW50LWZsZXgtaW1hZ2UgdmlkZW8ge1xuICAgIG1pbi13aWR0aDogMTAwJTsgXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG59XG4vLyAvLyByZWNlaXZlZCBpbWFnZXMgY2hhdCBidWJibGVcbi8vIC5tZXNzYWdlLWJ1YmxlLXJlY2VpdmVkLWZsZXgtaW1hZ2Uge1xuICAgIFxuLy8gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4vLyAgICAgcGFkZGluZzogNXB4O1xuLy8gICAgIHdpZHRoOiAyMTBweDtcbi8vICAgICBoZWlnaHQ6IDIxMHB4O1xuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWYxZjE7XG4vLyB9XG5cbi8vIC5tZXNzYWdlLWJ1YmxlLXJlY2VpdmVkLWZsZXgtaW1hZ2UgaW1nIHtcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4vLyB9XG5cbi8vIC5tZXNzYWdlLWJ1YmxlLXJlY2VpdmVkLWZsZXgtaW1hZ2UgdmlkZW8ge1xuLy8gICAgIG1pbi13aWR0aDogMTAwJTsgXG4vLyAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbi8vICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuLy8gICAgIG1heC13aWR0aDogMjAwcHg7XG4vLyAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4vLyB9XG5cbi8vIC5zZW50LW1lc3NhZ2UtZmxleHtcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gfVxuXG4vLyAucmVwbHktYnV0dG9ue1xuLy8gICAgIGZvbnQtc2l6ZTogMjJweDtcbi8vIH1cblxuLy8gLy9IUiBzdHlsZXNcbi8vIC5oci10ZXh0IHtcbi8vICAgbGluZS1oZWlnaHQ6IDFlbTtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBvdXRsaW5lOiAwO1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGNvbG9yOiBibGFjaztcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBoZWlnaHQ6IDEuNWVtO1xuLy8gICBvcGFjaXR5OiAuNTtcbi8vICAgJjpiZWZvcmUge1xuLy8gICAgIGNvbnRlbnQ6ICcnO1xuLy8gICAgIC8vIHVzZSB0aGUgbGluZWFyLWdyYWRpZW50IGZvciB0aGUgZmFkaW5nIGVmZmVjdFxuLy8gICAgIC8vIHVzZSBhIHNvbGlkIGJhY2tncm91bmQgY29sb3IgZm9yIGEgc29saWQgYmFyXG4vLyAgICAgYmFja2dyb3VuZDogI0UyRTJFMjtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICB0b3A6IDUwJTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDFweDtcbi8vICAgfVxuLy8gICAmOmFmdGVyIHtcbi8vICAgICBjb250ZW50OiBhdHRyKGRhdGEtY29udGVudCk7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICBjb2xvcjogYmxhY2s7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdhdmVuaXInLCBzYW5zLXNlcmlmO1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICBwYWRkaW5nOiAwIC41ZW07XG4vLyAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuLy8gICAgIC8vIHRoaXMgaXMgcmVhbGx5IHRoZSBvbmx5IHRyaWNreSBwYXJ0LCB5b3UgbmVlZCB0byBzcGVjaWZ5IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBjb250YWluZXIgZWxlbWVudC4uLlxuLy8gICAgIGNvbG9yOiAjODE4MDc4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmE7XG4vLyAgIH1cbi8vIH1cblxuLy8gLy9UZXh0IGFyZWEgU3R5bGVzXG4vLyAucm91bmRlZHtcbi8vICAgICBib3JkZXI6IDJweCBzb2xpZCAjRTJFMkUyO1xuLy8gICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDhweFxuLy8gfVxuXG4vLyAudHlwZS1tZXNzYWdlIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vIH1cblxuLy8gLnR5cGUtbWVzc2FnZS1jb250YWluZXJ7XG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICAgIGJvdHRvbTogLTM1cHg7XG4vLyAgICAgd2lkdGg6IDk4JTtcbi8vICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgICBsZWZ0OiAxJTtcbi8vIH1cblxuLy8gLmJ1dHRvbnMtY29udGFpbmVye1xuLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBib3R0b206IDQ1cHg7XG4vLyAgICAgei1pbmRleDogMTAwMDtcbi8vIH1cbi8vIC5idXR0b25zLWNvbnRhaW5lciBpb24tYnV0dG9ue1xuLy8gICAgIC0tcGFkZGluZy1zdGFydDoxMHB4O1xuLy8gICAgIC0tcGFkZGluZy1lbmQ6MTBweDtcbi8vICAgICAtLXBhZGRpbmctdG9wOiA1cHg7XG4vLyAgICAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuLy8gfVxuXG4vLyAuYnV0dG9ucy1jb250YWluZXIgaW9uLWljb257XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBmb250LXNpemU6IDE4cHg7XG4vLyB9XG5cbi8vIC5jaGF0Ym94LXdyYXBwZXIge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuIFxuLy8gSGVhZGVyIFN0eWxlc1xuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8vTWFpbiBTdHlsZXNcblxuLm1haW57XG4gICAgbWFyZ2luOjEwcHhcbn1cblxuLy9DaGF0IFN0eWxlc1xuXG4vL1JlY2VpdmVkIE1lc3NhZ2UgU3R5bGVzXG5cbi5idWJibGUtY29udGFpbmVye1xuICAgIG92ZXJmbG93OiBhdXRvXG59XG5cbi5tZXNzYWdlLXJlY2VpdmVkLWZsZXgtYm94e1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cblxuLmltZy1jb250YWluZXItcmVjZWl2ZWQtZmxleHtcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcbn1cblxuLnNlbmRlci1waG90by1mbGV4e1xuICAgIG1heC13aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4ubWVzc2FnZS1idWJibGUtcmVjZWl2ZWQtZmxleC1jb250YWluZXJ7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgbWluLXdpZHRoOiA3NXB4O1xufVxuXG4uc2VuZGVyLW5hbWV7XG4gICAgY29sb3I6ICM3QThBQTA7XG4gICAgbWFyZ2luOiAwO1xufVxuLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVkLWZsZXh7XG4gICAgYmFja2dyb3VuZDogI0YxRjFGMTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5tZXNzYWdlLWJ1YmJsZS1yZWNlaXZlZC1mbGV4LWxvbmdwcmVzc3tcbiAgICBiYWNrZ3JvdW5kOiAjYTlhOWE5O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVkLWZsZXgtcmVwb3J0ZWR7XG4gICAgYmFja2dyb3VuZDogI0YxRjFGMTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cblxuLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVkLWZsZXguYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICNEREVERkY7XG59XG5cbi5yZWNlaXZlZC1tZXNzYWdlLWZsZXh7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjNDc1MjU1O1xufVxuXG4ucmVwbHktYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLm1lc3NhZ2UtdGltZXtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICM3QThBQTA7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cblxuLnJlcGx5LXRleHQtYXJlYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG59XG4ucmVwbHktdGV4dC1hcmVhIGlvbi10ZXh0YXJlYXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbn1cblxuLnJlcGx5LXRleHQtYXJlYSBpb24tdGV4dGFyZWEgdGV4dGFyZWEge1xuICAgIHdpZHRoOiA2NSU7XG59XG5cbi5yZXBseS10ZXh0LWFyZWEgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDQwJTtcbn1cblxuLmhpZGRlbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tdGV4dGFyZWF7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xufVxudGV4dGFyZWF7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcbn1cblxuLnVzZXItcGhvdG97XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xufVxuXG4vL1NlbnQgTWVzc2FnZSBTdHlsZXNcblxuLy8gLm1lc3NhZ2Utc2VudC1mbGV4LWJveHtcbi8vICAgICBkaXNwbGF5OmZsZXg7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2Vcbi8vIH1cblxuLy8gLmltZy1jb250YWluZXItc2VudC1mbGV4e1xuLy8gICAgIG1hcmdpbi1sZWZ0OjE1cHg7XG4vLyB9XG5cbi8vIC5zZW5kZXItcGhvdG8tZmxleHtcbi8vICAgICBtYXgtd2lkdGg6IDUwcHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gfVxuXG4vLyAubWVzc2FnZS1idWJsZS1zZW50LWZsZXh7XG4vLyAgICAgYmFja2dyb3VuZDogIzAwNURERDtcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4vLyAgICAgcGFkZGluZzogMTVweDtcbi8vICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuLy8gICAgIG1pbi13aWR0aDogNzVweDtcbi8vICAgICBtYXJnaW4tbGVmdDo1MHB4O1xuLy8gfVxuXG4uc2VudC1tZXNzYWdlLWZsZXh7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLy8gLnJlcGx5LWJ1dHRvbntcbi8vICAgICBmb250LXNpemU6IDIycHg7XG4vLyB9XG5cbi8vSFIgc3R5bGVzXG4uaHItdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgb3BhY2l0eTogLjU7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kOiAjRTJFMkUyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1jb250ZW50KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogJ2F2ZW5pcicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgY29sb3I6ICM4MTgwNzg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYTtcbiAgfVxufVxuXG4vL1RleHQgYXJlYSBTdHlsZXNcbi5yb3VuZGVke1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMkUyRTI7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4XG59XG5cbi50eXBlLW1lc3NhZ2UtY29udGFpbmVye1xuICAgIHdpZHRoOiA5NSU7XG59XG5cbi5yZXBseS10ZXh0LWFyZWEgLmJ1dHRvbnMtY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNzBweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7IFxuICAgIHotaW5kZXg6IDEwMDA7XG59XG4ucmVwbHktdGV4dC1hcmVhIC5idXR0b25zLWNvbnRhaW5lciBpb24tYnV0dG9ue1xuICAgIC0tcGFkZGluZy1zdGFydDo1cHg7XG4gICAgLS1wYWRkaW5nLWVuZDo1cHg7XG59XG5cbi5yZXBseS10ZXh0LWFyZWEgLmJ1dHRvbnMtY29udGFpbmVyIGlvbi1pY29ue1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4vL1NlbnQgaW1hZ2VcblxuLm1lc3NhZ2UtYnVibGUtc2VudC1mbGV4LWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA1REREO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDIxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1lc3NhZ2UtYnVibGUtc2VudC1mbGV4LWltYWdlIGltZyB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4ubWVzc2FnZS1idWJsZS1zZW50LWZsZXgtaW1hZ2UgdmlkZW8ge1xuICAgIG1pbi13aWR0aDogMTAwJTsgXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG59XG4vLyByZWNlaXZlZCBpbWFnZXMgY2hhdCBidWJibGVcblxuLm1lc3NhZ2UtYnVibGUtcmVjaWV2ZWQtZmxleC1pbWFnZSB7XG4gICAgYmFja2dyb3VuZDogI0YxRjFGMTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogMjEwcHg7XG4gICAgbWF4LWhlaWdodDogMjEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1lc3NhZ2UtYnVibGUtcmVjaWV2ZWQtZmxleC1pbWFnZSBpbWcge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgLy8gbWF4LWhlaWdodDogMjAwcHg7XG59XG5cbi5tZXNzYWdlLWJ1YmxlLXJlY2lldmVkLWZsZXgtaW1hZ2UgdmlkZW8ge1xuICAgIG1pbi13aWR0aDogMTAwJTsgXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4ubWh7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB3aWR0aDphdXRvO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5wcmV2aWV3IGlvbi1jaGlwIHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmV2aWV3IGlvbi1jaGlwIGlvbi1pY29uIHtcbiAgICBtYXJnaW46IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGF0Ym94LXdyYXBwZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cblxuLnR5cGUtbWVzc2FnZS1jb250YWluZXIgLnByZXZpZXd7IFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/group-chat-admin/group-chat-admin.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/group-chat-admin/group-chat-admin.page.ts ***!
  \***********************************************************/
/*! exports provided: GroupChatAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupChatAdminPage", function() { return GroupChatAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _group_details_group_details_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../group-details/group-details.page */ "./src/app/group-details/group-details.page.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-linkifyjs */ "./node_modules/ngx-linkifyjs/esm5/ngx-linkifyjs.es5.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");










// import { FabContainer } from '@ionic/angular';











// import { LongPressModule } from 'ngx-long-press';
// import { LongPressModule } from 'ionic-long-press';






var STORAGE_KEY = 'my_files';
var GroupChatAdminPage = /** @class */ (function () {
    function GroupChatAdminPage(formBuilder, groupService, storage, router, route, sanitizer, file, actionSheetCtrl, transfer, loadingCtrl, imagePicker, navCtrl, 
    // public navParams: NavParams,
    toastCtrl, camera, modalCtrl, webview, platform, filePath, ref, fileChooser, http, androidPermissions, socket, modalController, translate, alertController, helper, contactsService, location, actionSheetController, linkifyService, clipboard) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.groupService = groupService;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.sanitizer = sanitizer;
        this.file = file;
        this.actionSheetCtrl = actionSheetCtrl;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.webview = webview;
        this.platform = platform;
        this.filePath = filePath;
        this.ref = ref;
        this.fileChooser = fileChooser;
        this.http = http;
        this.androidPermissions = androidPermissions;
        this.socket = socket;
        this.modalController = modalController;
        this.translate = translate;
        this.alertController = alertController;
        this.helper = helper;
        this.contactsService = contactsService;
        this.location = location;
        this.actionSheetController = actionSheetController;
        this.linkifyService = linkifyService;
        this.clipboard = clipboard;
        this.longpress = false;
        this.longpressclass = ["message-bubble-received-flex"];
        this.lang = 'EN';
        this.idval = "";
        this.adminidval = "";
        this.images = [];
        this.adminname = "";
        this.docs = [];
        this.uploading = false;
        this.loadingChats = true;
        this.isAdmin = false;
        this.ANDROID_PERMISSIONS = [
            'android.permission.READ_EXTERNAL_STORAGE',
            'android.permission.WRITE_EXTERNAL_STORAGE',
        ];
        this.filtered_users = [];
        this.filtered = false;
        this.fileArray = [];
        this.fileSourceArray = [];
        this.findMatch = function (memberid, messageFor) {
            var found = JSON.stringify(messageFor).includes("\"memberid\":\"" + memberid + "\"");
            // // console.log('HAI', found);
            return found ? found : false;
        };
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
        this.storage.get('language')
            .then(function (lang) {
            if (lang) {
                _this.lang = lang;
            }
        });
        this.storage.get('mobile')
            .then(function (mobile) {
            if (mobile) {
                _this.mobile = mobile;
            }
        });
        if (this.filtered == false) {
            // console.log('Group-Chat-Page');
            this.sub = this.route.params.subscribe(function (params) {
                // console.log(params['id']);
                _this.id = params['id'];
                // alert(this.id);
            });
            this.storage.get('id').then(function (val) {
                _this.adminidval
                    = val;
                console.log('MY ID', _this.adminidval);
                _this.chat_room = _this.id;
                _this.socket.connect();
                // console.log(this.chat_room);
                _this.temp_name = _this.adminidval;
                // console.log(name)
                _this.socket.emit('set-name', _this.temp_name);
                _this.chatData();
                _this.socket.fromEvent('message-' + _this.chat_room).subscribe(function (message) {
                    // console.log('MESSAGE', message);
                    _this.chatData();
                    var read_all = {
                        id: _this.id,
                        user_id: _this.adminidval
                    };
                    _this.groupService.putChatReadAll(read_all)
                        .subscribe(function (read) {
                        // console.log("READ", read);
                    });
                    return true;
                });
                var read_all = {
                    id: _this.id,
                    user_id: _this.adminidval
                };
                // console.log(read_all);
                _this.groupService.putChatReadAll(read_all)
                    .subscribe(function (read) {
                    // console.log("READ", read);
                });
                _this.routerWatch();
            });
            this.storage.get('name').then(function (val2) {
                _this.adminname
                    = val2;
            });
            this.groupform = this.formBuilder.group({
                message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S*$/)]],
                adminid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                adminname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            });
        }
    }
    GroupChatAdminPage.prototype.ngOnInit = function () {
        this.chatArray = this.formBuilder.group({});
        // Set itt(i.e. in eg. as 1) as form control name and itterate on the basis of the front end
        this.chatArray.addControl("1", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
    };
    GroupChatAdminPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.images);
        console.log(this.images.length);
        if ((!this.platform.is('ios') && !this.platform.is('android')) && this.images.length) {
            this.uploading = true;
            var new_name = this.createFileName(this.images[0].name);
            var formData = new FormData();
            formData.append('image', this.images[0].filePath, new_name);
            this.uploadFileData(formData, new_name);
        }
        else {
            console.log(this.groupform.value);
            if (this.groupform.value.message && !this.docs.length && !this.images.length) {
                if (this.noSpaceValidator() == true) {
                    var file_message_1 = this.groupform.value;
                    file_message_1.messageBy = this.adminidval;
                    this.findAdmin()
                        .then(function (val) {
                        console.log(val);
                        file_message_1.messageFor = [val[0].memberid];
                        console.log('OTHERS', file_message_1);
                        _this.cleanUpload(file_message_1);
                    });
                }
                else {
                    alert("Only spaces not allowed");
                }
            }
            if (this.platform.is('ios') || this.platform.is('android')) {
                this.startUpload();
            }
        }
        // }
        // else{
        // }
    };
    GroupChatAdminPage.prototype.noSpaceValidator = function () {
        console.log(this.groupform.value.message);
        if (this.groupform.value.message.trim() == 0) {
            return false;
            console.log("false");
        }
        else {
            return true;
            console.log("true");
        }
    };
    GroupChatAdminPage.prototype.replyOnClick = function (event) {
        this.current_event = event;
        // Setting Color
        var currentID = event.target.id.replace('-reply', '');
        var messageID = currentID + '-bubble';
        document.getElementById(messageID).classList.toggle('active');
        if (document.getElementById(currentID + '-reply').getAttribute('color') == 'dark') {
            document.getElementById(currentID + '-reply').setAttribute('color', 'primary');
        }
        else {
            document.getElementById(currentID + '-reply').setAttribute('color', 'dark');
        }
        // Toggling text area
        document.getElementById(currentID + '-textarea').classList.toggle('hidden');
    };
    GroupChatAdminPage.prototype.longPress = function (itt) {
        // console.log("I AM LONG PRESSED")
        this.longpress = true;
        // this.longpressclass[itt] = "message-bubble-received-flex-longpress";
        // console.log(this.longpress)
        // // console.log(this.longpressclass[itt])
        this.reportAlert([itt]);
    };
    GroupChatAdminPage.prototype.reportAlert = function (_a) {
        var itt = _a[0];
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var value, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        value = this.translate.instant(['Report_Message', 'Report_confirm', 'cancel', 'Report'], { value: this.lang });
                        return [4 /*yield*/, this.alertController.create({
                                header: value.Report_Message,
                                message: value.Report_confirm,
                                buttons: [
                                    {
                                        text: value.cancel,
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            // console.log('Confirm Cancel: blah');
                                            // this.longpressclass[itt] = "message-bubble-received-flex";
                                        }
                                    }, {
                                        text: value.Report,
                                        role: 'okay',
                                        handler: function () {
                                            // console.log('Confirm Okay');
                                            // this.longpressclass[itt] = "message-bubble-received-flex-reported";
                                            _this.presentToast("This_feed_has_been_reported");
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _b.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _b.sent();
                        alert.onDidDismiss().then(function (res) {
                            // console.log(res);
                            if (res.role == 'cancel') {
                                // this.longpressclass[itt] = "message-bubble-received-flex"
                            }
                            if (res.role == 'okay') {
                                // this.longpressclass[itt] = "message-bubble-received-flex-reported"
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupChatAdminPage.prototype.ionViewWillLoad = function () {
        // console.log('ion view will load');
        this.chatData;
    };
    GroupChatAdminPage.prototype.chatData = function () {
        var _this = this;
        // console.log("CHAT DATA CALLED")
        this.groupService.getChat(this.id).subscribe(function (result) {
            var res = result;
            // console.log('RES', res);
            _this.img_src = res.avatar;
            _this.data = res;
            console.log('DATA', _this.data);
            _this.groupService.selectedGroup = res['name'];
            _this.idval = res['_id'];
            _this.groupService.groups = res['chats'];
            _this.helper.getChatstatus(res['chats'], res.members)
                .then(function (status) {
                console.log('STATUS', status);
                if (status) {
                    _this.showBlock = true;
                }
            });
            _this.findAdmin().then(function (res) {
                console.log(res);
                _this.group_admin_id = res[0].memberid;
                console.log(_this.group_admin_id);
                console.log(_this.adminidval);
            });
            if (res['chats'].length) {
                _this.checkAdmin().then(function (filterData) {
                    // console.log("filter data:", filterData)
                    if (filterData) {
                        filterData[0].admin ? _this.isAdmin = true : _this.isAdmin = false;
                    }
                });
                _this.loadingChats = false;
            }
            else {
                _this.loadingChats = false;
            }
            // console.log('CHAT GROUPS', this.groupService.groups);
            for (var _i = 0, _a = _this.groupService.groups; _i < _a.length; _i++) {
                var chat_group = _a[_i];
                _this.chatArray.addControl(chat_group._id, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
            }
            _this.checkSources(res['chats']);
            _this.members = res.memberData;
            _this.ref.detectChanges();
            _this.contentArea.scrollToBottom();
        });
    };
    GroupChatAdminPage.prototype.replyToMessage = function (value, message_by) {
        // console.log(this.chatArray.value[value]);
        // console.log(this.chatArray);
        // console.log(value)
        var file_message = {};
        file_message.replyFor = value;
        file_message.messageBy = this.adminidval;
        file_message.messageFor = [message_by._id];
        // Backend Handle
        if (this.chatArray.value[value] && !this.docs.length && !this.images.length) {
            file_message.message = this.chatArray.value[value];
            // console.log(file_message);
            this.cleanUpload(file_message);
        }
        // if(this.isAdmin == false){
        //   // console.log('BLA')
        //   this.findAdmin()
        //   .then(val =>{
        //     // console.log('VAL', val)
        //     file_message.messageFor = [val[0].memberid];
        //     // console.log('ADMIN',file_message);
        //   })
        // } 
        // else {
        //   // console.log('BLA2')
        //   this.findOthers()
        //   .then(val => {
        //     // console.log(val)
        //     // console.log('OTHERS', file_message);
        //     this.cleanUpload(file_message)
        //   })
        // }
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.startUpload();
        }
        // Front End
        this.chatArray.controls[value].setValue('');
        // this.chatArray.value[value] = "";
        var currentID = this.current_event.target.id.replace('-reply', '');
        var messageID = currentID + '-bubble';
        document.getElementById(messageID).classList.toggle('active');
        if (document.getElementById(currentID + '-reply').getAttribute('color') == 'dark') {
            document.getElementById(currentID + '-reply').setAttribute('color', 'primary');
        }
        else {
            document.getElementById(currentID + '-reply').setAttribute('color', 'dark');
        }
        // Toggling text area
        document.getElementById(currentID + '-textarea').classList.toggle('hidden');
    };
    GroupChatAdminPage.prototype.addmember = function (val) {
        this.router.navigate(['home/tabs/tab1/creategroup/addmember/' + val]);
    };
    GroupChatAdminPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.scrollToBottom(); // For messsages already present
        this.messageContainers.changes.subscribe(function (list) {
            _this.scrollToBottom(); // For messages added later
        });
    };
    GroupChatAdminPage.prototype.scrollToBottom = function () {
        try {
            console.log('scrollToBottom called');
            this.window.nativeElement.top = this.window.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log('SCROLL ERROR', err);
        }
    };
    GroupChatAdminPage.prototype.checkAdmin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = _this.data.members.filter(function (m) { return m.memberid == _this.adminidval; });
            // console.log('RESULT', result);
            resolve(result);
        });
    };
    GroupChatAdminPage.prototype.findAdmin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = _this.data.members.filter(function (m) { return m.admin == true; });
            resolve(result);
        });
    };
    GroupChatAdminPage.prototype.findOthers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var a = _this.data.members;
            var b = [];
            a.splice(a.findIndex(function (e) { return e.memberid == _this.adminidval; }), 1);
            a.forEach(function (element) {
                b.push(element.memberid);
            });
            // var result = this.data.members.filter(m => m.admin == true)
            resolve(b);
        });
    };
    GroupChatAdminPage.prototype.reset = function () {
        this.groupform.controls['message'].reset();
    };
    GroupChatAdminPage.prototype.sharedvalue = function () {
    };
    GroupChatAdminPage.prototype.isDifferentDay = function (messageIndex) {
        if (messageIndex === 0)
            return true;
        var d1 = new Date(this.allMessages[messageIndex - 1].timeStamp);
        var d2 = new Date(this.allMessages[messageIndex].timeStamp);
        return (d1.getFullYear() !== d2.getFullYear() ||
            d1.getMonth() !== d2.getMonth() ||
            d1.getDate() !== d2.getDate());
    };
    GroupChatAdminPage.prototype.createAudioVideoChat = function (video) {
        // console.log('going to video chat page')
        var extra = {
            queryParams: {
                special: JSON.stringify({
                    room_id: this.chat_room,
                    video: video
                })
            }
        };
        this.router.navigate(['create-video-chat'], extra);
    };
    GroupChatAdminPage.prototype.goToVideoChatPage = function () {
        // console.log('Navigating to Video Chat Page')
        var extra = {
            queryParams: {
                special: JSON.stringify({
                    data: this.data,
                })
            }
        };
        this.router.navigate(['video-chat/' + this.idval], extra);
    };
    GroupChatAdminPage.prototype.goToAudioCallPage = function () {
        // console.log('Navigating to Audio Call Page')
        this.router.navigate(['audio-call/' + this.chat_room]);
    };
    /* ONLINE FIX */
    // loadStoredImages() {
    //   this.storage.get(STORAGE_KEY).then(images => {
    //     if (images) {
    //       let arr = JSON.parse(images);
    //       this.images = [];
    //       for (let img of arr) {
    //         let filePath = this.file.dataDirectory + img;
    //         let resPath = this.pathForImage(filePath);
    //         this.images.push({ name: img, path: resPath, filePath: filePath });
    //       }
    //     }
    //   });
    // }
    GroupChatAdminPage.prototype.presentToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.get('language').then(function (language) {
                    console.log(language);
                    _this.translate.get(text, { value: language })
                        .subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var toast;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.toastCtrl.create({
                                        message: res,
                                        duration: 3000,
                                        position: "bottom",
                                    })];
                                case 1:
                                    toast = _a.sent();
                                    toast.present();
                                    this.ref.detectChanges();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    GroupChatAdminPage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.platform.is('ios') && !this.platform.is('android')) {
                    document.getElementById('image').click();
                }
                else {
                    this.helper.selectImage()
                        .then(function (imgResponse) {
                        console.log('IMAGE RESPONSE', imgResponse);
                        _this.images = imgResponse.images;
                        _this.docs = imgResponse.docs;
                        _this.currentFileType = 'image';
                        console.log(_this.images);
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    GroupChatAdminPage.prototype.selectVideoFromGallery = function () {
        var _this = this;
        if (!this.platform.is('ios') && !this.platform.is('android')) {
            document.getElementById('video').click();
        }
        else {
            this.helper.selectVideoFromGallery()
                .then(function (videoResponse) {
                console.log('VIDEO RESPONSE', videoResponse);
                _this.images = videoResponse.images;
                _this.docs = videoResponse.docs;
                _this.currentFileType = 'video';
            });
        }
    };
    //   takePicture(sourceType: PictureSourceType) {
    //     var options: CameraOptions = {
    //         quality: 65,
    //         sourceType: sourceType,
    //         saveToPhotoAlbum: false,
    //         correctOrientation: true
    //     };
    //     this.camera.getPicture(options).then(imagePath => {
    //         this.startProcess(imagePath, 'image', sourceType);
    //     });
    //   }
    // selectVideoFromGallery() {
    //   if(!this.platform.is('ios') && !this.platform.is('android')){
    //     // console.log('desktop')
    //     document.getElementById('video').click();
    //   }
    //   else {
    //     const options: CameraOptions = {
    //       quality: 65,
    //       destinationType: this.camera.DestinationType.FILE_URI,
    //       mediaType: this.camera.MediaType.VIDEO,
    //       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //     }
    //     this.camera.getPicture(options).then(imagePath => {
    //       this.startProcess(imagePath, 'video', this.camera.PictureSourceType.PHOTOLIBRARY);    
    //     });                  
    //   }
    // }
    // startProcess(file, type, sourceType){
    //   this.docs = [];
    //   this.images = [];
    //   // console.log("PROCESS STARTED");
    //   this.currentFileType = type;
    //   if ((this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) || (this.platform.is('android') && type == 'doc')) {
    //         // console.log("FILE: ", file)
    //         let path = file.toString();
    //         if(type != 'doc'){
    //           file = path.indexOf('file://') > -1 ? file : 'file://' + file.toString() ;
    //         }
    //         this.filePath.resolveNativePath(file)
    //             .then(filePath => {
    //                 // console.log("FILE PATH", filePath);
    //                 let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
    //                 let currentName = new String();
    //                 if(type === 'image'){
    //                   currentName = file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('?'));
    //                 }
    //                 else {
    //                   currentName = filePath.substring(filePath.lastIndexOf('/') + 1);
    //                 }
    //                 this.copyFileToLocalDir(correctPath, currentName, this.createFileName(filePath.substring(filePath.lastIndexOf('/') + 1)));
    //             }); 
    //     } else {
    //         var currentName = file.substr(file.lastIndexOf('/') + 1);
    //         var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
    //         this.copyFileToLocalDir(correctPath, currentName, this.createFileName(file.lastIndexOf('/') + 1));
    //     }
    // }
    GroupChatAdminPage.prototype.createFileName = function (fileName) {
        var ext = this.getFileExtension(fileName);
        console.log("EXT", ext);
        var d = new Date(), n = d.getTime(), newFileName = n + '.' + ext;
        console.log("FILE NAME", fileName);
        return newFileName;
    };
    //   copyFileToLocalDir(namePath, currentName, newFileName) {
    //     this.checkPermissions().then(() => {
    //       this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
    //         this.updateStoredFiles(newFileName, currentName);
    //       }, error => {
    //         // console.log("COULD NOT STORE FILE", error)
    //         // let value = this.translate.instant(['Error_while_storing_file'], { value: this.lang })
    //         this.presentToast("Error_while_storing_file");
    //       });
    //     })
    //   }
    //   updateStoredFiles(name, oldName) {
    //     this.storage.get(STORAGE_KEY).then(files => {
    //       let arr = JSON.parse(files);
    //       if (!arr) {
    //         let newFiles = [name];
    //         this.storage.set(STORAGE_KEY, JSON.stringify(newFiles));
    //       } else {
    //         arr.push(name);
    //         this.storage.set(STORAGE_KEY, JSON.stringify(arr));
    //       }
    //       let filePath = this.file.dataDirectory + name;
    //       //IF NOT DOC
    //       if (this.currentFileType != 'doc') {
    //         let resPath = this.pathForImage(filePath);
    //         let newEntry = {
    //           name: name,
    //           path: resPath,
    //           filePath: filePath,
    //           displayName: oldName
    //         };
    //         this.images = [newEntry, ...this.images];
    //         this.ref.detectChanges(); // trigger change detection cycle
    //         // console.log("NEW IMGS", this.images)
    //       }
    //       //IF DOC
    //       else {
    //         let newEntry = {
    //           name: name,
    //           filePath: filePath
    //         };
    //         this.docs = [newEntry, ...this.docs];
    //         // console.log("NEW DOCS", this.docs)
    //       }
    //     });
    //   }
    //   pathForImage(img) {
    //     if (img === null) {
    //       return '';
    //     } else {
    //       let converted = this.webview.convertFileSrc(img);
    //       return converted;
    //     }
    //   }
    GroupChatAdminPage.prototype.deleteFile = function (fileEntry, position) {
        var _this = this;
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) { return name != fileEntry.name; });
            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            // tslint:disable-next-line: prefer-const
            var correctPath = fileEntry.filePath.substr(0, fileEntry.filePath.lastIndexOf('/') + 1);
            _this.file.removeFile(correctPath, fileEntry.name).then(function (res) {
                // let value = this.translate.instant(['File_removed'], { value: this.lang })
                _this.presentToast("File_removed");
            });
        });
    };
    GroupChatAdminPage.prototype.startUpload = function () {
        var _this = this;
        this.uploading = true;
        console.log(this.uploading);
        console.log('STARTED UPLOAD');
        if (this.images) {
            this.images.forEach(function (imgEntry) {
                _this.getFileFromLocal(imgEntry.filePath);
            });
        }
        if (this.docs) {
            this.docs.forEach(function (docEntry) {
                _this.getFileFromLocal(docEntry.filePath);
            });
        }
    };
    GroupChatAdminPage.prototype.getFileFromLocal = function (entry) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(entry)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            // let value = this.translate.instant(['Error_while_reading_file'], { value: this.lang })
            _this.presentToast("Error_while_reading_file");
        });
    };
    GroupChatAdminPage.prototype.readFile = function (file) {
        var _this = this;
        console.log("FILE TYPE", file.type);
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var fileBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('image', fileBlob, file.name);
            _this.uploadFileData(formData, file.name);
        };
        reader.readAsArrayBuffer(file);
    };
    GroupChatAdminPage.prototype.uploadFileData = function (formData, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uploadCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                uploadCall = this.http.post("http://198.12.92.202:5000/upload/single-file", formData)
                    .subscribe(function (res) {
                    console.log(res);
                    console.log(res['error']);
                    if (res['error']) {
                        // let value = this.translate.instant(['File_upload_failed'], { value: this.lang })
                        _this.presentToast("File_upload_failed");
                    }
                    else {
                        // let value = this.translate.instant(['File_upload_success'], { value: this.lang })
                        _this.presentToast("File_upload_success");
                        console.log("SUCCESS IS WORKING");
                        var file_message_2 = _this.groupform.value;
                        file_message_2.messageBy = _this.adminidval;
                        file_message_2.attachment = name;
                        file_message_2.file = true;
                        file_message_2.fileType = _this.currentFileType;
                        _this.findAdmin()
                            .then(function (val) {
                            console.log(val);
                            file_message_2.messageFor = [val[0].memberid];
                            console.log('OTHERS', file_message_2);
                            _this.cleanUpload(file_message_2);
                        });
                    }
                }, function (err) {
                    console.log("UPLOAD FAILED", err);
                    _this.uploading = false;
                    _this.images = [];
                    _this.docs = [];
                });
                return [2 /*return*/];
            });
        });
    };
    GroupChatAdminPage.prototype.cleanUpload = function (file_message) {
        var _this = this;
        console.log("FILE MESSAGE", file_message);
        this.groupService.putChat(file_message, this.id).subscribe(function (res) {
            _this.uploading = false;
            _this.images = [];
            _this.docs = [];
            console.log('EMITTING');
            _this.socket.emit('send-message', {
                text: file_message.message,
                room: _this.chat_room,
                sent_from: _this.temp_name,
                user_id: _this.adminidval,
                mobile: _this.mobile,
                type: 1,
                messageFor: file_message.messageFor
            });
            _this.ref.detectChanges();
            _this.reset();
            _this.chatData();
            _this.currentFileType = new String();
            if (file_message.file == true && file_message.message.length) {
                delete file_message["attachment"];
                delete file_message["fileType"];
                delete file_message["file"];
                _this.cleanUpload(file_message);
            }
        });
    };
    GroupChatAdminPage.prototype.getExt = function (entry) {
        var file = entry.path.toString();
        var splits = file.split('.');
        var ext = splits[(splits.length - 1)];
        var isnum = /^\d+$/.test(ext);
        if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'gif' || ext == '' || isnum == true || file.includes('data:image')) {
            return 'image';
        }
        else {
            return 'video';
        }
    };
    GroupChatAdminPage.prototype.getFileExtension = function (entry) {
        var file = entry.toString();
        var splits = file.split('.');
        var ext = splits[(splits.length - 1)];
        return ext;
    };
    GroupChatAdminPage.prototype.selectAFile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // console.log('Select File')
                this.helper.selectAFile()
                    .then(function (fileResponse) {
                    console.log('File RESPONSE', fileResponse);
                    _this.images = fileResponse.images;
                    _this.docs = fileResponse.docs;
                    _this.currentFileType = 'doc';
                    _this.ref.detectChanges();
                });
                return [2 /*return*/];
            });
        });
    };
    GroupChatAdminPage.prototype.deleteDoc = function (pos) {
        this.docs.splice(pos, 1);
    };
    GroupChatAdminPage.prototype.checkPermissions = function () {
        var _this = this;
        // console.log('Requesting Android Permissions');
        return new Promise(function (resolve, reject) {
            _this.androidPermissions.requestPermissions(_this.ANDROID_PERMISSIONS)
                .then(function () {
                var promisesArray = [];
                _this.ANDROID_PERMISSIONS.forEach(function (permission) {
                    // console.log('Checking ', permission);
                    promisesArray.push(_this.androidPermissions.checkPermission(permission));
                });
                Promise.all(promisesArray).then(function (responses) {
                    var allHasPermissions = true;
                    responses.forEach(function (response, i) {
                        allHasPermissions = response.hasPermission;
                        if (!allHasPermissions) {
                            reject(new Error('Permissions denied: ' + _this.ANDROID_PERMISSIONS[i]));
                        }
                    });
                    resolve();
                }).catch(function (err) {
                });
            })
                .catch(function (err) { return console.error('Error requesting permissions: ', err); });
        });
    };
    GroupChatAdminPage.prototype.viewImage = function (src) {
        // console.log('viewImage', src);
        this.router.navigate(['view-image', src]);
    };
    GroupChatAdminPage.prototype.viewVideo = function (src) {
        // console.log('viewVideo', src);
        this.router.navigate(['view-video', src]);
    };
    GroupChatAdminPage.prototype.detailsPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filtered = false;
                        return [4 /*yield*/, this.modalController.create({
                                component: _group_details_group_details_page__WEBPACK_IMPORTED_MODULE_19__["GroupDetailsPage"],
                                componentProps: {
                                    'group_id': this.id
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onWillDismiss().then(function (data) {
                            // console.log(data)
                            if (data.data && data.data.members) {
                                // console.log('MEMBERS', data.data.members)
                                _this.filtered_users = data.data.members;
                                // console.log(this.groupService.groups);
                                _this.filtered = true;
                                // console.log(this.filtered);
                                _this.ref.detectChanges();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GroupChatAdminPage.prototype.addReplyControl = function (element) {
        this.chatArray.addControl(element, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
        // console.log(this.chatArray);
        // if((parseInt(element) + 1) == this.feeds.length){
        //   this.loadingFeeds = false;
        // }
    };
    GroupChatAdminPage.prototype.goToSendMessagePage = function () {
        var extra = {
            queryParams: {
                special: JSON.stringify({
                    data: this.data,
                    room_id: this.chat_room
                })
            }
        };
        this.router.navigate(['send-message'], extra);
    };
    GroupChatAdminPage.prototype.routerWatch = function () {
        var _this = this;
        this.routerSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == '/group-chat-admin/' + _this.id) {
                    _this.chatData();
                    _this.ref.detectChanges();
                }
            }
        });
    };
    GroupChatAdminPage.prototype.ionPageWillLeave = function () {
        this.routerSubscription.unsubscribe();
    };
    // onLongPress(){
    //   // console.log("LONGPRESS BALLE BALLE")
    // }
    GroupChatAdminPage.prototype.getFileFromBrowser = function (event, type) {
        var _this = this;
        this.images = [];
        // console.log(event)
        // console.log(event.target['files'][0])
        var fileList = event.target['files'];
        if (fileList.length > 0) {
            var file = fileList[0];
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            var newEntry = {
                name: file.name,
                path: reader.result,
                filePath: file,
                displayName: file.name,
                type: type
            };
            if (type != 'doc') {
                _this.images = [newEntry].concat(_this.images);
                _this.currentFileType = type;
            }
        };
        reader.readAsDataURL(file);
    };
    GroupChatAdminPage.prototype.back = function () {
        this.groupService.selectedGroup = null;
        this.router.navigateByUrl('/home/tabs/tab1');
    };
    GroupChatAdminPage.prototype.acceptGroup = function () {
        var _this = this;
        this.helper.acceptGroup(this.idval)
            .then(function (accepted) {
            if (accepted)
                // this.chatData();
                _this.showBlock = false;
            _this.ref.detectChanges();
        })
            .catch(function (err) { return console.log('ACCEPT ERROR', err); });
    };
    GroupChatAdminPage.prototype.rejectGroup = function () {
        var _this = this;
        this.helper.rejectGroup(this.idval)
            .then(function (removed) {
            if (removed)
                _this.router.navigate(['home/tabs/tab1']);
            _this.ref.detectChanges();
        })
            .catch(function (err) { return console.log('REJECT ERROR', err); });
    };
    GroupChatAdminPage.prototype.checkSources = function (chats) {
        var _this = this;
        console.log(chats);
        if (chats.length) {
            var files = chats.filter(function (chat) { return chat.file == true; });
            files.forEach(function (file, index) {
                _this.helper.checkFileExists(file.attachment)
                    .then(function (exists) {
                    _this.fileArray[file._id] = exists;
                    _this.getSource(exists, file.attachment)
                        .then(function (source) {
                        console.log('SOURCE', source);
                        _this.fileSourceArray[file._id] = source;
                        if (index == (files.length - 1)) {
                            console.log('FILE ARRAY', _this.fileArray);
                            console.log('FILE ARRAY FILE', _this.fileSourceArray);
                            _this.ref.detectChanges();
                        }
                        ;
                    });
                });
            });
            // var other_chats = chats.filter(chat => (chat.messageBy && (chat.messageBy._id != this.adminidval)));
            chats.forEach(function (element, index) {
                if (typeof element.messageBy != 'undefined' && (element.messageBy._id != _this.adminidval)) {
                    var name = _this.contactsService.getContactName(element.messageBy._id);
                    console.log(name);
                    _this.groupService.groups[index].messageBy.name = name ? name : element.messageBy.mobile;
                }
                if (element.message) {
                    var linkifyoptions = {
                        events: {
                            click: function (e) {
                                alert('Link clicked!');
                                console.log('CLICKED');
                                console.log(e);
                            },
                            mouseover: function (e) {
                                alert('Link hovered!');
                            }
                        },
                        target: {
                            url: '_system'
                        }
                    };
                    element.message = _this.linkifyService.linkify(element.message, linkifyoptions);
                }
            });
        }
    };
    GroupChatAdminPage.prototype.openFile = function (file, id) {
        this.helper.openFile(file)
            .then(function (done) { console.log(done); })
            .catch(function (err) { console.log(err); });
    };
    GroupChatAdminPage.prototype.downloadAttachment = function (file, i) {
        document.getElementById('download-' + i).classList.toggle('hidden');
        document.getElementById('spinner-' + i).classList.toggle('hidden');
        this.helper.downloadFile(file)
            .then(function (downloaded) {
            console.log('FILE DOWNLOADED SUCCESFULLY');
            document.getElementById('spinner-' + i).classList.toggle('hidden');
            document.getElementById('play-' + i).classList.toggle('hidden');
        });
        // setTimeout(() => {
        //   document.getElementById('spinner-' + i).classList.toggle('hidden');
        //   document.getElementById('play-' + i).classList.toggle('hidden');
        // }, 3000)
    };
    GroupChatAdminPage.prototype.getSource = function (local, attachment) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('GET SOURCE');
            if (local) {
                _this.helper.getStoredFile(attachment)
                    .then(function (file) { resolve(file); console.log('RES', file); })
                    .catch(function (err) { console.log('ERORR', err); reject(err); });
            }
            else {
                resolve('http://198.12.92.202/public/uploads/' + attachment);
            }
        });
    };
    GroupChatAdminPage.prototype.myActions = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'What do you want to do',
                            buttons: [{
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.deleteAlert(id);
                                    }
                                }, {
                                    text: 'Copy',
                                    icon: 'copy',
                                    handler: function () {
                                        var chat = _this.data.chats.find(function (c) { return c._id == id; });
                                        console.log(chat);
                                        if (chat.message) {
                                            console.log(chat.message);
                                            _this.clipboard.copy(chat.message);
                                            _this.presentToast("Copied to Clipboard");
                                        }
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupChatAdminPage.prototype.othersActions = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'What do you want to do',
                            buttons: [{
                                    text: 'Report',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.reportAlert(id);
                                    }
                                }, {
                                    text: 'Copy',
                                    icon: 'copy',
                                    handler: function () {
                                        var chat = _this.data.chats.find(function (c) { return c._id == id; });
                                        console.log(chat);
                                        if (chat.message) {
                                            console.log(chat.message);
                                            _this.clipboard.copy(chat.message);
                                            _this.presentToast("Copied to Clipboard");
                                        }
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupChatAdminPage.prototype.deleteAlert = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var value, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = this.translate.instant(['Delete_Message', 'Delete_confirm', 'cancel', 'Delete'], { value: this.lang });
                        return [4 /*yield*/, this.alertController.create({
                                header: value.Delete_Message,
                                message: value.Delete_confirm,
                                buttons: [
                                    {
                                        text: value.cancel,
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel: blah');
                                            // this.longpressclass[itt] = "message-bubble-received-flex";
                                        }
                                    }, {
                                        text: value.Delete,
                                        role: 'okay',
                                        handler: function () {
                                            console.log('Confirm Okay');
                                            _this.deleteChat(id)
                                                .then(function (res) {
                                                _this.presentToast("The chat has been deleted");
                                                _this.chatData();
                                            })
                                                .catch(function (err) { console.log(err); });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupChatAdminPage.prototype.deleteChat = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var body = { id: _this.id, chat_id: id };
            _this.groupService.deleteChat(body).subscribe(function (deleted) { resolve(true); }, function (err) { reject(err); });
        });
    };
    GroupChatAdminPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__["FilePath"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__["FileChooser"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__["AndroidPermissions"] },
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__["Socket"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_20__["HelperService"] },
        { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_22__["ContactsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_23__["NgxLinkifyjsService"] },
        { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_24__["Clipboard"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], GroupChatAdminPage.prototype, "contentArea", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("messageContainer"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], GroupChatAdminPage.prototype, "messageContainers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('window', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GroupChatAdminPage.prototype, "window", void 0);
    GroupChatAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-chat-admin',
            template: __webpack_require__(/*! raw-loader!./group-chat-admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/group-chat-admin/group-chat-admin.page.html"),
            providers: [_services_helper_service__WEBPACK_IMPORTED_MODULE_20__["HelperService"]],
            styles: [__webpack_require__(/*! ./group-chat-admin.page.scss */ "./src/app/group-chat-admin/group-chat-admin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__["FilePath"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__["FileChooser"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__["AndroidPermissions"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__["Socket"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_20__["HelperService"],
            _services_contacts_service__WEBPACK_IMPORTED_MODULE_22__["ContactsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_23__["NgxLinkifyjsService"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_24__["Clipboard"]])
    ], GroupChatAdminPage);
    return GroupChatAdminPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~group-chat-admin-group-chat-admin-module~send-message-send-message-module-es5.js.map