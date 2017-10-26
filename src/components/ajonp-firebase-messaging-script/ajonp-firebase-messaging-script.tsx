import { Component } from '@stencil/core';


@Component({
    tag: 'ajonp-firebase-messaging-script',
    styleUrl: 'ajonp-firebase-messaging-script.scss'
})
export class AjonpFirebaseMessagingScript {

    componentDidLoad() {
    }

    render() {
        return (
            <div>
                <script src="/__/firebase/4.5.0/firebase-messaging.js"></script>
            </div>
        );
    }
}