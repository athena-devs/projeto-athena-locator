import { PrismaUsersRepository } from "@services/user-services/repositories/prisma";
import { UsersCreateUseCase, UsersGetUseCase, UsersDeleteUseCase, UsersUpdateUseCase } from "@services/user-services/use-cases";

export function makeUsersCreateUseCase() {
    const prismaUsersRepository  = new PrismaUsersRepository()
    const  usersCreateUseCase = new UsersCreateUseCase(prismaUsersRepository)

    return usersCreateUseCase
}

export function makeUsersUpdateUseCase() {
    const prismaUsersRepository  = new PrismaUsersRepository()
    const  usersUpdateUseCase = new UsersUpdateUseCase(prismaUsersRepository)

    return usersUpdateUseCase
}

export function makeUsersGetUseCase() {
    const prismaUsersRepository  = new PrismaUsersRepository()
    const  usersGetUseCase = new UsersGetUseCase(prismaUsersRepository)

    return usersGetUseCase
}

export function makeUsersDeleteUseCase() {
    const prismaUsersRepository  = new PrismaUsersRepository()
    const  usersDeleteUseCase = new UsersDeleteUseCase(prismaUsersRepository)

    return usersDeleteUseCase
}
