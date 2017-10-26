import { Component } from '@stencil/core';

@Component({
  tag: 'ajonp-firebase-auth-demo',
  styleUrl: 'ajonp-firebase-auth-demo.scss'
})
export class AjonpFirebaseAuthDemo {

  render() {
    return (
      <ion-app>
        <ajonp-firebase-app-script></ajonp-firebase-app-script>
        <ajonp-firebase-auth-script></ajonp-firebase-auth-script>
      </ion-app>
    );
  }
}
