import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/components/(badge|breadcrumbs|button|calendar|card|checkbox|chip|code|date-input|date-picker|divider|dropdown|input|kbd|link|listbox|menu|modal|navbar|pagination|popover|progress|radio|scroll-shadow|select|slider|spacer|spinner|toggle|table|tabs|user|ripple|avatar).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
