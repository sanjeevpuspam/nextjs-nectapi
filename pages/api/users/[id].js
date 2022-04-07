import nc from "next-connect";
import usersData from "../../../utils/users";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).get( async (req, res) => {
  let { id } = await req.query;
  const user = await usersData.find((user) => user.id == id);
  res.send(user);
});
export default handler;
