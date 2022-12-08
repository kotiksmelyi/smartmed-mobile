import { http } from '@server/http';
import { urls } from '@server/urls';

import { JwtType, LoginApiProps, UserRole } from '@type/auth/authType';

import { createEffect, createEvent, createStore } from 'effector';

export const LOCAL_TOKEN_KEY = 'token';

export const loginFx = createEffect(async (props: LoginApiProps) => {
  const res = await http.get<JwtType>(urls.login(), { params: props });
  localStorage.setItem(LOCAL_TOKEN_KEY, JSON.stringify(res.data));
  return res.data;
});

export const logoutFx = createEffect(async () => {
  await http.get(urls.logout());
  localStorage.removeItem(LOCAL_TOKEN_KEY);
});

export const setUserRole = createEvent<UserRole>();
export const clearUserRole = createEvent();
export const $userRole = createStore<UserRole | null>(null)
  .on(setUserRole, (_, payload) => payload)
  .on(loginFx.doneData, (_, payload) => payload.role)
  .on(logoutFx.doneData, () => null)
  .reset(clearUserRole);
