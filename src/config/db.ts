import mongoose, { connect } from "mongoose";

function connects() {
  return connect(
    "mongodb+srv://dbUser:dbUser@cluster0.5xwhbin.mongodb.net/test"
  )
    .then(() => {
      console.log("db Connected");
    })
    .catch((error: any) => {
      console.log(error);
    });
}
export default connects;
