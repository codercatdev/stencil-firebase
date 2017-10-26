import { Component } from '@stencil/core';


@Component({
    tag: 'ajonp-firebase-storage-script',
    styleUrl: 'ajonp-firebase-storage-script.scss'
})
export class AjonpFirebaseStorageScript {

    componentDidLoad() {
    }

    render() {
        return (
            <div>
                <script src="/__/firebase/4.5.0/firebase-storage.js"></script>
            </div>
        );
    }
}