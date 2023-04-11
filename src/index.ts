import express, { Request, Response } from "express";
import router from "./routes";
import connects from "./config/db";
const app = express();
const PORT = 4011;

app.use(express.json());
app.use("/", router);
app.get("/", router);

// app.use("/api/user", require("./routes/user.routes"));
// app.use("/api/Designation", require("./routes/desgn.routes"));
app.get("/test", (req: Request, resp: Response): void => {
  resp.json({ data: "test page" });
});
connects();

app.listen(PORT, (): void => {
  console.log(`server is running on ${PORT}`);
});
export default router;
