// This file is finished by Yuting Shao and Zihan Xu.
// The get("/listings"), post("/listings/update") are finished by Yuting.
//
// The get("/builders") is finished by Zihan.
//
// The post("/listings/record"), delete("/listings/delete") are collabrated by Yuting and Zihan.
import express from "express";
const router = express.Router();

import { myDB } from "../db/MyMongoDB.js";

router.get("/listings", async function (req, res, next) {
  console.log("get data");

  let universes;

  try {
    universes = await myDB.getUniverses();
    res.status(200).json(universes);
  } catch (e) {
    console.log("Error in db", e);
    res.status(300).json({
      universes: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
  }
});

router.get("/builders", async function (req, res, next) {
  console.log("get data builder");

  let builders;

  try {
    builders = await myDB.getBuilders();
    res.status(200).json(builders);
  } catch (e) {
    console.log("Error in db", e);
    res.status(300).json({
      builders: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
  }
});

router.post("/listings/record", async function (req, res, next) {
  console.log("post data");
  const matchDocument = {
    name: req.body.name,
    builder: req.body.builder,
    last_modified: new Date(),
    N_value: req.body.N,
    O_value: req.body.O,
    Cell_value: req.body.cell,
    dist_value: req.body.dist,
    gravity_value: req.body.gravity,
    protein_value: 0,
    DNA_value: 0,
    years_value: 0,

    prokaryotic_cells_value: 0,

    nucleus_value: req.body.nucleus,
    mitochondria_value: req.body.mitochondria,
    mitosis_value: req.body.mitosis,

    eukaryotic_cells_value: 0,

    asexual_reproduction_value: 0,
    sexual_reproduction_value: 0,

    Final: "",
  };
  if (matchDocument.dist_value === false) {
    if (matchDocument.gravity_value === true) {
      matchDocument.Final = "This is a satellite like the moon";
    } else {
      matchDocument.Final = "This is a frozen planet";
    }
  } else {
    if (matchDocument.gravity_value === true) {
      matchDocument.Final = "This is a small planet without life";
    } else {
      if (
        matchDocument.N_value <= 0 ||
        matchDocument.O_value <= 2 ||
        matchDocument.Cell_value <= 2
      ) {
        matchDocument.Final = "This is a small planet without life";
      } else {
        if (
          matchDocument.mitosis_value >= 3 &&
          matchDocument.mitochondria_value > 2 &&
          matchDocument.nucleus_value > 0
        ) {
          matchDocument.Final = "This is an earth";
        } else if (
          matchDocument.nucleus_value > 0 &&
          matchDocument.mitochondria_value > 2 &&
          matchDocument.mitosis_value < 3
        ) {
          matchDocument.Final = "This is a planet with plant";
        } else {
          matchDocument.Final = "This is a small planet without life";
        }
      }
    }
  }
  const matchDocument2 = {
    builder: req.body.builder,
    universe: req.body.name
  };
  try {
    await myDB.insertUniverse(matchDocument);
    await myDB.insertBuilder(matchDocument2);
    console.log("Added a new element!");
    res.status(204).send();
  } catch (e) {
    console.log("Error in db", e);
    res.status(400).send("Error inserting one element!");
  }
});

router.post("/listings/update", async function (req, res, next) {
  console.log("update data");
  const matchDocument = {
    name: req.body.name,
    builder: req.body.builder,
    last_modified: new Date(),
    N_value: req.body.N,
    O_value: req.body.O,
    Cell_value: req.body.cell,
    dist_value: req.body.dist,
    gravity_value: req.body.gravity,
    nucleus_value: req.body.nucleus,
    mitochondria_value: req.body.mitochondria,
    mitosis_value: req.body.mitosis,
  };
  if (matchDocument.dist_value === false) {
    if (matchDocument.gravity_value === true) {
      matchDocument.Final = "This is a satellite like the moon";
    } else {
      matchDocument.Final = "This is a frozen planet";
    }
  } else {
    if (matchDocument.gravity_value === true) {
      matchDocument.Final = "This is a small planet without life";
    } else {
      if (
        matchDocument.N_value <= 0 ||
        matchDocument.O_value <= 2 ||
        matchDocument.Cell_value <= 2
      ) {
        matchDocument.Final = "This is a small planet without life";
      } else {
        if (
          matchDocument.mitosis_value >= 3 &&
          matchDocument.mitochondria_value > 2 &&
          matchDocument.nucleus_value > 0
        ) {
          matchDocument.Final = "This is an earth";
        } else if (
          matchDocument.nucleus_value > 0 &&
          matchDocument.mitochondria_value > 2 &&
          matchDocument.mitosis_value < 3
        ) {
          matchDocument.Final = "This is a planet with plant";
        } else {
          matchDocument.Final = "This is a small planet without life";
        }
      }
    }
  }
  try {
    await myDB.updateUniverse(matchDocument);
    console.log("Updated a new element!");
    res.status(204).send();
  } catch (e) {
    console.log("Error in db", e);
    res.status(400).send("Error updating one element!");
  }
});

router.delete("/listings/delete", async function (req, res, next) {
  console.log("delete data");
  const matchDocument = {
    name: req.body.name,
    builder: req.body.builder,
  };
  try {
    await myDB.deleteUniverse(matchDocument);
    await myDB.deleteBuilder(matchDocument);
    console.log("Deleted a new element!");
    res.status(204).send();
  } catch (e) {
    console.log("Error in db", e);
    res.status(400).send("Error deleting one element!");
  }
});

export default router;
