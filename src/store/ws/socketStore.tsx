import { DoctorNotification } from '@components/notification/DoctorNotification';

import { $userRole } from '@store/auth/authStore';

import { Input, notification } from 'antd';
import { rollup } from 'd3';
import { createEvent, createStore } from 'effector';

export const connect = createEvent();
export const $socket = createStore<WebSocket | null>(null).on(
  connect,
  (_, payload) => new WebSocket('ws://78.140.241.21:8000/ws/doctor')
);

$socket.watch((socket) => {
  if (socket) {
    // socket.onmessage = (e) => {
    //   // const data = JSON.parse(e.data.doctor);
    //   console.log(e);
    //   const role = $userRole.getState();
    //   let des: any = '';
    //   if (role === 'client') {
    //     // if (data.)
    //     console.log(e);
    //     des = 'description';
    //   } else {
    //     des = <DoctorNotification description={'Плохо'} />;
    //   }
    //   notification.info({
    //     key: 1,
    //     message: 'Notification Title',
    //     description: des,
    //   });
    // };
  }
});
