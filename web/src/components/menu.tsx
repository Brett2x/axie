import classnames from "classnames";
import Link from "next/link";
import * as React from "react";


const TELEGRAM_URL = "https://t.me/BrettXY";
const DISCORD_URL = "https://discord.gg/Uaru7PMABH";

export const Menu: React.FC = () => (
  <nav className="flex items-center gap-2">
    <ul className="flex gap-2">
      <MenuItem className="w-full px-2" href="https://discord.com/channels/1190154510249758910/1190393014368088074/1190439296700788786">
        Terms of Service
      </MenuItem>
      <MenuItem className="w-full px-2" href="/examples">
        Products
      </MenuItem>
    </ul>
    <span
      aria-hidden="true"
      className="bg-slate-6 mx-2 hidden h-5 w-px sm:!inline-block"
    />
    <ul className="flex gap-2">
      <MenuItem className="w-8" href={TELEGRAM_URL}>
        <svg
          height="20"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-Linejoin="round"
            stroke-Miterlimit="1.41421"
            fill="currentColor"
          
          />
        </svg>
      </MenuItem>
      <MenuItem className="w-8" href={DISCORD_URL}>
        <svg
          height="20"
          viewBox="0 0 127.14 96.36"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g data-name="Discord Logos" id="Discord_Logos">
              <g
                data-name="Discord Logo - Large - White"
                id="Discord_Logo_-_Large_-_White"
              >
                <path
                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                  fill="currentColor"
                />
              </g>
            </g>
          </g>
        </svg>
      </MenuItem>
    </ul>
  </nav>
);

interface MenuItemProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const MenuItem: React.FC<Readonly<MenuItemProps>> = ({
  className,
  children,
  href,
}) => (
  <li className="inline-flex items-center justify-center">
    <Link
      className={classnames(
        "text-slate-11 inline-flex h-8 items-center justify-center rounded-md text-sm",
        "hover:text-slate-12 hover:bg-white/10",
        "outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  </li>
);
