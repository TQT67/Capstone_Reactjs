import React from 'react';
import { useAppSelector } from '../../store/hooks';

interface HeaderProps {
  textLogo: string;
  fullName: string;
  // other props
}

// cach 1: const Header = ({ textLogo, fullName }: HeaderProps)
// cach 2: const Header: React.FC<HeaderProps> = ({ textLogo, fullName })

const Header: React.FC<HeaderProps> = ({ textLogo, fullName }) => {
  const { currentUser } = useAppSelector((state) => state.user.currentUser);

  return (
    <div>
      {textLogo}
      {fullName}
    </div>
  );
};

export default Header;
