/**
*
* SocialLinks
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import Button from './Button';
import Image from '../Image';

function SocialLinks() {
  return (
    <Wrapper>
      <Button>
        <Image src="facebook.png" alt="Facebook" />
      </Button>
      <Button>
        <Image src="wechat.png" alt="WeChat" />
      </Button>
      <Button>
        <Image src="instagram.png" alt="Instagram" />
      </Button>
    </Wrapper>
  );
}

SocialLinks.propTypes = {

};

export default SocialLinks;
