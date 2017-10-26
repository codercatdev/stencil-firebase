import { Component, Prop, Event, EventEmitter, Method } from '@stencil/core';
import * as auth from 'firebase/auth';

@Component({
    tag: 'ajonp-firebase-auth',
    styleUrl: 'ajonp-firebase-auth.scss'
})
export class AjonpFirebaseAuth {

    componentDidLoad() {
    }
    @Event() userUpdated: EventEmitter;
    @Prop() id: string;
    @Prop() user: string;
    @Prop() provider: string; //'facebook','github','google','twitter'

    @Event() onError: EventEmitter;

    @Method()
    signInWithRedirect(provider: string) {
        return this._attemptProviderSignIn(this._normalizeProvider(provider), auth);
    }

    render() {
    }
    _attemptProviderSignIn(provider: string, method: any) {
        let p = provider || this._providerFromName(provider);
        if (!p) {
            return Promise.reject('Must supply a provider for popup sign in.');
        }
        if (!auth.Auth) {
            return Promise.reject('No app configured for firebase-auth!');
        }
        return this._handleSignIn(method.call(auth.Auth, provider));
    }
    _providerFromName(name: string) {
        switch (name) {
            case 'facebook': return new auth.FacebookAuthProvider();
            case 'github': return new auth.GithubAuthProvider();
            case 'google': return new auth.GoogleAuthProvider();
            case 'twitter': return new auth.TwitterAuthProvider();
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