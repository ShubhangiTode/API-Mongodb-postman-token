import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../models/users.models";

var checkUserAuth = async (req: Request, res: Response, next: any) => {
  let token;
  const { authorization } = req.headers;
  console.log(authorization);
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // Get Token from header
      token = authorization.split(" ")[1];
      console.log(token);

      // Verify Token
      const verify = jwt.verify(token, "helloshubh");
      console.log(verify);

      req.user = await UserModel.findOne({ verify });

      // res.status(401).send({
      //   status: "success",
      //   message: "authorized User",
      //   getDesgnDetails,
      // });
    } catch (error) {
      res.status(401).send({ status: "failed", message: "Unauthorized User" });
    }
  }
  if (!token) {
    res
      .status(401)
      .send({ status: "failed", message: "Unauthorized User, No Token" });
  }
  next();
};

export default checkUserAuth;

// token=token.s(' ')[1];
// var privateKey = "helloshubh ";
// const verify = jwt.verify(token, privateKey, err:any) {
//   if (err) {
//     res.send({ message: "Invalid Token" });
//   } else {
//     next();
//   }
// });

// import { Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import desgnModel from "../models/desgn.models";

// export const verifyToken = async (req: Request, res: Response) => {
//   const token = req.body.token || req.query.token || req.headers["auth"];

//   try {
//     const verify = await jwt.verify(token, "helloshubh");
//     console.log("verify", verify);
//     req.user = verify;
//     res.json({
//       data: verify,
//     });
//   } catch (error) {
//     res.json({
//       data: "error",
//     });
//   }
// };

// export const ValidateToken = async (req: Request, res: Response) => {
//   if (
//     req.headers &&
//     req.headers.authorization &&
//     req.headers.authorization.split(" ")[0] === "JWT"
//   ) {
//     try {
//       const verify = jwt.verify(
//         req.headers.authorization.split(" ")[1],
//         "helloshubh"
//       );
//       console.log("verify", verify);
//       req.user = verify;
//       res.json({
//         data: "user authorize successfuliy",
//       });
//     } catch (error) {
//       res.json({
//         data: "unauthoorized login",
//       });
//     }
//   }
// };
