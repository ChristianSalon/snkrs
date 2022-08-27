import type { NextApiRequest, NextApiResponse } from "next";
import { sneakers } from "../../../sneakers";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;
  const sneaker = sneakers.get(id);

  if (sneaker) {
    res.status(200).json(sneaker);
  } else res.status(404);
};
