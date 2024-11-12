import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParamas {
    firstName: string;
    lastName: string;
}

async function insertUser(email:string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);
    
}
insertUser("one@gmail.com", "12345678", "First", "User");

async function updateUser(email: string, {firstName, lastName}: UpdateParamas){
    const res = await prisma.user.update({
        where: {
            email
        },
        data: {
            firstName,
            lastName
        }
    })
    console.log(res);
    
}
updateUser("one@gmail.com", {firstName: "UpdatedOne", lastName: "UpdatedUser"})

async function getUser(email: string){
    const res = await prisma.user.findUnique({
        where: {email}
    })
    // const res = await prisma.user.findMany()
    // console.log(res);    
}
getUser("one@gmail.com")