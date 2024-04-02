import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {
  newMessage: string = '';
  @Output() sendMessage = new EventEmitter<string>();

  onSendMessage() {
    if (this.newMessage.trim() !== '') {
      this.sendMessage.emit(this.newMessage);
      this.newMessage = '';
    }
  }
}