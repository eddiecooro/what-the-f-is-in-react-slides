import React from 'react';
import JSCallStack from './JSCallStack';

const FiberTraversal = ({ stacks, ...props }) => {
  const newStacks = stacks.reduce((stacks, next) => {
    const lastNotes = (stacks[stacks.length - 1] || {}).notes || [];
    const newNotes = { ...lastNotes };
    Object.entries(next.notes || {}).forEach(([key, value]) => {
      if (value) newNotes[key] = next.notes[key];
      else delete newNotes[key];
    });
    return stacks.concat({
      ...next,
      notes: newNotes,
      note: (
        <>
          {Object.entries(newNotes).map(([noteKey, noteValue]) => (
            <div key={noteKey}>
              {noteKey}: {noteValue}
            </div>
          ))}
          <br />
        </>
      )
    });
  }, []);
  return <JSCallStack {...props} stacks={newStacks} />;
};

export default FiberTraversal;
