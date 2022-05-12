interface File {
  id: number;
  name: string;
  path: string;
  extension: string;
  fullPath: string;
}
export interface User {
  id: number;
  email: string;
  nickname: string;
  file: File;
}
