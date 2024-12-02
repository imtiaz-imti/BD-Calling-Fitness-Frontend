import {createReducer} from '@reduxjs/toolkit'
const userDetailsInitialState = {
  userDetails:null,
  loginFailed:false
}
const requestTrainerListInitialState = {
    requestTrainerDetails:null,
    loginFailed:false
}
const availableTrainerListInitialState = {
    availableTrainerDetails:null,
    loginFailed:false
}
const bookTrainerListInitialState = {
    bookTrainerDetails:null,
    loginFailed:false
}
const allTrainerListInitialState = {
    allTrainerDetails:null,
    loginFailed:false
}
const requestAdminListInitialState = {
    requestAdminDetails:null,
    loginFailed:false
}
export const userDetailsReducer = createReducer(userDetailsInitialState, (builder) => {
    builder
      .addCase('set_user', (state, action) => {
        state.userDetails = action.payload
      })
      .addCase('user_fail', (state, action) =>{})
})
export const requestTrainerListReducer = createReducer(requestTrainerListInitialState, (builder) => {
    builder
      .addCase('set_request_list', (state, action) => {
        state.requestTrainerDetails = action.payload
      })
      .addCase('user_fail_list', (state, action) =>{})
})
export const availableTrainerListReducer = createReducer(availableTrainerListInitialState, (builder) => {
    builder
      .addCase('set_new_list', (state, action) => {
        state.availableTrainerDetails = action.payload
      })
      .addCase('user_fail_list', (state, action) =>{})
})
export const bookTrainerListReducer = createReducer(bookTrainerListInitialState, (builder) => {
    builder
      .addCase('set_book_list', (state, action) => {
        state.bookTrainerDetails = action.payload
      })
      .addCase('user_fail_list', (state, action) =>{})
})
export const allTrainerListReducer = createReducer(allTrainerListInitialState, (builder) => {
    builder
      .addCase('set_all_list', (state, action) => {
        state.allTrainerDetails = action.payload
      })
      .addCase('user_fail_list', (state, action) =>{})
})
export const requestAdminListReducer = createReducer(requestAdminListInitialState, (builder) => {
    builder
      .addCase('set_admin_list', (state, action) => {
        state.requestAdminDetails = action.payload
      })
      .addCase('user_fail_list', (state, action) =>{})
}) 