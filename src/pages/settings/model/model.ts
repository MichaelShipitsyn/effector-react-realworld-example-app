import { createEvent, createEffect, createStore } from 'effector';
import * as api from 'api';
import * as auth from 'features/user';
import { createFormEvents } from 'library/form';
import * as types from './types';

export const { fieldChanged, handleFieldChanged } = createFormEvents();
export const formSubmitted = createEvent<React.FormEvent>();

export const changeUserDataFx = createEffect<
  auth.types.User,
  void,
  types.ErrorType
>({
  handler: (user) => api.put('/user', { user }),
});

export const $errors = createStore<types.ErrorType>({ errors: [] });
