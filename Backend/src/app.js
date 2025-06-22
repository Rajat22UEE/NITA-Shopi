import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// ✅ Proper CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "https://loquacious-daifuku-3a4f8e.netlify.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// ✅ Routes
import router from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";

app.use("/api/v1/users", router);
app.use("/api/v1/product", productRouter);

// ✅ Export app
export { app };
