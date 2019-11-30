import {
  Project,
  TextLayer,
  ImageLayer,
  LayerType,
  Size,
  TextMeta,
  ImageMeta
} from "./types";
import { render } from "./render";

const projectSize: Size = {
  width: 512,
  height: 250
};

const textLayer: TextLayer = {
  type: LayerType.Text,
  maxWidth: 1000,
  position: { x: 128, y: 208 },
  color: "#e8166d",
  id: "10",
  rotation: 0,
  text: "Advanced TypeScript",
  fontSize: "20px"
};

const imageLayer: ImageLayer = {
  type: LayerType.Image,

  position: { x: 0, y: 0 },
  id: "20",
  rotation: 0,
  src: "ps-dark.png",
  maxBounds: { width: projectSize.width }
};

// const setMeta = (layer: ImageLayer, meta: ImageMeta): void
// const setMeta = (layer: TextLayer, meta: TextMeta): void
// const setMeta = (layer: ImageLayer | TextLayer, meta: ImageMeta | TextMeta) => {
//   layer.meta = meta;
// };

function setMeta(layer: ImageLayer, meta: ImageMeta): void;
function setMeta(layer: TextLayer, meta: TextMeta): void;
function setMeta(layer: ImageLayer | TextLayer, meta: ImageMeta | TextMeta) {
  layer.meta = meta;
}

// setMeta(imageLayer, {
//   format: "png",
//   origin: "Download"
// });

// setMeta(textLayer, {
//   fontFoundry: "Own foundry",
//   licenseExpiration: new Date()
// });

setMeta(imageLayer, {
  fontFoundry: "Own foundry",
  licenseExpiration: new Date()
});

const project: Project = {
  layers: [imageLayer, textLayer],
  size: projectSize
};

render(project);
