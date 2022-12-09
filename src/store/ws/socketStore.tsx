import { DoctorNotification } from '@components/notification/DoctorNotification';

import { Input, notification } from 'antd';
import { createEvent, createStore } from 'effector';

export const connect = createEvent<string>();
export const $socket = createStore<WebSocket | null>(null).on(
  connect,
  (_, payload) => new WebSocket('ws://78.140.241.21:8000/ws/' + payload)
);

$socket.watch((socket) => {
  if (socket) {
    socket.onmessage = () => {
      notification.info({
        key: 1,
        message: 'Notification Title',
        description: 'description.',
      });
    };
  }
});
notification.info({
  key: 1,
  message: 'Notification Title',
  description: <DoctorNotification description={'Плохо'} />,
});
