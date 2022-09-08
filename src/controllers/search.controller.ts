import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/Pet";

export const SearchController = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  if (!query) {
    res.redirect("/");
    return;
  }

  let list = Pet.getByName(query);

  res.render("pages/page", {
    menu: createMenuObject(""),
    list,
    query
  })
}