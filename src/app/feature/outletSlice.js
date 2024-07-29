import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLargeHidden: true,
    isMobileNavOpen: false,
    isOverlayVisible: false,
    isChatsOpen: false,
    isChatOpen: false,
    isCartVisible: false,
    isMessagesVisible: false,
    isNotificationsVisible: false,
    isFriendsVisible: false,
    isSettingsVisible: false,
    isProfileMenuOpen: false,
    isAccountMenuOpen: false,
    isGroupsMenuOpen: false,
    isStoreMenuOpen: false,
    isMainLinksMenuOpen: false,
    searchInput: "",
    isMiniMenuHidden: false,
    isFloatyHidden: false,
    isMyFlokkMenuOpen: false,
    isMySidekicksMenuOpen: false,
    isMarketplaceMenuOpen: false,
    isChatMenuOpen:false,
};

export const outletSlice = createSlice({
    name: "outlet",
    initialState,
    reducers: {
        setIsLargeHidden(state, action) {
            state.isLargeHidden = action.payload.value;
        },
        setIsMobileNavOpen(state, action) {
            state.isMobileNavOpen = action.payload.value;
        },
        setIsOverlayVisible(state, action) {
            state.isOverlayVisible = action.payload.value;
        },
        setIsChatsOpen(state, action) {
            state.isChatsOpen = action.payload.value;
        },
        setIsChatOpen(state, action) {
            state.isChatOpen = action.payload.value;
        },
        setIsCartVisible(state, action) {
            state.isCartVisible = action.payload.value;
        },
        setIsMessagesVisible(state, action) {
            state.isMessagesVisible = action.payload.value;
        },
        setIsNotificationsVisible(state, action) {
            state.isNotificationsVisible = action.payload.value;
        },
        setIsFriendsVisible(state, action) {
            state.isFriendsVisible = action.payload.value;
        },
        setIsSettingsVisible(state, action) {
            state.isSettingsVisible = action.payload.value;
        },
        setIsProfileMenuOpen(state, action) {
            state.isProfileMenuOpen = action.payload.value;
        },
        setIsAccountMenuOpen(state, action) {
            state.isAccountMenuOpen = action.payload.value;
        },
        setIsGroupsMenuOpen(state, action) {
            state.isGroupsMenuOpen = action.payload.value;
        },
        setIsStoreMenuOpen(state, action) {
            state.isStoreMenuOpen = action.payload.value;
        },
        setIsMainLinksMenuOpen(state, action) {
            state.isMainLinksMenuOpen = action.payload.value;
        },
        setSearchInput(state, action) {
            state.searchInput = action.payload.value;
        },
        setIsMiniMenuHidden(state, action) {
            state.isMiniMenuHidden = action.payload.value;
        },
        setIsFloatyHidden(state, action) {
            state.isFloatyHidden = action.payload.value;
        },
        setIsMyFlokkMenuOpen(state, action) {
            state.isMyFlokkMenuOpen = action.payload.value;
        },
        setIsMySidekicksMenuOpen(state, action) {
            state.isMySidekicksMenuOpen = action.payload.value;
        },
        setIsMarketplaceMenuOpen(state, action) {
            state.isMarketplaceMenuOpen = action.payload.value;
        },
        setIsChatMenuOpen(state, action) {
            state.isChatMenuOpen = action.payload.value;
        }
    }
});

export const {
    setIsOverlayVisible,
    setIsChatOpen,
    setIsChatsOpen,
    setIsLargeHidden,
    setIsMobileNavOpen,
    setIsCartVisible,
    setIsFriendsVisible,
    setIsMessagesVisible,
    setIsNotificationsVisible,
    setIsSettingsVisible,
    setIsAccountMenuOpen,
    setIsGroupsMenuOpen,
    setIsProfileMenuOpen,
    setIsStoreMenuOpen,
    setIsMainLinksMenuOpen,
    setSearchInput,
    setIsMiniMenuHidden,
    setIsFloatyHidden,
    setIsMyFlokkMenuOpen,
    setIsMySidekicksMenuOpen,
    setIsMarketplaceMenuOpen,
    setIsChatMenuOpen } = outletSlice.actions;

export default outletSlice.reducer;
