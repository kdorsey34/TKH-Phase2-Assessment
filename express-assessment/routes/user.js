import express, { response } from "express";
import prisma from "../db";

const router = express.Router();

// Create the routes here
router.get("/", async (request, response) =>{

const allUsers = await prisma.user.findMany();

response.status(200).json({
    success: true,
    user: allUsers
})

})

router.post("/", async (request, response) => {
    
    const newUser = await prisma.user.create({
        data: {
            firstName: request.body.user
        }
    });

    console.log(newUser);

    response.status(200).json({
        success: true
    });
})

router.put("/", async (request, response) =>{
    
    const updateUser = await prisma.user.update({
        data: {
            id: request.body.user
        }
    });

    console.log(updateUser);

    response.status(200).json({
        success: true
    });
})

router.delete("/", async (request, response) => {
//delete a user 
const deleteUser = await prisma.user.delete({
    data: {
        id: response.body.user
    }
});

console.log(deleteUser);

response.status(200).json({
    success: true
});

})

router.get("/:admin", async (request, response)=>{

    const allAdminUsers = await prisma.user.findMany();

    response.status(200).json({
        success: true,
        user: allAdminUsers
    })
    
})
export default router;
