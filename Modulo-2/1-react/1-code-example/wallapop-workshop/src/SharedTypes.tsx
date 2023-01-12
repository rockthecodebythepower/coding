export interface InputAndButton {
  color: string;
  backgroundColor: string;
  height: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  justifySelf?: string;
  alignSelf?: string;
  font?: string;
}

export interface InputType extends InputAndButton {
  type: string;
  placeholder?: string;
}

export interface HeadingType {
  color: string;
}

export interface DivType {
  display?: string;
  dir?: string;
  gap?: string;
  wrap?: string;
  justify?: string;
  align?: string;
  backgroundColor?: string;
  height?: string;
  width?: string;
  maxWidth?: string;
  padding?: string;
  flex?: string;
  margin?: string;
  overflow?: string;
  textAlign?: string;
  position?: string;
  top?: string;
  left?: string;
  rigth?: string;
  zIndex?: string;
  transform?: string;
  overflow?: string;
  transition?: string;
  templateColumns?: string;
  templateRows?: string;
  templateAreas?: string;
  area?: string;
}
