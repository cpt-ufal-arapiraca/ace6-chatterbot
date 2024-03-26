import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {
  newMessage: string = '';
  @Output() receivedMessage = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  onSendMessage() {
    if (this.newMessage.trim() !== '') {
      this.http.post<any>('/api/messages', { message: this.newMessage })
        .subscribe(response => {
          this.receivedMessage.emit(response.response);
        });
      this.newMessage = '';
    }
  }
}