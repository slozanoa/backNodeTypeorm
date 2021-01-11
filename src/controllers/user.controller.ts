import {Request,Response} from 'express'
import {getRepository} from 'typeorm'
import {User} from '../entity/User'

export const getUsers = async(req:Request, res:Response): Promise<Response> =>{
    //console.log('getUsers', req, res)
    const users = await getRepository(User).find()

    return res.json(users)
}
export const getUser = async(req:Request, res:Response): Promise<Response> =>{
    const idUser = req.params.id
    const users = await getRepository(User).findOne(idUser)
    return res.json(users)
}
export const createUser = async(req:Request, res:Response): Promise<Response> =>{

    const newUser =  getRepository(User).create(req.body)
    const result = await getRepository(User).save(newUser)

    return res.json(result)

}