import { Component } from '@stencil/core';


@Component({
    tag: 'ajonp-firebase-database-script',
    styleUrl: 'ajonp-firebase-database-script.scss'
})
export class AjonpFirebaseDatabaseScript {

    componentDidLoad() {
    }

    render() {
        return (
            <div>
                <script src="/__/firebase/4.5.0/firebase-database.js"></script>
            </div>
        );
    }
}