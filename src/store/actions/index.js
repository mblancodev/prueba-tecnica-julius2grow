import {
  UPDATE_EMPLOYEE,
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  SEARCH_EMPLOYEE,
  VIEW_EMPLOYEE,
  NOTIFY_USER,
  SET_EMPLOYEES_LIST,
} from '../../storeActionTypes';

export const createEmployee = payload => ({
  type: CREATE_EMPLOYEE,
  payload,
});

export const updateEmployee = payload => ({
  type: UPDATE_EMPLOYEE,
  payload,
});

export const deleteEmployee = payload => ({
  type: DELETE_EMPLOYEE,
  payload,
});

export const searchEmployee = payload => ({
  type: SEARCH_EMPLOYEE,
  payload,
});

export const viewEmployee = payload => ({
  type: VIEW_EMPLOYEE,
  payload,
});

export const setEmployeesList = payload => ({
  type: SET_EMPLOYEES_LIST,
  payload,
});

export const notify = payload => ({
  type: NOTIFY_USER,
  payload,
});
