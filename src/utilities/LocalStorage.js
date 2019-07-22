export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("binder-state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("binder-state", serializedState);
  } catch {
    alert("An error has occurred while saving your data.");
  }
};
