import { File } from './file';

export interface User {
  id: number;
  email: string;
  nickname: string;
  file: File;
}
