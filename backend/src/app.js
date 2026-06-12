import express from "express";
import cors from "cors";

import usuarioRoutes from "./routes/usuario.routes.js";
import componenteRoutes from "./routes/componente.routes.js";
import buildRoutes from "./routes/build.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/componentes", componenteRoutes);
app.use("/api/builds", buildRoutes);

export default app;