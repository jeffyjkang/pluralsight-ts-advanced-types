import { Project, TextLayer, ImageLayer, LayerType, Size } from "./types";

type FieldDescriptions = {
  [key in keyof TextLayer]: string;
};

const fieldDescriptions: FieldDescriptions = {
  text: "This is the default text",
  color: "The color of the teext",
  fontSize: "The size of the font",
  id: "The unique identity of the layer",
  maxWidth: "The max width of the text layer",
  position: "The position fo the top left part of the layer",
  rotation: "The rotation angle of the layer between 0 and 360",
  type: "The type of the layer"
};

Object.entries(fieldDescriptions).forEach(([field, description]) => {
  console.log(`${field}: ${description}`);
});
