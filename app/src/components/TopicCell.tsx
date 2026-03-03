import { Label } from '@primer/react';
import { useState } from 'react';
import { Popover } from 'react-tiny-popover';

const TopicCell = ({
  topics,
  isSelected,
}: {
  topics: string[];
  isSelected: boolean;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const isOpen = topics.length > 0 && (isHovering || isSelected);

  return (
    <Popover
      isOpen={isOpen}
      content={() => {
        return (
          <div
            className="shadow-xl min-w-64 p-4 rounded space-x-2"
            onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--bgColor-default)',
              border: '1px solid',
              borderColor: 'var(--borderColor-default)',
            }}
          >
            {topics.sort().map((topic) => (
              <Label variant="accent" key={topic}>
                {topic}
              </Label>
            ))}
          </div>
        );
      }}
    >
      <span
        style={{ textOverflow: 'ellipsis' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="space-x-1 m-1"
      >
        {topics.sort().map((topic) => (
          <Label style={{ backgroundColor: 'var(--bgColor-default)' }} key={topic}>
            {topic}
          </Label>
        ))}
      </span>
    </Popover>
  );
};

export default TopicCell;
