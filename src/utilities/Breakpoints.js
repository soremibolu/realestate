// Breakpoint sizes

const size = {
  desktop: "1550px",
  tablet: "1024px",
  mobileL: "768px",
  mobileS: "580px",
};

export const device = {
  desktopL: `only screen and (min-width: ${size.desktop})`,
  tablet: `only screen and (max-width: ${size.tablet})`,
  mobile: `only screen and (max-width: ${size.mobileL})`,
  mobileS: `only screen and (max-width: ${size.mobileS})`,
};

//  import {device} from './breakpoint'
// media ${device.mobileL} {
//     right: 0.5rem;
//     top: 0;
// }
