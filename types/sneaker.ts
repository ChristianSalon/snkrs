import { LargeNumberLike } from "crypto";

interface Sneaker {
  id: number;
  name: string;
  price: number;
  description: string;
  photoURL: string;
  bgColor: string;
  textColor: "black" | "white";
}

export default Sneaker;
