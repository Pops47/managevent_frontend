import { LoginForm } from '../interfaces/LoginForm';
import { useApi } from '../hooks/useApi';

const api = useApi();

export async function getUsers() {
  try {
    const { data } = await api.get('users');
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function getUser() {
  try {
    const { data } = await api.get('users/info');
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function getUsersId(id: string) {
  try {
    const { data } = await api.get(`users/${id}`);
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function postUser(newUser: any) {
  try {
    const { data } = await api.post('auth/register', newUser);
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function loginUser(values: LoginForm) {
  try {
    const { data } = await api.post('auth/login', values);
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function putUser(UpdateUser: any) {
  try {
    const { data } = await api.patch('users', UpdateUser);
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function deleteUser() {
  try {
    const { data } = await api.delete('users');
    return data.data;
  } catch (error) {
    return error;
  }
}
