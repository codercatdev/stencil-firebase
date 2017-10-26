import { Component, Prop, Event, EventEmitter, Method } from '@stencil/core';

declare var firebase: any;
@Component({
    tag: 'ajonp-firebase-auth',
    styleUrl: 'ajonp-firebase-auth.scss'
})
export class AjonpFirebaseAuth {

    componentDidLoad() {
    }

    @Prop() id: string;
    @Prop() user: string;
    @Prop() provider: string; //'facebook','github','google','twitter'

    @Event() onError: EventEmitter;

    @Method()
    signInWithRedirect(provider: string) {
        return this._attemptProviderSignIn(this._normalizeProvider(provider), firebase.auth);
    }

    render() {
        return (
            <ion-button>This should not be in Auth</ion-button>
        );
    }
    _attemptProviderSignIn(provider: string, method: any) {
        let p = provider || this._providerFromName(provider);
        if (!p) {
            return Promise.reject('Must supply a provider for popup sign in.');
        }
        if (!firebase.auth.Auth) {
            return Promise.reject('No app configured for firebase-auth!');
        }
        return this._handleSignIn(method.call(firebase.auth.Auth, provider));
    }
    _providerFromName(name: string) {
        switch (name) {
            case 'facebook': return new firebase.auth.FacebookAuthProvider();
            case 'github': return new firebase.auth.GithubAuthProvider();
            case 'google': return new firebase.auth.GoogleAuthProvider();
            case 'twitter': return new firebase.auth.TwitterAuthProvider();
            default: this.onError.emit({ 'error': `Unrecognized firebase-auth provider ${name}` });
        }
    }
    _normalizeProvider(provider: any) {
        if (typeof provider === 'string') {
            return this._providerFromName(provider);
        }
        return provider;
    }
    _handleSignIn(promise: any) {
        return promise.catch(function (err) {
            this.onError.emit({'error':err});
            throw err;
        }.bind(this));
    }
}