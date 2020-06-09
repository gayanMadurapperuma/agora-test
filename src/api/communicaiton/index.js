import Instance from '../';

export const onCall = async (info) => {
  try {
    const {status, data} = await Instance.post('demo/call', info);
    if (status !== 200) {
      throw new Error();
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const saveToken = async (info) => {
  try {
    const {status, data} = await Instance.post('demo/add', info);
    if (status !== 200) {
      throw new Error();
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFriends = async () => {
  try {
    const {status, data} = await Instance.get('demo/users');
    if (status !== 200) {
      throw new Error();
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
