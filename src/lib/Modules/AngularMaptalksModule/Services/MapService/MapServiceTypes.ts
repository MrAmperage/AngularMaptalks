import { Coordinate } from "maptalks";

export type MapConfiguration = {
  Center?: number[] | Coordinate;
  Zoom?: number;
  BaseTileLayerUrlTemplate?: string | (() => string);
};
