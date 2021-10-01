import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = "No Server Created";
  serverName = '';
  servers = ['TestServer1', 'TestServer2'];

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true
    }, 3000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server Created!!!";
    this.servers.push("ServerX")
  }

  onUpdateServerName(event: Event){
    //console.log(event.target.value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
