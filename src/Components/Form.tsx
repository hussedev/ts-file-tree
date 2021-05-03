import React, { useState } from 'react';
import 'Components/Form.css';
const Form: React.FC<{
  retrieveTree: Function;
  formStatus: boolean;
}> = ({ retrieveTree, formStatus }) => {
  const [path, setPath] = useState<string>('/public');

  const handleClick = () => {
    retrieveTree(path);
  };

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleChange = (e) => {
    setPath(e.target.value);
  };

  return (
    <div className='form-container'>
      <div className='form'>
        <div className='input-area'>
          <p className='title'>Path:</p>
          <input
            className={formStatus ? 'input' : 'input error'}
            type='text'
            value={path}
            onChange={handleChange}
            onKeyPress={handleKeypress}
          ></input>
        </div>
        {!formStatus ? (
          <p className='errorNotification'>Wrong path, try again :)</p>
        ) : null}
        <button className='button' onClick={handleClick}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Form;
