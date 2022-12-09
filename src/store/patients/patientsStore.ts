import { http } from '@server/http';
import { urls } from '@server/urls';

import { UserRole } from '@type/auth/authType';
import { Page } from '@type/server/serverType';
import { UserType } from '@type/user/userType';

import { createEffect, createStore } from 'effector';

export const fetchPatientsListFx = createEffect(async () => {
  const res = await http.get<Page<UserType>>(urls.users());
  const data = res.data;
  return data.items.filter((i) => i.role === UserRole.client);
});

export const $patientsList = createStore<UserType[]>([]).on(
  fetchPatientsListFx.doneData,
  (_, payload) => payload
);

export const fetchPatientInfoFx = createEffect(async (id: string) => {
  const res = await http.get<UserType>(urls.userId(id));
  return res.data;
});

export const $patientInfo = createStore<UserType | null>(null).on(
  fetchPatientInfoFx.doneData,
  (_, payload) => payload
);
