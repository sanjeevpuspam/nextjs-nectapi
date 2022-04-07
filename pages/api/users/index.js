import nc from "next-connect";
import usersData from '../../../utils/users';

const handler = nc({
    onError: (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
  })
  .get((req, res) => {
    res.send(usersData);
  })
export default handler;