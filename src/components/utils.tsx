import { ReactNode } from "react";
import { NavBarItem } from "./navbar";
import { About } from "./about";
import hood from '../images/hood.png';
import flame from '../images/flame.png';
import scroll from '../images/scroll.png';
import pentagram from '../images/pentagram.png';
import occult from '../images/occult.png';

const iconStyle = 'h-9 w-9'

export const ComponentMap: Record<NavBarItem, {element: React.FC, icon?: ReactNode}> = {
  'Character': {
    element: About,
    icon: <img src={hood} className={iconStyle} />
  },
  'Abilities': {
    element: About,
    icon: <img src={flame} className={iconStyle} />
  },
  'Quests': {
    element: About,
    icon: <img src={scroll} className={iconStyle} />
  },
  'Achievements': {
    element: About,
    icon: <img src={pentagram} className={iconStyle} />
  },
  'Contact': {
    element: About,
    icon: <img src={occult} className={iconStyle} />
  }
}