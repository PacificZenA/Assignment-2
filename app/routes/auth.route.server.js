import { Router } from "express";
import { DisplayLoginPage, 
    DisplayRegisterPage, 
   } 
    from "../controllers/auth.controller.server.js";

const router = Router();

// Display Login Router
router.get('/login', DisplayLoginPage);
// Process Login Page


// Display Register Router
router.get('/register', DisplayRegisterPage);
// Process Registration Page


// Process lougout 



export default router;