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
