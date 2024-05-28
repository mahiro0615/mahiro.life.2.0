import { cva } from "class-variance-authority";
import { Content } from "./content";
import { classNames } from "../functions/class-names";



export function Header({ children, noBorder = false }) {
  return (
    <Content as="header">
      <div className={classNames(noBorder || "pb-8 border-b")}>{children}</div>
    </Content>
  );
}