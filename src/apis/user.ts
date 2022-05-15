import { User } from '@src/models/user';
import axios from 'axios';

export async function getUser(userId: number): Promise<User> {
  const res = await axios.get<User>(`/users/${userId}`);
  return res.data;
}

export async function getMe(): Promise<User> {
  try {
    const res = await axios.get<User>(`/users/me`);
    return res.data;
  } catch (error) {
    throw new Error('getMe Error');
  }
}
