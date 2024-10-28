import {
    useDeferredValue,
    useState,
  } from 'react';
  
  import SlowList from './SlowList';
  
  /**
   * Handle slow display when multiple components need to render
   */
  const UseDefferedValue = () => {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query); // this will render after we finish typing
  
    return (
      <div className='tutorial'>
        <SlowList text={deferredQuery} />
        {/* <SlowList text={query} /> */}
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search...'
        />
      </div>
    );
  };
  
  export default UseDefferedValue;