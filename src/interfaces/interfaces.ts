interface IResp {
  status: number;
  message: any;
}

interface IUser {
  id: any;
  name: string;
  username: string;
}

interface ITech {
  id: string;
  title: string;
  studied: boolean;
  deadline: Date;
  createdAt: Date;
}

export { IResp, IUser, ITech }