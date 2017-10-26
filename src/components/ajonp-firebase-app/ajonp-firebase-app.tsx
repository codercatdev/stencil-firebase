import { Component, Prop, State } from '@stencil/core';
import firebase from "firebase/app";


@Component({
    tag: 'ajonp-firebase-app',
    styleUrl: 'ajonp-firebase-app.scss'
})
export class AjonpFirebaseApp {
    @State() app: any;
    @Prop() apiKey: string;
    @Prop() authDomain: string;
    @Prop() databaseURL: string;
    @Prop() projectId: string;
    @Prop() storageBucket: string;
    @Prop() messagingSenderId: string;
    componentWillLoad() {
        this.app = firebase.initializeApp({
            apiKey: this.apiKey,
            authDomain: this.authDomain,
            databaseURL: this.databaseURL,
            projectId: this.projectId,
            storageBucket: this.storageBucket,
            messagingSenderId: this.messagingSenderId
        })
        console.log(this.app)
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}