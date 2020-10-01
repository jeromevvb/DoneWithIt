export type Colors =
  | "primary"
  | "secondary"
  | "white"
  | "medium"
  | "light"
  | "danger"
  | "dark";

const colors: { [name: string]: string } = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  white: "#fff",
  medium: "#6e6969",
  light: "#f8f4f4",
  danger: "#ff5252",
  dark: "#0c0c0c",
};

export default colors;
