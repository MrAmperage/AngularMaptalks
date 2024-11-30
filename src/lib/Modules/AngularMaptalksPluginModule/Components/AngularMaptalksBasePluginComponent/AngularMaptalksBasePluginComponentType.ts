export type PluginType = "Panel" | "Button";

export type BasePluginOptions = {
  /*Цвет иконки */
  IconColor: `#${string}`;
  /*Цвет фона */
  BackgroundColor: `#${string}`;
  Type: PluginType;
};
