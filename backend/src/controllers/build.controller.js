import * as BuildModel from "../models/build.model.js";

export const getBuilds = async (req, res) => {
  try {

    const builds = await BuildModel.getBuilds();

    res.json(builds);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const createBuild = async (req, res) => {

  try {

    await BuildModel.createBuild(req.body);

    res.status(201).json({
      message: "Build creada"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};