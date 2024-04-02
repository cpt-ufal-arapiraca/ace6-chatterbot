// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: { text: string, isUser: boolean }[] = [];

  sendMessage(message: string) {
    this.messages.push({text: message, isUser: true });
    this.messages.push({text: 'Resposta do bot', isUser: false});
  }
}