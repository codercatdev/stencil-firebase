import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'ajonp-firebase-auth-demo',
  styleUrl: 'ajonp-firebase-auth-demo.scss'
})
export class AjonpFirebaseAuthDemo {
  @Listen('userUpdated')
  userUpdatedHandler(event: CustomEvent) {
    console.log('Received the custom userUpdated event: ', event.detail);
  }
  signInClick(){
    const ajonpFirebaseAuth:any = document.querySelector('ajonp-firebase-auth');
    ajonpFirebaseAuth.signInWithRedirect('google');
  }
  render() {
    return (
      <div>
        <ajonp-firebase-app 
        apiKey="AIzaSyCmVJbcAY9i-cVWURK-8P0gk1ecyoJLWoQ" 
        authDomain="ajonp-polymerfire.firebaseapp.com" 
        databaseURL="https://ajonp-polymerfire.firebaseio.com"
        projectId="ajonp-polymerfire" 
        storageBucket="ajonp-polymerfire.appspot.com" 
        messagingSenderId="388083239820"></ajonp-firebase-app>
        <ajonp-firebase-auth provider="google"></ajonp-firebase-auth>
        <button onClick={() => this.signInClick()}>Google Signin</button>
      </div>
    );
  }
}
