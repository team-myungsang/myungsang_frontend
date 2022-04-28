import { mockUser } from '@mocks/user';
import { User } from '@src/models/user';

interface GetUserResponse {
  id: number;
  email: string;
  nickname: string;
}

export async function getUser(userId: number): Promise<User> {
  // const res = await axios.get<GetUserResponse>(`/users/${userId}`);
  // return res.data;
  console.log(userId);
  const user = await mockUser();
  return user;
}
