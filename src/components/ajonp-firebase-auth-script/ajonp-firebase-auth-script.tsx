import { Component } from '@stencil/core';

@Component({
    tag: 'ajonp-firebase-auth-script',
    styleUrl: 'ajonp-firebase-auth-script.scss'
})
export class AjonpFirebaseAuthScript {
    render() {
        return (
            <div>
                <script src="/__/firebase/4.5.0/firebase-auth.js"></script>
            </div>
        );
    }
}