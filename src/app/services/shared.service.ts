// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { empty } from 'src/app/utils/functions';

// @Injectable({
//   providedIn: 'root'
// })
// export class SharedDataService {

//   private authUser = new BehaviorSubject({});
//   private userAuthority = new BehaviorSubject({});
//   private userDetails = new BehaviorSubject({});
//   private runningAdvert = new BehaviorSubject({});
//   private runningAdvertDetails = new BehaviorSubject({});
//   private tieredAdvertPackages = new BehaviorSubject({});

//   constructor() { }

//   setAuthUser(user: any) {
//     this.authUser.next(user);
//     if (!empty(user)) {
//       this.setUserAuthority(user.authorities[0]);
//     }
//   }

//   getAuthUser() {
//     return this.authUser.asObservable();
//   }

//   setUserAuthority(authority: object) {
//     this.userAuthority.next(authority);
//   }
//   getUserAuthority() {
//     return this.userAuthority.asObservable();
//   }

//   setUserDetails(details) {
//     this.userDetails.next(details);
//   }
//   getUserDetails() {
//     return this.userDetails.asObservable();
//   }

//   setRunningAdvert(advertInfo: object) {
//     this.runningAdvert.next(advertInfo);
//   }
//   getRunningAdvert() {
//     return this.runningAdvert.asObservable();
//   }

//   setRunningAdvertDetails(advertDetails: object) {
//     this.runningAdvertDetails.next(advertDetails);
//   }
//   getRunningAdvertDetails() {
//     return this.runningAdvertDetails.asObservable();
//   }
//   setTieredAdvertPackages(packages) {
//     this.tieredAdvertPackages.next(packages);
//   }
//   getTieredAdvertPackages() {
//     return this.tieredAdvertPackages.asObservable();
//   }
// }
