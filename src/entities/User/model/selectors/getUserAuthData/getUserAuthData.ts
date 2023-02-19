import { StateSchema } from 'shared/config/redux/StateSchema';

const getUserAuthData = (state: StateSchema) => state.user.authData;

export default getUserAuthData;
