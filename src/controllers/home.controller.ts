import { Request, Response } from "express";

export const HomeController = (req: Request, res: Response) => {
  res.render("pages/home");
}