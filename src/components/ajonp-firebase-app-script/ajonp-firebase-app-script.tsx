import { Component } from '@stencil/core';


@Component({
    tag: 'ajonp-firebase-app-script',
    styleUrl: 'ajonp-firebase-app-script.scss'
})
export class AjonpFirebaseAppScript {

    componentDidLoad() {
    }

    render() {
        return (
            <div>
                <script src="/__/firebase/4.5.0/firebase-app.js"></script>
            </div>
        );
    }
}