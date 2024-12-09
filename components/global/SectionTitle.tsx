import React from 'react';
import { Separator } from '../ui/separator';

type SectionTitleProps = {
  text: string;
};

const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <div>
      <h2 className='text-3xl font-medium tracking-wider capitalize mb-8'>
        {text}
      </h2>
      <Separator />
    </div>
  );
};

export default SectionTitle;
