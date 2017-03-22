/**
*
* Impressum
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import H2 from '../../components/H2';
import config from '../../config';
import Ul from './Ul';
import Li from './Li';
import A from './A';

function Impressum() {
  return (
    <Wrapper>
      <H2>Impressum</H2>
      <p>
        Swatch Art Peace Hotel prototype design & concept
      </p>
      <Ul>
        {
          config.Impressum.map((imp, i) => (
            <Li key={i}>
              <A href={imp.url} target="_blank">{imp.text}</A>
            </Li>
          ))
        }
      </Ul>
    </Wrapper>
  );
}

Impressum.propTypes = {

};

export default Impressum;
