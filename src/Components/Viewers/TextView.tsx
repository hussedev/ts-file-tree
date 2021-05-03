import React, { useEffect, useState } from 'react';

const TextView: React.FC<{
  path: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ path, setOpen }) => {
  const [text, setText] = useState('');
  useEffect(() => {
    fetch(path)
      .then((response) => {
        if (response.ok) return response.text();
        else return Promise.reject('Could not load file correctly');
      })
      .then((text) => {
        setText(text);
      })
      .catch((error) => console.error(error));
  }, [path]);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className='container'>
      <div onClick={handleClick}>
        {text.split('\n').map((i, key) => {
          return <div key={key}>{i}</div>;
        })}
      </div>
    </div>
  );
};

export default TextView;
