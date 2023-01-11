import React from 'react';
import { Arrow } from '../Element';

interface GreetingProps {
    greetings: string;
}

const GreetingSection: React.FunctionComponent<GreetingProps> = ({ greetings }) => {
  return (
    <div className="tk-greeting-section mb-2">
      <div className="title-main">
        <Arrow />
        <span>ABOUT ME</span>
      </div>
      <div className="mb-3">
        <code className="tk-greeting-section__message">{greetings}</code>
      </div>
      <div className="tk-greeting-section__divider"></div>
    </div>
  );
};

export default GreetingSection;
