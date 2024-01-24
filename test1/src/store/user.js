import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false,
    },
    reducers: {
        usersSearched: (users) => {
            users.loading = true;
            users.list = [];
        },
        usersReceived: (users, action) => {
            const {items} = action?.payload || {}
            users.list = items;
            users.loading = false;
        },
        usersSearchedFailed: (users) => {
            users.loading = false;
            users.list = [];
        },
        resetSearchedUserResult: (users) => {
            users.loading = false;
            users.list = [];
        },
    },
});

export default slice.reducer;

const { usersSearched, usersReceived, usersSearchedFailed, resetSearchedUserResult } = slice.actions;

const url = "/search/users";

export const searchUsers = (searchText) => (dispatch) => {
     const queryString = 'q=' + encodeURIComponent(`${searchText}`) + '&per_page=100';
    return dispatch(
        apiCallBegan({
            url: `${url}?${queryString}`,
            onStart: usersSearched.type,
            onSuccess: usersReceived.type,
            onError: usersSearchedFailed.type,
        })
    );
};

export const resetSearchResult = () =>  (dispatch) => {
    return dispatch({
        type: resetSearchedUserResult.type, 
        payload: {},
    })
}