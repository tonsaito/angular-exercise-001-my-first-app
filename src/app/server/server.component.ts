import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    styles: [`
        .online{
            color: white;
        }
    `],
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId: number = 1; //typescript type is automatic
    serverStatus: string = 'online';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}