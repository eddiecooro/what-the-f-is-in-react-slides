import React from 'react';
import CodeSlide from '../SpectacleCodeSlide';

const JSCallStack = ({ stacks, title, ...props }) => {
  const ranges = stacks
    .reduce((stacks, next) => {
      const oldStack = (stacks[stacks.length - 1] || {}).stack || [];
      let newStack = (next.stack && next.stack.add && oldStack.concat(next.stack.add)) || oldStack;
      newStack = (next.stack && next.stack.pop && oldStack.filter(s => s.name !== next.stack.pop)) || newStack;
      return stacks.concat({ ...next, stack: newStack });
    }, [])
    .map(stack => {
      return {
        ...stack,
        title,
        note: (
          <>
            {stack.note}
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>args</th>
                  <th>return</th>
                </tr>
              </thead>
              <tbody>
                {stack.stack.map(s => (
                  <tr key={s.name}>
                    <th>{s.name}</th>
                    <th>{s.args}</th>
                    <th>{s.return}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )
      };
    });
  return <CodeSlide {...props} ranges={ranges} />;
};

export default JSCallStack;
