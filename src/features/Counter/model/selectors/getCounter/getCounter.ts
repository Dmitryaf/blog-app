import { StateSchema } from 'shared/config/redux/StateSchema';

const getCounter = (state: StateSchema) => state.counter;

export default getCounter;
