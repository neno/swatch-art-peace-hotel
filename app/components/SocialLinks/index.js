/**
*
* SocialLinks
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import facebook from '../../img/facebook.png';
import wechat from '../../img/wechat.png';
import instagram from '../../img/instagram.png';
import Button from './Button';

function SocialLinks() {
  return (
    <Wrapper>
      <Button>
        <img src={facebook} alt="Facebook" />
      </Button>
      <Button>
        <img src={wechat} alt="WeChat" />
      </Button>
      <Button>
        <img src={instagram} alt="Instagram" />
      </Button>
    </Wrapper>
  );
}

SocialLinks.propTypes = {

};

export default SocialLinks;
