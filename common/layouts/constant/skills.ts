
import { Adobephotoshop, Enscape, Lumion, Sketchup } from "./icons";

type Skill = {
  tooltip: string;
  SvgIcon: any;
};

export const Skills: Array<Skill> = [
  {
    tooltip: 'Sketchup',
    SvgIcon: Sketchup
  },
  {
    tooltip: 'Lumion',
    SvgIcon: Lumion
  },
  {
    tooltip: 'Adobe Photoshop',
    SvgIcon: Adobephotoshop
  },
  {
    tooltip: 'Enscape',
    SvgIcon: Enscape
  },
];
