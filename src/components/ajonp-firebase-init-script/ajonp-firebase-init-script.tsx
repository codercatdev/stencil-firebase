import { Component } from '@stencil/core';


@Component({
    tag: 'ajonp-firebase-init-script',
    styleUrl: 'ajonp-firebase-init-script.scss'
})
export class AjonpFirebaseInitScript {

    componentDidLoad() {
    }

    render() {
        return (
            <div>
                <script src="/__/firebase/init.js"></script>
            </div>
        );
    }
}