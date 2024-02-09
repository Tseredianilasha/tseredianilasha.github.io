import { NavBarItem } from "./navbar";
import { ComponentMap } from "./utils";

type ContentProps = {
  activeItem: NavBarItem;
}

export const Content = (props: ContentProps) => {
  const { activeItem } = props;
  const ActiveComponent = ComponentMap[activeItem].element;

  return (
      <ActiveComponent />
  )
}