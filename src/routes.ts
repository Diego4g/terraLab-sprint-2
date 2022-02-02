import { Router } from "express";

import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();

routes.post("/settings", settingsController.handle);
routes.post("/users", usersController.handle);

export { routes };
