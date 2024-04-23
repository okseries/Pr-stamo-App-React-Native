export const getInitials = (name: string) => {
    const nameArray = name.split(' ');
    return nameArray
      .map((word) => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2);
  };