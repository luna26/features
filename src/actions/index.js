export const selectMenu = (menuId) => {
  return {
    type: 'select_menu',
    payload: menuId
  };
};

export const selectRollCamera = (param) => {
    return {
      type: param,
      payload: param
    };
};

