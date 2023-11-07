/// <reference path="../typings/express.d.ts" />

import { prisma } from "../database/prisma.client";
import { IResp, ITech, IUser } from "../interfaces/interfaces";

class TechHandler {
  static async list(user: any) {
    user as IUser;
    try {
      const techs = await prisma.technology.findMany({
        where: {
          userId: user.id
        }
      })

      return {
        status: 200,
        message: techs
      } as IResp;
    } catch (error) {
      return {
        status: 400,
        message: error
      } as IResp;
    }
  }

  static async create(infos: ITech, user: any) {
    user as IUser;
    try {
      const tech = await prisma.technology.create({
        data: {
          title: infos.title,
          deadline: new Date(infos.deadline),
          userId: user.id
        }
      });

      return {
        status: 201,
        message: "CREATED!"
      } as IResp
    } catch (error) {
      return {
        status: 400,
        message: error
      } as IResp
    }
  }

  static async delete(data: any, user: any){
    user as IUser;

    const { id } = data;

    try {
      await prisma.technology.delete({
        where: {
          id: id,
          userId: user.id
        }
      })

      return {
        status: 200,
        message: 'DELETED!'
      } as IResp;
    } catch (error) {
      return {
        status: 400,
        message: error
      } as IResp;
    }
  }

  static async update(tech: any, user: any, infos: { title: string, deadline: Date}){
    tech as ITech;
    user as IUser;
    
    try {
      const t = await prisma.technology.update({
        where: {
          id: tech.id,
          userId: user.id
        },
        data: {
          title: infos.title,
          deadline: new Date(infos.deadline)
        }
      });

      return {
        status: 200,
        message: "MODIFIED!"
      } as IResp;
    } catch (error) {
      return {
        status: 400,
        message: error
      } as IResp;
    }
  }

  static async done(tech: any, user: any){
    tech as ITech;
    user as IUser;

    try {
      await prisma.technology.update({
        where: {
          id: tech.id,
          userId: user.id
        },
        data: {
          studied: true
        }
      })

      return {
        status: 200,
        message: "DONE!"
      } as IResp;
    } catch (error) {
      return {
        status: 400,
        message: error
      } as IResp;
    }
  } 
}

export default TechHandler;