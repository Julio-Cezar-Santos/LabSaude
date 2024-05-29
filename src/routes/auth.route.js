const { Router } = require("express");
const router = Router();

import {login} from "../controllers/auth.controller.js";

router.post("/", login);

module.exports = router;