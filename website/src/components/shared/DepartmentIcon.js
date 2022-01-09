import ArchitectureIcon from '../../assets/svg/departments/architecture.svg';
import CeramicsIcon from '../../assets/svg/departments/ceramics.svg';
import GraphicsIcon from '../../assets/svg/departments/graphics.svg';
import PaintingIcon from '../../assets/svg/departments/painting.svg';
import SculptureIcon from '../../assets/svg/departments/sculpture.svg';
import React from 'react';

export const iconsNames = [
  'architecture',
  'ceramics',
  'graphics',
  'painting',
  'sculpture',
];
const DEPARTMENT_ICONS = {
  architecture: ArchitectureIcon,
  ceramics: CeramicsIcon,
  graphics: GraphicsIcon,
  painting: PaintingIcon,
  sculpture: SculptureIcon,
};

const DepartmentIcon = ({ name, ...props }) => {
  const IconComponent = DEPARTMENT_ICONS[name];
  return <IconComponent {...props} />;
};

export default DepartmentIcon;
