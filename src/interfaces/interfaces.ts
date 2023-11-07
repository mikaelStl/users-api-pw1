interface IResp {
  status: number;
  message: any;
}

interface IUser {
  id: any;
  name: string;
  username: string;
}

export { IResp, IUser }