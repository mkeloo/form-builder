import React from 'react';
import { Button } from '@/components/ui/button';
import { MdOutlinePublish } from 'react-icons/md';

const PublishFormBtn = () => {
  return (
    <Button className="gap-2 text-white bg-gradient-to-r from-indigo-400 to-cyan-400">
      <MdOutlinePublish className="h-6 w-6" />
      Publish
    </Button>
  );
};
export default PublishFormBtn;