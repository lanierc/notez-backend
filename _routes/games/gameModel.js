"use strict";
const { model: Character } = require("../characters/characterModel");
const { model: Filter } = require("../filters/filterModel");

const mongoose = require("mongoose");
const { Schema } = mongoose;
const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  name_ja: {
    type: String,
  },
  name_ko: {
    type: String,
  },
  "name_zh-cn": {
    type: String,
  },
  "name_zh-tw": {
    type: String,
  },
  name_it: {
    type: String,
  },
  name_es: {
    type: String,
  },
  name_pt: {
    type: String,
  },
  name_ru: {
    type: String,
  },
  name_fr: {
    type: String,
  },
  characters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Character,
    },
  ],
  filters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Filter,
    },
  ],
});

exports.model = mongoose.model("Game", gameSchema);
