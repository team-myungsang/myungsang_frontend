import { File } from './file';

export interface User {
  id: number;
  email: string;
  name: string;
  file: File;
}
