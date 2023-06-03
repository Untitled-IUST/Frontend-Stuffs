import { createContext } from 'react';

const UserProfileContext = createContext({
  hasEditedProfile: false,
  setHasEditedProfile: () => {}
});

export default UserProfileContext;
