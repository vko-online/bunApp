import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateConversation = {
  __typename?: 'AggregateConversation';
  _count?: Maybe<ConversationCountAggregate>;
  _max?: Maybe<ConversationMaxAggregate>;
  _min?: Maybe<ConversationMinAggregate>;
};

export type AggregateFile = {
  __typename?: 'AggregateFile';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
};

export type AggregateInteraction = {
  __typename?: 'AggregateInteraction';
  _count?: Maybe<InteractionCountAggregate>;
  _max?: Maybe<InteractionMaxAggregate>;
  _min?: Maybe<InteractionMinAggregate>;
};

export type AggregateMessage = {
  __typename?: 'AggregateMessage';
  _count?: Maybe<MessageCountAggregate>;
  _max?: Maybe<MessageMaxAggregate>;
  _min?: Maybe<MessageMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AuthInput = {
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Conversation = {
  __typename?: 'Conversation';
  _count?: Maybe<ConversationCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  lastMessageAuthor?: Maybe<Scalars['String']>;
  lastMessageContent?: Maybe<Scalars['String']>;
  lastMessageDate?: Maybe<Scalars['DateTime']>;
  members: Array<User>;
  messages: Array<Message>;
};


export type ConversationMembersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type ConversationMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};

export type ConversationCount = {
  __typename?: 'ConversationCount';
  members: Scalars['Int'];
  messages: Scalars['Int'];
};

export type ConversationCountAggregate = {
  __typename?: 'ConversationCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  lastMessageAuthor: Scalars['Int'];
  lastMessageContent: Scalars['Int'];
  lastMessageDate: Scalars['Int'];
};

export type ConversationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastMessageAuthor?: InputMaybe<SortOrder>;
  lastMessageContent?: InputMaybe<SortOrder>;
  lastMessageDate?: InputMaybe<SortOrder>;
};

export type ConversationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  lastMessageAuthor?: InputMaybe<Scalars['String']>;
  lastMessageContent?: InputMaybe<Scalars['String']>;
  lastMessageDate?: InputMaybe<Scalars['DateTime']>;
  members?: InputMaybe<UserCreateNestedManyWithoutConversationsInput>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutConversationInput>;
};

export type ConversationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  lastMessageAuthor?: InputMaybe<Scalars['String']>;
  lastMessageContent?: InputMaybe<Scalars['String']>;
  lastMessageDate?: InputMaybe<Scalars['DateTime']>;
};

export type ConversationCreateNestedManyWithoutMembersInput = {
  connect?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConversationCreateOrConnectWithoutMembersInput>>;
  create?: InputMaybe<Array<ConversationCreateWithoutMembersInput>>;
};

export type ConversationCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<ConversationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConversationCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ConversationCreateWithoutMessagesInput>;
};

export type ConversationCreateOrConnectWithoutMembersInput = {
  create: ConversationCreateWithoutMembersInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationCreateOrConnectWithoutMessagesInput = {
  create: ConversationCreateWithoutMessagesInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationCreateWithoutMembersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  lastMessageAuthor?: InputMaybe<Scalars['String']>;
  lastMessageContent?: InputMaybe<Scalars['String']>;
  lastMessageDate?: InputMaybe<Scalars['DateTime']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutConversationInput>;
};

export type ConversationCreateWithoutMessagesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  lastMessageAuthor?: InputMaybe<Scalars['String']>;
  lastMessageContent?: InputMaybe<Scalars['String']>;
  lastMessageDate?: InputMaybe<Scalars['DateTime']>;
  members?: InputMaybe<UserCreateNestedManyWithoutConversationsInput>;
};

export type ConversationGroupBy = {
  __typename?: 'ConversationGroupBy';
  _count?: Maybe<ConversationCountAggregate>;
  _max?: Maybe<ConversationMaxAggregate>;
  _min?: Maybe<ConversationMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  lastMessageAuthor?: Maybe<Scalars['String']>;
  lastMessageContent?: Maybe<Scalars['String']>;
  lastMessageDate?: Maybe<Scalars['DateTime']>;
};

export type ConversationInput = {
  content: Scalars['String'];
  conversationId: Scalars['String'];
};

export type ConversationListRelationFilter = {
  every?: InputMaybe<ConversationWhereInput>;
  none?: InputMaybe<ConversationWhereInput>;
  some?: InputMaybe<ConversationWhereInput>;
};

export type ConversationMaxAggregate = {
  __typename?: 'ConversationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  lastMessageAuthor?: Maybe<Scalars['String']>;
  lastMessageContent?: Maybe<Scalars['String']>;
  lastMessageDate?: Maybe<Scalars['DateTime']>;
};

export type ConversationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastMessageAuthor?: InputMaybe<SortOrder>;
  lastMessageContent?: InputMaybe<SortOrder>;
  lastMessageDate?: InputMaybe<SortOrder>;
};

export type ConversationMinAggregate = {
  __typename?: 'ConversationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  lastMessageAuthor?: Maybe<Scalars['String']>;
  lastMessageContent?: Maybe<Scalars['String']>;
  lastMessageDate?: Maybe<Scalars['DateTime']>;
};

export type ConversationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastMessageAuthor?: InputMaybe<SortOrder>;
  lastMessageContent?: InputMaybe<SortOrder>;
  lastMessageDate?: InputMaybe<SortOrder>;
};

export type ConversationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ConversationOrderByWithAggregationInput = {
  _count?: InputMaybe<ConversationCountOrderByAggregateInput>;
  _max?: InputMaybe<ConversationMaxOrderByAggregateInput>;
  _min?: InputMaybe<ConversationMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastMessageAuthor?: InputMaybe<SortOrder>;
  lastMessageContent?: InputMaybe<SortOrder>;
  lastMessageDate?: InputMaybe<SortOrder>;
};

export type ConversationOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastMessageAuthor?: InputMaybe<SortOrder>;
  lastMessageContent?: InputMaybe<SortOrder>;
  lastMessageDate?: InputMaybe<SortOrder>;
  members?: InputMaybe<UserOrderByRelationAggregateInput>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
};

export type ConversationRelationFilter = {
  is?: InputMaybe<ConversationWhereInput>;
  isNot?: InputMaybe<ConversationWhereInput>;
};

export enum ConversationScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  LastMessageAuthor = 'lastMessageAuthor',
  LastMessageContent = 'lastMessageContent',
  LastMessageDate = 'lastMessageDate'
}

export type ConversationScalarWhereInput = {
  AND?: InputMaybe<Array<ConversationScalarWhereInput>>;
  NOT?: InputMaybe<Array<ConversationScalarWhereInput>>;
  OR?: InputMaybe<Array<ConversationScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  lastMessageAuthor?: InputMaybe<StringNullableFilter>;
  lastMessageContent?: InputMaybe<StringNullableFilter>;
  lastMessageDate?: InputMaybe<DateTimeNullableFilter>;
};

export type ConversationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ConversationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ConversationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ConversationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastMessageAuthor?: InputMaybe<StringNullableWithAggregatesFilter>;
  lastMessageContent?: InputMaybe<StringNullableWithAggregatesFilter>;
  lastMessageDate?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
};

export type ConversationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastMessageAuthor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutConversationsNestedInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutConversationNestedInput>;
};

export type ConversationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastMessageAuthor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ConversationUpdateManyWithWhereWithoutMembersInput = {
  data: ConversationUpdateManyMutationInput;
  where: ConversationScalarWhereInput;
};

export type ConversationUpdateManyWithoutMembersNestedInput = {
  connect?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConversationCreateOrConnectWithoutMembersInput>>;
  create?: InputMaybe<Array<ConversationCreateWithoutMembersInput>>;
  delete?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ConversationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  set?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  update?: InputMaybe<Array<ConversationUpdateWithWhereUniqueWithoutMembersInput>>;
  updateMany?: InputMaybe<Array<ConversationUpdateManyWithWhereWithoutMembersInput>>;
  upsert?: InputMaybe<Array<ConversationUpsertWithWhereUniqueWithoutMembersInput>>;
};

export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
  connect?: InputMaybe<ConversationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConversationCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ConversationCreateWithoutMessagesInput>;
  update?: InputMaybe<ConversationUpdateWithoutMessagesInput>;
  upsert?: InputMaybe<ConversationUpsertWithoutMessagesInput>;
};

export type ConversationUpdateWithWhereUniqueWithoutMembersInput = {
  data: ConversationUpdateWithoutMembersInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationUpdateWithoutMembersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastMessageAuthor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutConversationNestedInput>;
};

export type ConversationUpdateWithoutMessagesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastMessageAuthor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutConversationsNestedInput>;
};

export type ConversationUpsertWithWhereUniqueWithoutMembersInput = {
  create: ConversationCreateWithoutMembersInput;
  update: ConversationUpdateWithoutMembersInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationUpsertWithoutMessagesInput = {
  create: ConversationCreateWithoutMessagesInput;
  update: ConversationUpdateWithoutMessagesInput;
};

export type ConversationWhereInput = {
  AND?: InputMaybe<Array<ConversationWhereInput>>;
  NOT?: InputMaybe<Array<ConversationWhereInput>>;
  OR?: InputMaybe<Array<ConversationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  lastMessageAuthor?: InputMaybe<StringNullableFilter>;
  lastMessageContent?: InputMaybe<StringNullableFilter>;
  lastMessageDate?: InputMaybe<DateTimeNullableFilter>;
  members?: InputMaybe<UserListRelationFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
};

export type ConversationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum Decision {
  Dislike = 'DISLIKE',
  Like = 'LIKE',
  Skip = 'SKIP'
}

export type DiscoverInput = {
  from?: InputMaybe<Scalars['Float']>;
  to?: InputMaybe<Scalars['Float']>;
};

export type EnumDecisionFieldUpdateOperationsInput = {
  set?: InputMaybe<Decision>;
};

export type EnumDecisionFilter = {
  equals?: InputMaybe<Decision>;
  in?: InputMaybe<Array<Decision>>;
  not?: InputMaybe<NestedEnumDecisionFilter>;
  notIn?: InputMaybe<Array<Decision>>;
};

export type EnumDecisionWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumDecisionFilter>;
  _min?: InputMaybe<NestedEnumDecisionFilter>;
  equals?: InputMaybe<Decision>;
  in?: InputMaybe<Array<Decision>>;
  not?: InputMaybe<NestedEnumDecisionWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Decision>>;
};

export type EnumIdentityNullableFilter = {
  equals?: InputMaybe<Identity>;
  in?: InputMaybe<Array<Identity>>;
  not?: InputMaybe<NestedEnumIdentityNullableFilter>;
  notIn?: InputMaybe<Array<Identity>>;
};

export type EnumIdentityNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumIdentityNullableFilter>;
  _min?: InputMaybe<NestedEnumIdentityNullableFilter>;
  equals?: InputMaybe<Identity>;
  in?: InputMaybe<Array<Identity>>;
  not?: InputMaybe<NestedEnumIdentityNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Identity>>;
};

export type EnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumRoleNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumRoleNullableFilter>;
  _min?: InputMaybe<NestedEnumRoleNullableFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type FileAvgAggregate = {
  __typename?: 'FileAvgAggregate';
  size?: Maybe<Scalars['Float']>;
};

export type FileAvgOrderByAggregateInput = {
  size?: InputMaybe<SortOrder>;
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  path: Scalars['Int'];
  size: Scalars['Int'];
  type: Scalars['Int'];
  userId: Scalars['Int'];
};

export type FileCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type FileCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  user?: InputMaybe<UserCreateNestedOneWithoutImagesInput>;
};

export type FileCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type FileCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
};

export type FileCreateManyUserInputEnvelope = {
  data: Array<FileCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FileCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
  createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
};

export type FileCreateOrConnectWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
};

export type FileGroupBy = {
  __typename?: 'FileGroupBy';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
  id: Scalars['String'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

export type FileListRelationFilter = {
  every?: InputMaybe<FileWhereInput>;
  none?: InputMaybe<FileWhereInput>;
  some?: InputMaybe<FileWhereInput>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type FileMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type FileMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type FileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FileOrderByWithAggregationInput = {
  _avg?: InputMaybe<FileAvgOrderByAggregateInput>;
  _count?: InputMaybe<FileCountOrderByAggregateInput>;
  _max?: InputMaybe<FileMaxOrderByAggregateInput>;
  _min?: InputMaybe<FileMinOrderByAggregateInput>;
  _sum?: InputMaybe<FileSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type FileOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum FileScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Path = 'path',
  Size = 'size',
  Type = 'type',
  UserId = 'userId'
}

export type FileScalarWhereInput = {
  AND?: InputMaybe<Array<FileScalarWhereInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereInput>>;
  OR?: InputMaybe<Array<FileScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type FileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  path?: InputMaybe<StringWithAggregatesFilter>;
  size?: InputMaybe<IntWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type FileSumAggregate = {
  __typename?: 'FileSumAggregate';
  size?: Maybe<Scalars['Int']>;
};

export type FileSumOrderByAggregateInput = {
  size?: InputMaybe<SortOrder>;
};

export type FileUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutImagesNestedInput>;
};

export type FileUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileUpdateManyWithWhereWithoutUserInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
  createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FileUpdateWithWhereUniqueWithoutUserInput = {
  data: FileUpdateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileUpsertWithWhereUniqueWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  update: FileUpdateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type FileWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export enum Identity {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Interaction = {
  __typename?: 'Interaction';
  author: User;
  authorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  decision: Decision;
  id: Scalars['String'];
  matched: Scalars['Boolean'];
  target: User;
  targetId: Scalars['String'];
};

export type InteractionCountAggregate = {
  __typename?: 'InteractionCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  decision: Scalars['Int'];
  id: Scalars['Int'];
  matched: Scalars['Int'];
  targetId: Scalars['Int'];
};

export type InteractionCountOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  decision?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matched?: InputMaybe<SortOrder>;
  targetId?: InputMaybe<SortOrder>;
};

export type InteractionCreateInput = {
  author: UserCreateNestedOneWithoutInteractionsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decision: Decision;
  id?: InputMaybe<Scalars['String']>;
  matched?: InputMaybe<Scalars['Boolean']>;
  target: UserCreateNestedOneWithoutInteractorsInput;
};

export type InteractionCreateManyAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decision: Decision;
  id?: InputMaybe<Scalars['String']>;
  matched?: InputMaybe<Scalars['Boolean']>;
  targetId: Scalars['String'];
};

export type InteractionCreateManyAuthorInputEnvelope = {
  data: Array<InteractionCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InteractionCreateManyInput = {
  authorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decision: Decision;
  id?: InputMaybe<Scalars['String']>;
  matched?: InputMaybe<Scalars['Boolean']>;
  targetId: Scalars['String'];
};

export type InteractionCreateManyTargetInput = {
  authorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decision: Decision;
  id?: InputMaybe<Scalars['String']>;
  matched?: InputMaybe<Scalars['Boolean']>;
};

export type InteractionCreateManyTargetInputEnvelope = {
  data: Array<InteractionCreateManyTargetInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InteractionCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InteractionCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<InteractionCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<InteractionCreateManyAuthorInputEnvelope>;
};

export type InteractionCreateNestedManyWithoutTargetInput = {
  connect?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InteractionCreateOrConnectWithoutTargetInput>>;
  create?: InputMaybe<Array<InteractionCreateWithoutTargetInput>>;
  createMany?: InputMaybe<InteractionCreateManyTargetInputEnvelope>;
};

export type InteractionCreateOrConnectWithoutAuthorInput = {
  create: InteractionCreateWithoutAuthorInput;
  where: InteractionWhereUniqueInput;
};

export type InteractionCreateOrConnectWithoutTargetInput = {
  create: InteractionCreateWithoutTargetInput;
  where: InteractionWhereUniqueInput;
};

export type InteractionCreateWithoutAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decision: Decision;
  id?: InputMaybe<Scalars['String']>;
  matched?: InputMaybe<Scalars['Boolean']>;
  target: UserCreateNestedOneWithoutInteractorsInput;
};

export type InteractionCreateWithoutTargetInput = {
  author: UserCreateNestedOneWithoutInteractionsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decision: Decision;
  id?: InputMaybe<Scalars['String']>;
  matched?: InputMaybe<Scalars['Boolean']>;
};

export type InteractionGroupBy = {
  __typename?: 'InteractionGroupBy';
  _count?: Maybe<InteractionCountAggregate>;
  _max?: Maybe<InteractionMaxAggregate>;
  _min?: Maybe<InteractionMinAggregate>;
  authorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  decision: Decision;
  id: Scalars['String'];
  matched: Scalars['Boolean'];
  targetId: Scalars['String'];
};

export type InteractionInput = {
  decision: Decision;
  targetId: Scalars['String'];
};

export type InteractionListRelationFilter = {
  every?: InputMaybe<InteractionWhereInput>;
  none?: InputMaybe<InteractionWhereInput>;
  some?: InputMaybe<InteractionWhereInput>;
};

export type InteractionMaxAggregate = {
  __typename?: 'InteractionMaxAggregate';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  decision?: Maybe<Decision>;
  id?: Maybe<Scalars['String']>;
  matched?: Maybe<Scalars['Boolean']>;
  targetId?: Maybe<Scalars['String']>;
};

export type InteractionMaxOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  decision?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matched?: InputMaybe<SortOrder>;
  targetId?: InputMaybe<SortOrder>;
};

export type InteractionMinAggregate = {
  __typename?: 'InteractionMinAggregate';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  decision?: Maybe<Decision>;
  id?: Maybe<Scalars['String']>;
  matched?: Maybe<Scalars['Boolean']>;
  targetId?: Maybe<Scalars['String']>;
};

export type InteractionMinOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  decision?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matched?: InputMaybe<SortOrder>;
  targetId?: InputMaybe<SortOrder>;
};

export type InteractionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InteractionOrderByWithAggregationInput = {
  _count?: InputMaybe<InteractionCountOrderByAggregateInput>;
  _max?: InputMaybe<InteractionMaxOrderByAggregateInput>;
  _min?: InputMaybe<InteractionMinOrderByAggregateInput>;
  authorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  decision?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matched?: InputMaybe<SortOrder>;
  targetId?: InputMaybe<SortOrder>;
};

export type InteractionOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  decision?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matched?: InputMaybe<SortOrder>;
  target?: InputMaybe<UserOrderByWithRelationInput>;
  targetId?: InputMaybe<SortOrder>;
};

export enum InteractionScalarFieldEnum {
  AuthorId = 'authorId',
  CreatedAt = 'createdAt',
  Decision = 'decision',
  Id = 'id',
  Matched = 'matched',
  TargetId = 'targetId'
}

export type InteractionScalarWhereInput = {
  AND?: InputMaybe<Array<InteractionScalarWhereInput>>;
  NOT?: InputMaybe<Array<InteractionScalarWhereInput>>;
  OR?: InputMaybe<Array<InteractionScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  decision?: InputMaybe<EnumDecisionFilter>;
  id?: InputMaybe<StringFilter>;
  matched?: InputMaybe<BoolFilter>;
  targetId?: InputMaybe<StringFilter>;
};

export type InteractionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InteractionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<InteractionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<InteractionScalarWhereWithAggregatesInput>>;
  authorId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  decision?: InputMaybe<EnumDecisionWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  matched?: InputMaybe<BoolWithAggregatesFilter>;
  targetId?: InputMaybe<StringWithAggregatesFilter>;
};

export type InteractionUpdateInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutInteractionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decision?: InputMaybe<EnumDecisionFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  matched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  target?: InputMaybe<UserUpdateOneRequiredWithoutInteractorsNestedInput>;
};

export type InteractionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decision?: InputMaybe<EnumDecisionFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  matched?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type InteractionUpdateManyWithWhereWithoutAuthorInput = {
  data: InteractionUpdateManyMutationInput;
  where: InteractionScalarWhereInput;
};

export type InteractionUpdateManyWithWhereWithoutTargetInput = {
  data: InteractionUpdateManyMutationInput;
  where: InteractionScalarWhereInput;
};

export type InteractionUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InteractionCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<InteractionCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<InteractionCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InteractionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  set?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  update?: InputMaybe<Array<InteractionUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<InteractionUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<InteractionUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type InteractionUpdateManyWithoutTargetNestedInput = {
  connect?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InteractionCreateOrConnectWithoutTargetInput>>;
  create?: InputMaybe<Array<InteractionCreateWithoutTargetInput>>;
  createMany?: InputMaybe<InteractionCreateManyTargetInputEnvelope>;
  delete?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InteractionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  set?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  update?: InputMaybe<Array<InteractionUpdateWithWhereUniqueWithoutTargetInput>>;
  updateMany?: InputMaybe<Array<InteractionUpdateManyWithWhereWithoutTargetInput>>;
  upsert?: InputMaybe<Array<InteractionUpsertWithWhereUniqueWithoutTargetInput>>;
};

export type InteractionUpdateWithWhereUniqueWithoutAuthorInput = {
  data: InteractionUpdateWithoutAuthorInput;
  where: InteractionWhereUniqueInput;
};

export type InteractionUpdateWithWhereUniqueWithoutTargetInput = {
  data: InteractionUpdateWithoutTargetInput;
  where: InteractionWhereUniqueInput;
};

export type InteractionUpdateWithoutAuthorInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decision?: InputMaybe<EnumDecisionFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  matched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  target?: InputMaybe<UserUpdateOneRequiredWithoutInteractorsNestedInput>;
};

export type InteractionUpdateWithoutTargetInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutInteractionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decision?: InputMaybe<EnumDecisionFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  matched?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type InteractionUpsertWithWhereUniqueWithoutAuthorInput = {
  create: InteractionCreateWithoutAuthorInput;
  update: InteractionUpdateWithoutAuthorInput;
  where: InteractionWhereUniqueInput;
};

export type InteractionUpsertWithWhereUniqueWithoutTargetInput = {
  create: InteractionCreateWithoutTargetInput;
  update: InteractionUpdateWithoutTargetInput;
  where: InteractionWhereUniqueInput;
};

export type InteractionWhereInput = {
  AND?: InputMaybe<Array<InteractionWhereInput>>;
  NOT?: InputMaybe<Array<InteractionWhereInput>>;
  OR?: InputMaybe<Array<InteractionWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  decision?: InputMaybe<EnumDecisionFilter>;
  id?: InputMaybe<StringFilter>;
  matched?: InputMaybe<BoolFilter>;
  target?: InputMaybe<UserRelationFilter>;
  targetId?: InputMaybe<StringFilter>;
};

export type InteractionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  author: User;
  authorId: Scalars['String'];
  content: Scalars['String'];
  conversation: Conversation;
  conversationId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
};

export type MessageCountAggregate = {
  __typename?: 'MessageCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  content: Scalars['Int'];
  conversationId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
};

export type MessageCountOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type MessageCreateInput = {
  author: UserCreateNestedOneWithoutMessagesInput;
  content: Scalars['String'];
  conversation: ConversationCreateNestedOneWithoutMessagesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
};

export type MessageCreateManyAuthorInput = {
  content: Scalars['String'];
  conversationId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
};

export type MessageCreateManyAuthorInputEnvelope = {
  data: Array<MessageCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateManyConversationInput = {
  authorId: Scalars['String'];
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
};

export type MessageCreateManyConversationInputEnvelope = {
  data: Array<MessageCreateManyConversationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateManyInput = {
  authorId: Scalars['String'];
  content: Scalars['String'];
  conversationId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
};

export type MessageCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<MessageCreateManyAuthorInputEnvelope>;
};

export type MessageCreateNestedManyWithoutConversationInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutConversationInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutConversationInput>>;
  createMany?: InputMaybe<MessageCreateManyConversationInputEnvelope>;
};

export type MessageCreateOrConnectWithoutAuthorInput = {
  create: MessageCreateWithoutAuthorInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateOrConnectWithoutConversationInput = {
  create: MessageCreateWithoutConversationInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateWithoutAuthorInput = {
  content: Scalars['String'];
  conversation: ConversationCreateNestedOneWithoutMessagesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
};

export type MessageCreateWithoutConversationInput = {
  author: UserCreateNestedOneWithoutMessagesInput;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
};

export type MessageGroupBy = {
  __typename?: 'MessageGroupBy';
  _count?: Maybe<MessageCountAggregate>;
  _max?: Maybe<MessageMaxAggregate>;
  _min?: Maybe<MessageMinAggregate>;
  authorId: Scalars['String'];
  content: Scalars['String'];
  conversationId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageMaxAggregate = {
  __typename?: 'MessageMaxAggregate';
  authorId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  conversationId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
};

export type MessageMaxOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type MessageMinAggregate = {
  __typename?: 'MessageMinAggregate';
  authorId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  conversationId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
};

export type MessageMinOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithAggregationInput = {
  _count?: InputMaybe<MessageCountOrderByAggregateInput>;
  _max?: InputMaybe<MessageMaxOrderByAggregateInput>;
  _min?: InputMaybe<MessageMinOrderByAggregateInput>;
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  conversation?: InputMaybe<ConversationOrderByWithRelationInput>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export enum MessageScalarFieldEnum {
  AuthorId = 'authorId',
  Content = 'content',
  ConversationId = 'conversationId',
  CreatedAt = 'createdAt',
  Id = 'id'
}

export type MessageScalarWhereInput = {
  AND?: InputMaybe<Array<MessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<MessageScalarWhereInput>>;
  OR?: InputMaybe<Array<MessageScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  conversationId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
};

export type MessageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MessageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MessageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MessageScalarWhereWithAggregatesInput>>;
  authorId?: InputMaybe<StringWithAggregatesFilter>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  conversationId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
};

export type MessageUpdateInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutMessagesNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversation?: InputMaybe<ConversationUpdateOneRequiredWithoutMessagesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdateManyWithWhereWithoutAuthorInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithWhereWithoutConversationInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<MessageCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type MessageUpdateManyWithoutConversationNestedInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutConversationInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutConversationInput>>;
  createMany?: InputMaybe<MessageCreateManyConversationInputEnvelope>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutConversationInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutConversationInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutConversationInput>>;
};

export type MessageUpdateWithWhereUniqueWithoutAuthorInput = {
  data: MessageUpdateWithoutAuthorInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
  data: MessageUpdateWithoutConversationInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithoutAuthorInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversation?: InputMaybe<ConversationUpdateOneRequiredWithoutMessagesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdateWithoutConversationInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutMessagesNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpsertWithWhereUniqueWithoutAuthorInput = {
  create: MessageCreateWithoutAuthorInput;
  update: MessageUpdateWithoutAuthorInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
  create: MessageCreateWithoutConversationInput;
  update: MessageUpdateWithoutConversationInput;
  where: MessageWhereUniqueInput;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  conversation?: InputMaybe<ConversationRelationFilter>;
  conversationId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
};

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type MessageWithTargetIds = {
  __typename?: 'MessageWithTargetIds';
  conversationId: Scalars['String'];
  message: Message;
  targetId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyConversation: AffectedRowsOutput;
  createManyFile: AffectedRowsOutput;
  createManyInteraction: AffectedRowsOutput;
  createManyMessage: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneConversation: Conversation;
  createOneFile: File;
  createOneInteraction: Interaction;
  createOneMessage: Message;
  createOneUser: User;
  deleteManyConversation: AffectedRowsOutput;
  deleteManyFile: AffectedRowsOutput;
  deleteManyInteraction: AffectedRowsOutput;
  deleteManyMessage: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneConversation?: Maybe<Conversation>;
  deleteOneFile?: Maybe<File>;
  deleteOneInteraction?: Maybe<Interaction>;
  deleteOneMessage?: Maybe<Message>;
  deleteOneUser?: Maybe<User>;
  interact: Interaction;
  sendMessage: Message;
  signIn: AuthPayload;
  signOut?: Maybe<Scalars['Boolean']>;
  updateManyConversation: AffectedRowsOutput;
  updateManyFile: AffectedRowsOutput;
  updateManyInteraction: AffectedRowsOutput;
  updateManyMessage: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneConversation?: Maybe<Conversation>;
  updateOneFile?: Maybe<File>;
  updateOneInteraction?: Maybe<Interaction>;
  updateOneMessage?: Maybe<Message>;
  updateOneUser?: Maybe<User>;
  updateState?: Maybe<Scalars['Boolean']>;
  uploadImage: Array<File>;
  upsertOneConversation: Conversation;
  upsertOneFile: File;
  upsertOneInteraction: Interaction;
  upsertOneMessage: Message;
  upsertOneUser: User;
};


export type MutationCreateManyConversationArgs = {
  data: Array<ConversationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFileArgs = {
  data: Array<FileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyInteractionArgs = {
  data: Array<InteractionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyMessageArgs = {
  data: Array<MessageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneConversationArgs = {
  data: ConversationCreateInput;
};


export type MutationCreateOneFileArgs = {
  data: FileCreateInput;
};


export type MutationCreateOneInteractionArgs = {
  data: InteractionCreateInput;
};


export type MutationCreateOneMessageArgs = {
  data: MessageCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyConversationArgs = {
  where?: InputMaybe<ConversationWhereInput>;
};


export type MutationDeleteManyFileArgs = {
  where?: InputMaybe<FileWhereInput>;
};


export type MutationDeleteManyInteractionArgs = {
  where?: InputMaybe<InteractionWhereInput>;
};


export type MutationDeleteManyMessageArgs = {
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneConversationArgs = {
  where: ConversationWhereUniqueInput;
};


export type MutationDeleteOneFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationDeleteOneInteractionArgs = {
  where: InteractionWhereUniqueInput;
};


export type MutationDeleteOneMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationInteractArgs = {
  input: InteractionInput;
};


export type MutationSendMessageArgs = {
  input: ConversationInput;
};


export type MutationSignInArgs = {
  input: AuthInput;
};


export type MutationUpdateManyConversationArgs = {
  data: ConversationUpdateManyMutationInput;
  where?: InputMaybe<ConversationWhereInput>;
};


export type MutationUpdateManyFileArgs = {
  data: FileUpdateManyMutationInput;
  where?: InputMaybe<FileWhereInput>;
};


export type MutationUpdateManyInteractionArgs = {
  data: InteractionUpdateManyMutationInput;
  where?: InputMaybe<InteractionWhereInput>;
};


export type MutationUpdateManyMessageArgs = {
  data: MessageUpdateManyMutationInput;
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneConversationArgs = {
  data: ConversationUpdateInput;
  where: ConversationWhereUniqueInput;
};


export type MutationUpdateOneFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpdateOneInteractionArgs = {
  data: InteractionUpdateInput;
  where: InteractionWhereUniqueInput;
};


export type MutationUpdateOneMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateStateArgs = {
  input: StateInput;
};


export type MutationUploadImageArgs = {
  input: Array<Scalars['Upload']>;
};


export type MutationUpsertOneConversationArgs = {
  create: ConversationCreateInput;
  update: ConversationUpdateInput;
  where: ConversationWhereUniqueInput;
};


export type MutationUpsertOneFileArgs = {
  create: FileCreateInput;
  update: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpsertOneInteractionArgs = {
  create: InteractionCreateInput;
  update: InteractionUpdateInput;
  where: InteractionWhereUniqueInput;
};


export type MutationUpsertOneMessageArgs = {
  create: MessageCreateInput;
  update: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumDecisionFilter = {
  equals?: InputMaybe<Decision>;
  in?: InputMaybe<Array<Decision>>;
  not?: InputMaybe<NestedEnumDecisionFilter>;
  notIn?: InputMaybe<Array<Decision>>;
};

export type NestedEnumDecisionWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumDecisionFilter>;
  _min?: InputMaybe<NestedEnumDecisionFilter>;
  equals?: InputMaybe<Decision>;
  in?: InputMaybe<Array<Decision>>;
  not?: InputMaybe<NestedEnumDecisionWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Decision>>;
};

export type NestedEnumIdentityNullableFilter = {
  equals?: InputMaybe<Identity>;
  in?: InputMaybe<Array<Identity>>;
  not?: InputMaybe<NestedEnumIdentityNullableFilter>;
  notIn?: InputMaybe<Array<Identity>>;
};

export type NestedEnumIdentityNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumIdentityNullableFilter>;
  _min?: InputMaybe<NestedEnumIdentityNullableFilter>;
  equals?: InputMaybe<Identity>;
  in?: InputMaybe<Array<Identity>>;
  not?: InputMaybe<NestedEnumIdentityNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Identity>>;
};

export type NestedEnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumRoleNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumRoleNullableFilter>;
  _min?: InputMaybe<NestedEnumRoleNullableFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableEnumIdentityFieldUpdateOperationsInput = {
  set?: InputMaybe<Identity>;
};

export type NullableEnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateConversation: AggregateConversation;
  aggregateFile: AggregateFile;
  aggregateInteraction: AggregateInteraction;
  aggregateMessage: AggregateMessage;
  aggregateUser: AggregateUser;
  conversation?: Maybe<Conversation>;
  conversations: Array<Conversation>;
  discover: Array<User>;
  discoverLive: Array<User>;
  file?: Maybe<File>;
  files: Array<File>;
  findFirstConversation?: Maybe<Conversation>;
  findFirstFile?: Maybe<File>;
  findFirstInteraction?: Maybe<Interaction>;
  findFirstMessage?: Maybe<Message>;
  findFirstUser?: Maybe<User>;
  groupByConversation: Array<ConversationGroupBy>;
  groupByFile: Array<FileGroupBy>;
  groupByInteraction: Array<InteractionGroupBy>;
  groupByMessage: Array<MessageGroupBy>;
  groupByUser: Array<UserGroupBy>;
  interaction?: Maybe<Interaction>;
  interactions: Array<Interaction>;
  me?: Maybe<User>;
  message?: Maybe<Message>;
  messages: Array<Message>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateConversationArgs = {
  cursor?: InputMaybe<ConversationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryAggregateFileArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryAggregateInteractionArgs = {
  cursor?: InputMaybe<InteractionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InteractionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InteractionWhereInput>;
};


export type QueryAggregateMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryConversationArgs = {
  where: ConversationWhereUniqueInput;
};


export type QueryConversationsArgs = {
  cursor?: InputMaybe<ConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryDiscoverArgs = {
  input: DiscoverInput;
};


export type QueryDiscoverLiveArgs = {
  input: DiscoverInput;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstConversationArgs = {
  cursor?: InputMaybe<ConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryFindFirstFileArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstInteractionArgs = {
  cursor?: InputMaybe<InteractionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InteractionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InteractionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InteractionWhereInput>;
};


export type QueryFindFirstMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByConversationArgs = {
  by: Array<ConversationScalarFieldEnum>;
  having?: InputMaybe<ConversationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryGroupByFileArgs = {
  by: Array<FileScalarFieldEnum>;
  having?: InputMaybe<FileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryGroupByInteractionArgs = {
  by: Array<InteractionScalarFieldEnum>;
  having?: InputMaybe<InteractionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<InteractionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InteractionWhereInput>;
};


export type QueryGroupByMessageArgs = {
  by: Array<MessageScalarFieldEnum>;
  having?: InputMaybe<MessageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MessageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryInteractionArgs = {
  where: InteractionWhereUniqueInput;
};


export type QueryInteractionsArgs = {
  cursor?: InputMaybe<InteractionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InteractionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InteractionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InteractionWhereInput>;
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StateInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  online: Scalars['Boolean'];
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newMatch: Interaction;
  newMessage: MessageWithTargetIds;
};


export type SubscriptionNewMatchArgs = {
  currentUserId: Scalars['String'];
};


export type SubscriptionNewMessageArgs = {
  currentUserId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  bio?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  conversations: Array<Conversation>;
  country: Scalars['String'];
  dob?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  identity?: Maybe<Identity>;
  images: Array<File>;
  interactions: Array<Interaction>;
  interactors: Array<Interaction>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  looking?: Maybe<Identity>;
  messages: Array<Message>;
  name?: Maybe<Scalars['String']>;
  online?: Maybe<Scalars['Boolean']>;
  phone: Scalars['String'];
  pushId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};


export type UserConversationsArgs = {
  cursor?: InputMaybe<ConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type UserImagesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type UserInteractionsArgs = {
  cursor?: InputMaybe<InteractionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InteractionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InteractionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InteractionWhereInput>;
};


export type UserInteractorsArgs = {
  cursor?: InputMaybe<InteractionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InteractionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InteractionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InteractionWhereInput>;
};


export type UserMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  conversations: Scalars['Int'];
  images: Scalars['Int'];
  interactions: Scalars['Int'];
  interactors: Scalars['Int'];
  messages: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  bio: Scalars['Int'];
  city: Scalars['Int'];
  country: Scalars['Int'];
  dob: Scalars['Int'];
  id: Scalars['Int'];
  identity: Scalars['Int'];
  latitude: Scalars['Int'];
  longitude: Scalars['Int'];
  looking: Scalars['Int'];
  name: Scalars['Int'];
  online: Scalars['Int'];
  password: Scalars['Int'];
  phone: Scalars['Int'];
  pushId: Scalars['Int'];
  role: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  bio?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identity?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  looking?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  online?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  pushId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<ConversationCreateNestedManyWithoutMembersInput>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  images?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  interactions?: InputMaybe<InteractionCreateNestedManyWithoutAuthorInput>;
  interactors?: InputMaybe<InteractionCreateNestedManyWithoutTargetInput>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  looking?: InputMaybe<Identity>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  online?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  phone: Scalars['String'];
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

export type UserCreateManyInput = {
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  looking?: InputMaybe<Identity>;
  name?: InputMaybe<Scalars['String']>;
  online?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  phone: Scalars['String'];
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

export type UserCreateNestedManyWithoutConversationsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutConversationsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutConversationsInput>>;
};

export type UserCreateNestedOneWithoutImagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutImagesInput>;
  create?: InputMaybe<UserCreateWithoutImagesInput>;
};

export type UserCreateNestedOneWithoutInteractionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInteractionsInput>;
  create?: InputMaybe<UserCreateWithoutInteractionsInput>;
};

export type UserCreateNestedOneWithoutInteractorsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInteractorsInput>;
  create?: InputMaybe<UserCreateWithoutInteractorsInput>;
};

export type UserCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<UserCreateWithoutMessagesInput>;
};

export type UserCreateOrConnectWithoutConversationsInput = {
  create: UserCreateWithoutConversationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutImagesInput = {
  create: UserCreateWithoutImagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutInteractionsInput = {
  create: UserCreateWithoutInteractionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutInteractorsInput = {
  create: UserCreateWithoutInteractorsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMessagesInput = {
  create: UserCreateWithoutMessagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutConversationsInput = {
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  images?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  interactions?: InputMaybe<InteractionCreateNestedManyWithoutAuthorInput>;
  interactors?: InputMaybe<InteractionCreateNestedManyWithoutTargetInput>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  looking?: InputMaybe<Identity>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  online?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  phone: Scalars['String'];
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

export type UserCreateWithoutImagesInput = {
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<ConversationCreateNestedManyWithoutMembersInput>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  interactions?: InputMaybe<InteractionCreateNestedManyWithoutAuthorInput>;
  interactors?: InputMaybe<InteractionCreateNestedManyWithoutTargetInput>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  looking?: InputMaybe<Identity>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  online?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  phone: Scalars['String'];
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

export type UserCreateWithoutInteractionsInput = {
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<ConversationCreateNestedManyWithoutMembersInput>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  images?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  interactors?: InputMaybe<InteractionCreateNestedManyWithoutTargetInput>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  looking?: InputMaybe<Identity>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  online?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  phone: Scalars['String'];
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

export type UserCreateWithoutInteractorsInput = {
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<ConversationCreateNestedManyWithoutMembersInput>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  images?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  interactions?: InputMaybe<InteractionCreateNestedManyWithoutAuthorInput>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  looking?: InputMaybe<Identity>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  online?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  phone: Scalars['String'];
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

export type UserCreateWithoutMessagesInput = {
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<ConversationCreateNestedManyWithoutMembersInput>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  images?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  interactions?: InputMaybe<InteractionCreateNestedManyWithoutAuthorInput>;
  interactors?: InputMaybe<InteractionCreateNestedManyWithoutTargetInput>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  looking?: InputMaybe<Identity>;
  name?: InputMaybe<Scalars['String']>;
  online?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  phone: Scalars['String'];
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  bio?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  dob?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  identity?: Maybe<Identity>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  looking?: Maybe<Identity>;
  name?: Maybe<Scalars['String']>;
  online?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  phone: Scalars['String'];
  pushId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  identity?: Maybe<Identity>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  looking?: Maybe<Identity>;
  name?: Maybe<Scalars['String']>;
  online?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pushId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserMaxOrderByAggregateInput = {
  bio?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identity?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  looking?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  online?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  pushId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  identity?: Maybe<Identity>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  looking?: Maybe<Identity>;
  name?: Maybe<Scalars['String']>;
  online?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pushId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserMinOrderByAggregateInput = {
  bio?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identity?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  looking?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  online?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  pushId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  bio?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identity?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  looking?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  online?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  pushId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  bio?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  conversations?: InputMaybe<ConversationOrderByRelationAggregateInput>;
  country?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identity?: InputMaybe<SortOrder>;
  images?: InputMaybe<FileOrderByRelationAggregateInput>;
  interactions?: InputMaybe<InteractionOrderByRelationAggregateInput>;
  interactors?: InputMaybe<InteractionOrderByRelationAggregateInput>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  looking?: InputMaybe<SortOrder>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  online?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  pushId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Bio = 'bio',
  City = 'city',
  Country = 'country',
  Dob = 'dob',
  Id = 'id',
  Identity = 'identity',
  Latitude = 'latitude',
  Longitude = 'longitude',
  Looking = 'looking',
  Name = 'name',
  Online = 'online',
  Password = 'password',
  Phone = 'phone',
  PushId = 'pushId',
  Role = 'role'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  bio?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  identity?: InputMaybe<EnumIdentityNullableFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  looking?: InputMaybe<EnumIdentityNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  online?: InputMaybe<BoolNullableFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  pushId?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleNullableFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  bio?: InputMaybe<StringNullableWithAggregatesFilter>;
  city?: InputMaybe<StringWithAggregatesFilter>;
  country?: InputMaybe<StringWithAggregatesFilter>;
  dob?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  identity?: InputMaybe<EnumIdentityNullableWithAggregatesFilter>;
  latitude?: InputMaybe<FloatNullableWithAggregatesFilter>;
  longitude?: InputMaybe<FloatNullableWithAggregatesFilter>;
  looking?: InputMaybe<EnumIdentityNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  online?: InputMaybe<BoolNullableWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  pushId?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleNullableWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type UserSumOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversations?: InputMaybe<ConversationUpdateManyWithoutMembersNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
  interactions?: InputMaybe<InteractionUpdateManyWithoutAuthorNestedInput>;
  interactors?: InputMaybe<InteractionUpdateManyWithoutTargetNestedInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  online?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  online?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutConversationsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutConversationsNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutConversationsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutConversationsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutConversationsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutConversationsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutConversationsInput>>;
};

export type UserUpdateOneRequiredWithoutInteractionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInteractionsInput>;
  create?: InputMaybe<UserCreateWithoutInteractionsInput>;
  update?: InputMaybe<UserUpdateWithoutInteractionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutInteractionsInput>;
};

export type UserUpdateOneRequiredWithoutInteractorsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInteractorsInput>;
  create?: InputMaybe<UserCreateWithoutInteractorsInput>;
  update?: InputMaybe<UserUpdateWithoutInteractorsInput>;
  upsert?: InputMaybe<UserUpsertWithoutInteractorsInput>;
};

export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<UserCreateWithoutMessagesInput>;
  update?: InputMaybe<UserUpdateWithoutMessagesInput>;
  upsert?: InputMaybe<UserUpsertWithoutMessagesInput>;
};

export type UserUpdateOneWithoutImagesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutImagesInput>;
  create?: InputMaybe<UserCreateWithoutImagesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutImagesInput>;
  upsert?: InputMaybe<UserUpsertWithoutImagesInput>;
};

export type UserUpdateWithWhereUniqueWithoutConversationsInput = {
  data: UserUpdateWithoutConversationsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutConversationsInput = {
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
  interactions?: InputMaybe<InteractionUpdateManyWithoutAuthorNestedInput>;
  interactors?: InputMaybe<InteractionUpdateManyWithoutTargetNestedInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  online?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutImagesInput = {
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversations?: InputMaybe<ConversationUpdateManyWithoutMembersNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  interactions?: InputMaybe<InteractionUpdateManyWithoutAuthorNestedInput>;
  interactors?: InputMaybe<InteractionUpdateManyWithoutTargetNestedInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  online?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutInteractionsInput = {
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversations?: InputMaybe<ConversationUpdateManyWithoutMembersNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
  interactors?: InputMaybe<InteractionUpdateManyWithoutTargetNestedInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  online?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutInteractorsInput = {
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversations?: InputMaybe<ConversationUpdateManyWithoutMembersNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
  interactions?: InputMaybe<InteractionUpdateManyWithoutAuthorNestedInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  online?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMessagesInput = {
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversations?: InputMaybe<ConversationUpdateManyWithoutMembersNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
  interactions?: InputMaybe<InteractionUpdateManyWithoutAuthorNestedInput>;
  interactors?: InputMaybe<InteractionUpdateManyWithoutTargetNestedInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  online?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutConversationsInput = {
  create: UserCreateWithoutConversationsInput;
  update: UserUpdateWithoutConversationsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutImagesInput = {
  create: UserCreateWithoutImagesInput;
  update: UserUpdateWithoutImagesInput;
};

export type UserUpsertWithoutInteractionsInput = {
  create: UserCreateWithoutInteractionsInput;
  update: UserUpdateWithoutInteractionsInput;
};

export type UserUpsertWithoutInteractorsInput = {
  create: UserCreateWithoutInteractorsInput;
  update: UserUpdateWithoutInteractorsInput;
};

export type UserUpsertWithoutMessagesInput = {
  create: UserCreateWithoutMessagesInput;
  update: UserUpdateWithoutMessagesInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  bio?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringFilter>;
  conversations?: InputMaybe<ConversationListRelationFilter>;
  country?: InputMaybe<StringFilter>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  identity?: InputMaybe<EnumIdentityNullableFilter>;
  images?: InputMaybe<FileListRelationFilter>;
  interactions?: InputMaybe<InteractionListRelationFilter>;
  interactors?: InputMaybe<InteractionListRelationFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  looking?: InputMaybe<EnumIdentityNullableFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  online?: InputMaybe<BoolNullableFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  pushId?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleNullableFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type SignInMutationVariables = Exact<{
  input: AuthInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', id: string, name?: string | null, phone: string } } };

export type ConversationsQueryVariables = Exact<{ [key: string]: never; }>;


export type ConversationsQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, conversations: Array<{ __typename?: 'Conversation', id: string, lastMessageContent?: string | null, lastMessageAuthor?: string | null, lastMessageDate?: any | null, members: Array<{ __typename?: 'User', id: string, name?: string | null, images: Array<{ __typename?: 'File', path: string }> }> }> } | null };

export type MessagesQueryVariables = Exact<{
  where?: InputMaybe<MessageWhereInput>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput> | MessageOrderByWithRelationInput>;
}>;


export type MessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id: string, content: string, createdAt: any, author: { __typename?: 'User', id: string, name?: string | null, images: Array<{ __typename?: 'File', path: string }> } }> };

export type MeIdQueryVariables = Exact<{ [key: string]: never; }>;


export type MeIdQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name?: string | null, phone: string, images: Array<{ __typename?: 'File', path: string }> } | null };


export const SignInDocument = gql`
    mutation signIn($input: AuthInput!) {
  signIn(input: $input) {
    token
    user {
      id
      name
      phone
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const ConversationsDocument = gql`
    query Conversations {
  me {
    id
    conversations {
      id
      members {
        id
        name
        images {
          path
        }
      }
      lastMessageContent
      lastMessageAuthor
      lastMessageDate
    }
  }
}
    `;

/**
 * __useConversationsQuery__
 *
 * To run a query within a React component, call `useConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useConversationsQuery(baseOptions?: Apollo.QueryHookOptions<ConversationsQuery, ConversationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConversationsQuery, ConversationsQueryVariables>(ConversationsDocument, options);
      }
export function useConversationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConversationsQuery, ConversationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConversationsQuery, ConversationsQueryVariables>(ConversationsDocument, options);
        }
export type ConversationsQueryHookResult = ReturnType<typeof useConversationsQuery>;
export type ConversationsLazyQueryHookResult = ReturnType<typeof useConversationsLazyQuery>;
export type ConversationsQueryResult = Apollo.QueryResult<ConversationsQuery, ConversationsQueryVariables>;
export const MessagesDocument = gql`
    query Messages($where: MessageWhereInput, $orderBy: [MessageOrderByWithRelationInput!]) {
  messages(where: $where, take: 10, orderBy: $orderBy) {
    id
    content
    author {
      id
      name
      images {
        path
      }
    }
    createdAt
  }
}
    `;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useMessagesQuery(baseOptions?: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
      }
export function useMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
        }
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<typeof useMessagesLazyQuery>;
export type MessagesQueryResult = Apollo.QueryResult<MessagesQuery, MessagesQueryVariables>;
export const MeIdDocument = gql`
    query MeId {
  me {
    id
  }
}
    `;

/**
 * __useMeIdQuery__
 *
 * To run a query within a React component, call `useMeIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeIdQuery(baseOptions?: Apollo.QueryHookOptions<MeIdQuery, MeIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeIdQuery, MeIdQueryVariables>(MeIdDocument, options);
      }
export function useMeIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeIdQuery, MeIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeIdQuery, MeIdQueryVariables>(MeIdDocument, options);
        }
export type MeIdQueryHookResult = ReturnType<typeof useMeIdQuery>;
export type MeIdLazyQueryHookResult = ReturnType<typeof useMeIdLazyQuery>;
export type MeIdQueryResult = Apollo.QueryResult<MeIdQuery, MeIdQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    name
    phone
    images {
      path
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;