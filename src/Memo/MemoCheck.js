import React, {memo} from 'react';


function MemoCheck(props) {
  console.warn('internal component', props.data);
  return (
    <div>MemoCheck</div>
  )
}

export default memo(MemoCheck)