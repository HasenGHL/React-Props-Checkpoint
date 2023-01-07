import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  const { fullName, bio, profession, image, handleName } = props;
  return (
    <div style={{ backgroundColor: '#eee', padding: '20px', width: '20%', margin: '50px auto', borderRadius:'12px' }}>
      {image}
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Click me!</button>
    </div>
  );
}

Profile.defaultProps = {
  fullName: 'John Doe',
  bio: 'I am a developer.',
  profession: 'Web Developer',
  image: <img src="https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile photo" className="rounded-circle" />,
  handleName: (name) => alert(`Hello, ${name}!`),
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  image: PropTypes.element,
  handleName: PropTypes.func,
};

export default Profile;
