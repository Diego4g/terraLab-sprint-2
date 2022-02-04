import { http } from "./http";
import "./websockets/client";
import "./websockets/admin";

http.listen(3000, () => console.log("Server running in port 3000"));
