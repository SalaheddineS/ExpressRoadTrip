import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get('/getRoles',Services.RoleService.getAllRoles);
router.post('/addRole',Services.RoleService.createRole);
router.put('/updateRole/:id',Services.RoleService.updateRole);
router.delete('/deleteRole/:id',Services.RoleService.deleteRole);

export default router;