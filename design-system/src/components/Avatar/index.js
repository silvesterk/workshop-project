import { string } from "prop-types";
import React from "react";
import styled from "styled-components";
import { radii16RadiiTopLeft  } from '../../tokens/dist/radii';

/* Avatar
 *
 * Avatar displays user picture
 */
const Avatar = ({ src, ...props }) => <StyledAvatar src={src} {...props} />;

const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${radii16RadiiTopLeft };
`;

Avatar.propTypes = {
  src: string,
};

export default Avatar;
