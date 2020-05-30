import initialDirectoryData from "./__fixtures__/directoryData";

const INITIAL_DIRECTORY_STATE = [ ...initialDirectoryData ];

const directoryReducer = (state = INITIAL_DIRECTORY_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
