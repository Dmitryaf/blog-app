import { StateSchema } from 'shared/config/redux/StateSchema';

const getLoginState = (state: StateSchema) => state?.loginForm;

export default getLoginState;
