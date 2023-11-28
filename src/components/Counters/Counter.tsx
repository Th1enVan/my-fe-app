/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync
} from '../../state/counter/counterSlice';
import { AppDispatch, RootState } from '../../state/store';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>
          {' '}
          Increment{' '}
        </button>
        <button onClick={() => dispatch(decrement())}> Decrement </button>
      </div>
    </div>
  );
};

export default Counter;
