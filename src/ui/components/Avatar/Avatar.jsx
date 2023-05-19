import React from 'react';
import { Container } from './avatar.styled';

function Avatar({ imgUrl, label }) {
  return <Container href={imgUrl} atl={label} />;
}

export default Avatar;
