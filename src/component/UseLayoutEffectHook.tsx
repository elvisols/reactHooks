import {
    useEffect,
    useLayoutEffect,
    useState,
  } from 'react';

  
  const userIds = [1, 2];
  
  const UseLayoutEffect = () => {
    const [userId, setUserId] = useState(userIds[0]);
    const [isAdmin, setIsAdmin] = useState(false);
  
    // This artificially slows down rendering
    let now = performance.now();
    while (performance.now() - now < 200) {
      // Do nothing for a bit...
    }
  
    // same a useEffect but synchronous
    useLayoutEffect(() => {
      setIsAdmin(userId === userIds[0]);
    }, [userId]);
  
    const handleChange = () => {
      const otherId = userIds.find((id) => id !== userId)!;
      setUserId(otherId);
    };
  
    return (
      <div className='tutorial-shorts'>
        <p>userId: {userId}</p>
        <p>Admin: {isAdmin}</p>
        <button title='Change User' onClick={handleChange} />
      </div>
    );
  };
  
  export default UseLayoutEffect;