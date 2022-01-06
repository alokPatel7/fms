import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { environment } from '../../environments/environment';

declare const $: any;

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.less'],
})
export class ChatAppComponent implements OnInit {
  socket: any;
  constructor() {}

  ngOnInit(): void {
    this.setupSocketConnection();
  }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    console.log('socket', this.socket);
  }

  ngAfterViewInit(): void {
    $('.messages').animate({ scrollTop: $(document).height() }, 'fast');
    $('#profile-img').click(function () {
      $('#status-options').toggleClass('active');
    });

    $('.expand-button').click(function () {
      $('#profile').toggleClass('expanded');
      $('#contacts').toggleClass('expanded');
    });

    $('#status-options ul li').click(function () {
      $('#profile-img').removeClass();
      $('#status-online').removeClass('active');
      $('#status-away').removeClass('active');
      $('#status-busy').removeClass('active');
      $('#status-offline').removeClass('active');
      $(this).addClass('active');

      if ($('#status-online').hasClass('active')) {
        $('#profile-img').addClass('online');
      } else if ($('#status-away').hasClass('active')) {
        $('#profile-img').addClass('away');
      } else if ($('#status-busy').hasClass('active')) {
        $('#profile-img').addClass('busy');
      } else if ($('#status-offline').hasClass('active')) {
        $('#profile-img').addClass('offline');
      } else {
        $('#profile-img').removeClass();
      }

      $('#status-options').removeClass('active');
    });

    $('.submit').click(function () {
      newMessage();
    });

    $(window).on('keydown', function (e) {
      if (e.which == 13) {
        newMessage();
        return false;
      }
    });
  }
}
function newMessage() {
  let message = $('.message-input input').val();
  if ($.trim(message) == '') {
    return false;
  }
  message;
  $(
    '<li class="replies"><img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" /><p>' +
      message +
      'ldjsflksdjf kjhkdhak sajkkjdyd jsahdykwhsa kjhsdfhywek sdhfkjhdfyf sdkhfkjhdfy djhskdhksadywqksd khsakdhasdyqwhsda ' +
      '</p></li>'
  ).appendTo($('.messages ul'));
  $('.message-input input').val(null);
  $('.contact.active .preview').html('<span>You: </span>' + message);
  $('.messages').animate({ scrollTop: $(document).height() }, 'fast');
}
