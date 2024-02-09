import { ComponentMap } from "./utils";

const NavBarItems = ['Character', 'Abilities', 'Quests', 'Achievements', 'Contact'] as const;

export type NavBarItem = (typeof NavBarItems)[number];

type NavBarProps = {
  onActiveChange: (active: NavBarItem) => void;
}

export const Navbar = (props: NavBarProps) => {
  const {onActiveChange} = props;
  const hoverStyle = 'hover:text-red-300 hover:shadow hover:shadow-red-500/50';
  return (
    <div className='flex flex-col w-full gap-10 h-screen items-center justify-center text-4xl bg-zinc-950 '>
      {NavBarItems.map(item => 
        <div className={`flex items-center gap-1 justify-center w-1/5 h-full rounded text-white ${hoverStyle} transition-all duration-1000`}>
          {ComponentMap[item].icon}
          <span 
            className={`flex items-center justify-center h-full p-1 rounded-b cursor-pointer`} 
            onClick={() => onActiveChange(item)}
          >
            {item}
          </span>
        </div>
      )}
    </div>
  )
}