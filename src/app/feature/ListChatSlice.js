import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenChatList: true,
  isNotification: false,
  isSearch: false,
  isProfile: true,
  isChatRoom: false,
  isVideoCall: false,
  isModelMainChat: false,
  isModelCodeSnipest: false,
  isVideoStream: false,
  isGroupChat: false,
  isReport: false,
  isNewChat: false,
  isReplayMessage: false,
  isReactPeopleInfo: false,
  isForward: false,
  isForwardModel: false,
  selectedAlumaniUniversity: "",
  selectedCollege: "",

  // New Chart
  isListActionPeopleChat: false,
  isOnlineList: true,
  isWrapgroupPeopleChat: false,
  isCreateMessageOptionsModel: false,
  isMessageInfoModel: false,
  isDeleteMessageModel: false,
  deleteMessageData: false,
  isPinMessageModel: false,
  isPinMessage: false,
  isContactsModel: false,
  isSellProductsModel: false,

  isMuteModel:false,
};

export const GlobalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleChatList(state) {
      state.isOpenChatList = !state.isOpenChatList;
    },
    togglePinMessageChat(state) {
      state.isPinMessage = !state.isPinMessage;
    },
    toggleMessageInfo(state) {
      state.isMessageInfoModel = !state.isMessageInfoModel;
    },
    FalseMessageInfo(state) {
      state.isMessageInfoModel = false;
    },
    toggleSellProducts(state) {
      state.isSellProductsModel = !state.isSellProductsModel;
    },
    FalseSellProducts(state) {
      state.isSellProductsModel = false;
    },
    toggleContacts(state) {
      state.isContactsModel = !state.isContactsModel;
    },
    FalseContacts(state) {
      state.isContactsModel = false;
    },
    togglePinMessage(state) {
      state.isPinMessageModel = !state.isPinMessageModel;
    },
    FalsePinMessage(state) {
      state.isPinMessageModel = false;
    },
    toggleDeleteMessage(state) {
      state.isDeleteMessageModel = !state.isDeleteMessageModel;
    },
    FalseDeleteMessage(state) {
      state.isDeleteMessageModel = false;
    },
    toggleNotification(state) {
      state.isNotification = !state.isNotification;
    },
    toggleSearch(state) {
      state.isSearch = !state.isSearch;
    },
    toggleProfile(state) {
      state.isProfile = !state.isProfile;
    },
    toggleChatRoom(state) {
      state.isChatRoom = !state.isChatRoom;
    },
    toggleReport(state) {
      state.isReport = !state.isReport;
    },
    toggleVideoCall(state) {
      state.isVideoCall = !state.isVideoCall;
    },
    toggleVideoStream(state) {
      state.isVideoStream = !state.isVideoStream;
    },
    toggleModelMainChat(state) {
      state.isModelMainChat = !state.isModelMainChat;
    },
    toggleForwardMessage(state) {
      state.isForward = !state.isForward;
    },
    FalseForwardMessage(state) {
      state.isForward = false;
    },
    toggleForwardMessageModel(state) {
      state.isForwardModel = !state.isForwardModel;
    },
    ForwardMessageModelFalse(state) {
      state.isForwardModel = false;
    },
    toggleNewChat(state) {
      state.isNewChat = !state.isNewChat;
    },
    toggleModelCodeSnipest(state) {
      state.isModelCodeSnipest = !state.isModelCodeSnipest;
    },
    toggleGroupChat(state) {
      state.isGroupChat = true;
    },
    toggleReplayMessage(state) {
      state.isReplayMessage = !state.isReplayMessage;
    },
    toggleDmChat(state) {
      state.isGroupChat = false;
    },
    toggleReactPeopleInfo(state) {
      state.isReactPeopleInfo = !state.isReactPeopleInfo;
    },
    ProfileFalse(state) {
      state.isProfile = false;
    },
    ChatListFalse(state) {
      state.isOpenChatList = false;
    },
    ChatRoomFalse(state) {
      state.isChatRoom = false;
    },
    SendCodeFalse(state) {
      state.isModelCodeSnipest = false;
    },
    ReportFalse(state) {
      state.isReport = false;
    },
    NewChatFalse(state) {
      state.isNewChat = false;
    },
    DisplayReactFalse(state) {
      state.isReactPeopleInfo = false;
    },
    setSelectedAlumaniUniversity(state, action) {
      state.selectedAlumaniUniversity = action.payload.university;
    },
    setSelectedCollege(state, action) {
      state.selectedCollege = action.payload.college;
    },
    toggleListActionPeopleChat(state) {
      state.isListActionPeopleChat = !state.isListActionPeopleChat;
    },
    ListActionPeopleChatFalse(state) {
      state.isListActionPeopleChat = false;
    },
    toggleListOnlineListChat(state) {
      state.isOnlineList = !state.isOnlineList;
    },
    ListOnlineListChatFalse(state) {
      state.isOnlineList = false;
    },
    toggleWrapgroupPeopleChat(state) {
      state.isWrapgroupPeopleChat = !state.isWrapgroupPeopleChat;
    },
    WrapgroupPeopleChatFalse(state) {
      state.isWrapgroupPeopleChat = true;
    },
    toggleCreateMessageOptionsModel(state) {
      state.isCreateMessageOptionsModel = !state.isCreateMessageOptionsModel;
    },
    setDeleteMessage: (state, action) => {
      state.deleteMessageData = action.payload;
    },

    setIsMuteModel : (state,action) => {
      state.isMuteModel = action.payload
    }
  },
});

export const {
  toggleChatList,
  toggleNotification,
  toggleSearch,
  toggleProfile,
  toggleChatRoom,
  toggleVideoCall,
  toggleModelMainChat,
  toggleModelCodeSnipest,
  toggleVideoStream,
  toggleGroupChat,
  toggleReport,
  toggleNewChat,
  ChatListFalse,
  ProfileFalse,
  ChatRoomFalse,
  SendCodeFalse,
  toggleDmChat,
  setSelectedAlumaniUniversity,
  setSelectedCollege,
  ReportFalse,
  NewChatFalse,
  toggleReactPeopleInfo,
  toggleReplayMessage,
  DisplayReactFalse,
  toggleForwardMessage,
  toggleForwardMessageModel,
  ForwardMessageModelFalse,
  ListActionPeopleChatFalse,
  toggleListActionPeopleChat,
  toggleListOnlineListChat,
  ListOnlineListChatFalse,
  toggleWrapgroupPeopleChat,
  WrapgroupPeopleChatFalse,
  FalseForwardMessage,
  toggleCreateMessageOptionsModel,
  toggleMessageInfo,
  FalseMessageInfo,
  toggleDeleteMessage,
  FalseDeleteMessage,
  setDeleteMessage,
  togglePinMessage,
  FalsePinMessage,
  toggleContacts,
  FalseContacts,
  toggleSellProducts,
  FalseSellProducts,
  togglePinMessageChat,
  setIsMuteModel,
} = GlobalSlice.actions;

export const selectGlobal = (state) => state.global;
