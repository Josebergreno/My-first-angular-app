import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServe: boolean = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['test server 1', 'test server 2'];
  showData = true;
  clickArray = [0];

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
  }

  onNotEmptyString() {
    return this.userName === '' ? true : false;
  }
  onUserNameReset() {
    this.userName = '';
  }

  onShowDataToggle() {
    this.clickArray.push(this.clickArray[this.clickArray.length - 1] + 1);
    return this.showData === true
      ? (this.showData = false)
      : (this.showData = true);
  }
}
