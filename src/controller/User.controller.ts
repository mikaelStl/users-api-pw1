/// <reference path="../typings/express.d.ts" />

import { prisma } from '../database/prisma.client'

import { IResp, IUser } from '../interfaces/interfaces'

class UserHandler {
  static async create(infos: IUser) {
    try {
      const user = await prisma.user.create({
        data: {
          name: infos.name,
          username: infos.username
        }
      });
      console.log(user);
      
      return {
        status: 201,
        message: "CREATED!"
      } as IResp;
    } catch (error) {
      return {
        status: 400,
        message: error
      } as IResp;
    }
  }

  static async list() {
    try {
      const users = await prisma.user.findMany({
        include: {
          techs: true
        }
      });
      console.log(users);
      
      return {
        status: 200,
        message: users
      } as IResp
    } catch (error) {
      return {
        status: 400,
        message: error
      } as IResp;
    }
  }

  static async delete(data: any) {
    const { key } = data;
    try {
      const deleted = await prisma.user.delete({
        where: {
          username: key
        }
      });
      
      return {
        status: 200,
        message: "DELETED"
      } as IResp
    } catch (error) {
      return {
        status: 400,
        message: error
      } as IResp;
    }
  }
}

export default UserHandler;



// function getTechByID(id: string, user: User) {  
//   const tech = user.getTechs().find( tech => id === tech.getID());

//   if (tech) {
//     return tech;
//   } else {
//     return false;
//   }
// }