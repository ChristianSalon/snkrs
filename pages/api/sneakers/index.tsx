import type { NextApiRequest, NextApiResponse } from "next";
import { sneakers } from "../../../sneakers";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const sneakersArray = [...sneakers.values()];
  res.status(200).json(sneakersArray);
};
