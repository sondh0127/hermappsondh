import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "annotations" */
export type Annotations = {
   __typename?: 'annotations';
  data: Scalars['jsonb'];
  /** An object relationship */
  document: Documents;
  document_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  label?: Maybe<Labels>;
  label_id?: Maybe<Scalars['uuid']>;
  manual: Scalars['Boolean'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "annotations" */
export type AnnotationsDataArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "annotations" */
export type Annotations_Aggregate = {
   __typename?: 'annotations_aggregate';
  aggregate?: Maybe<Annotations_Aggregate_Fields>;
  nodes: Array<Annotations>;
};

/** aggregate fields of "annotations" */
export type Annotations_Aggregate_Fields = {
   __typename?: 'annotations_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Annotations_Max_Fields>;
  min?: Maybe<Annotations_Min_Fields>;
};


/** aggregate fields of "annotations" */
export type Annotations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Annotations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "annotations" */
export type Annotations_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Annotations_Max_Order_By>;
  min?: Maybe<Annotations_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Annotations_Append_Input = {
  data?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "annotations" */
export type Annotations_Arr_Rel_Insert_Input = {
  data: Array<Annotations_Insert_Input>;
  on_conflict?: Maybe<Annotations_On_Conflict>;
};

/** Boolean expression to filter rows from the table "annotations". All fields are combined with a logical 'AND'. */
export type Annotations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Annotations_Bool_Exp>>>;
  _not?: Maybe<Annotations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Annotations_Bool_Exp>>>;
  data?: Maybe<Jsonb_Comparison_Exp>;
  document?: Maybe<Documents_Bool_Exp>;
  document_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  label?: Maybe<Labels_Bool_Exp>;
  label_id?: Maybe<Uuid_Comparison_Exp>;
  manual?: Maybe<Boolean_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "annotations" */
export enum Annotations_Constraint {
  /** unique or primary key constraint */
  AnnotationsDocumentIdUserIdLabelIdDataKey = 'annotations_document_id_user_id_label_id_data_key',
  /** unique or primary key constraint */
  AnnotationsPkey = 'annotations_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Annotations_Delete_At_Path_Input = {
  data?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Annotations_Delete_Elem_Input = {
  data?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Annotations_Delete_Key_Input = {
  data?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "annotations" */
export type Annotations_Insert_Input = {
  data?: Maybe<Scalars['jsonb']>;
  document?: Maybe<Documents_Obj_Rel_Insert_Input>;
  document_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Labels_Obj_Rel_Insert_Input>;
  label_id?: Maybe<Scalars['uuid']>;
  manual?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Annotations_Max_Fields = {
   __typename?: 'annotations_max_fields';
  document_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  label_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "annotations" */
export type Annotations_Max_Order_By = {
  document_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Annotations_Min_Fields = {
   __typename?: 'annotations_min_fields';
  document_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  label_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "annotations" */
export type Annotations_Min_Order_By = {
  document_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "annotations" */
export type Annotations_Mutation_Response = {
   __typename?: 'annotations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Annotations>;
};

/** input type for inserting object relation for remote table "annotations" */
export type Annotations_Obj_Rel_Insert_Input = {
  data: Annotations_Insert_Input;
  on_conflict?: Maybe<Annotations_On_Conflict>;
};

/** on conflict condition type for table "annotations" */
export type Annotations_On_Conflict = {
  constraint: Annotations_Constraint;
  update_columns: Array<Annotations_Update_Column>;
  where?: Maybe<Annotations_Bool_Exp>;
};

/** ordering options when selecting data from "annotations" */
export type Annotations_Order_By = {
  data?: Maybe<Order_By>;
  document?: Maybe<Documents_Order_By>;
  document_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Labels_Order_By>;
  label_id?: Maybe<Order_By>;
  manual?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "annotations" */
export type Annotations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Annotations_Prepend_Input = {
  data?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "annotations" */
export enum Annotations_Select_Column {
  /** column name */
  Data = 'data',
  /** column name */
  DocumentId = 'document_id',
  /** column name */
  Id = 'id',
  /** column name */
  LabelId = 'label_id',
  /** column name */
  Manual = 'manual',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "annotations" */
export type Annotations_Set_Input = {
  data?: Maybe<Scalars['jsonb']>;
  document_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  label_id?: Maybe<Scalars['uuid']>;
  manual?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "annotations" */
export enum Annotations_Update_Column {
  /** column name */
  Data = 'data',
  /** column name */
  DocumentId = 'document_id',
  /** column name */
  Id = 'id',
  /** column name */
  LabelId = 'label_id',
  /** column name */
  Manual = 'manual',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "documents" */
export type Documents = {
   __typename?: 'documents';
  /** An array relationship */
  annotations: Array<Annotations>;
  /** An aggregated array relationship */
  annotations_aggregate: Annotations_Aggregate;
  approved_user_id: Scalars['uuid'];
  id: Scalars['uuid'];
  meta: Scalars['String'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['uuid'];
  text: Scalars['String'];
  /** An object relationship */
  user: Users;
};


/** columns and relationships of "documents" */
export type DocumentsAnnotationsArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/** columns and relationships of "documents" */
export type DocumentsAnnotations_AggregateArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};

/** aggregated selection of "documents" */
export type Documents_Aggregate = {
   __typename?: 'documents_aggregate';
  aggregate?: Maybe<Documents_Aggregate_Fields>;
  nodes: Array<Documents>;
};

/** aggregate fields of "documents" */
export type Documents_Aggregate_Fields = {
   __typename?: 'documents_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Documents_Max_Fields>;
  min?: Maybe<Documents_Min_Fields>;
};


/** aggregate fields of "documents" */
export type Documents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Documents_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "documents" */
export type Documents_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Documents_Max_Order_By>;
  min?: Maybe<Documents_Min_Order_By>;
};

/** input type for inserting array relation for remote table "documents" */
export type Documents_Arr_Rel_Insert_Input = {
  data: Array<Documents_Insert_Input>;
  on_conflict?: Maybe<Documents_On_Conflict>;
};

/** Boolean expression to filter rows from the table "documents". All fields are combined with a logical 'AND'. */
export type Documents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Documents_Bool_Exp>>>;
  _not?: Maybe<Documents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Documents_Bool_Exp>>>;
  annotations?: Maybe<Annotations_Bool_Exp>;
  approved_user_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meta?: Maybe<String_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "documents" */
export enum Documents_Constraint {
  /** unique or primary key constraint */
  DocumentsPkey = 'documents_pkey'
}

/** input type for inserting data into table "documents" */
export type Documents_Insert_Input = {
  annotations?: Maybe<Annotations_Arr_Rel_Insert_Input>;
  approved_user_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['String']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Documents_Max_Fields = {
   __typename?: 'documents_max_fields';
  approved_user_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "documents" */
export type Documents_Max_Order_By = {
  approved_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Documents_Min_Fields = {
   __typename?: 'documents_min_fields';
  approved_user_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "documents" */
export type Documents_Min_Order_By = {
  approved_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** response of any mutation on the table "documents" */
export type Documents_Mutation_Response = {
   __typename?: 'documents_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Documents>;
};

/** input type for inserting object relation for remote table "documents" */
export type Documents_Obj_Rel_Insert_Input = {
  data: Documents_Insert_Input;
  on_conflict?: Maybe<Documents_On_Conflict>;
};

/** on conflict condition type for table "documents" */
export type Documents_On_Conflict = {
  constraint: Documents_Constraint;
  update_columns: Array<Documents_Update_Column>;
  where?: Maybe<Documents_Bool_Exp>;
};

/** ordering options when selecting data from "documents" */
export type Documents_Order_By = {
  annotations_aggregate?: Maybe<Annotations_Aggregate_Order_By>;
  approved_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "documents" */
export type Documents_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "documents" */
export enum Documents_Select_Column {
  /** column name */
  ApprovedUserId = 'approved_user_id',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "documents" */
export type Documents_Set_Input = {
  approved_user_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** update columns of table "documents" */
export enum Documents_Update_Column {
  /** column name */
  ApprovedUserId = 'approved_user_id',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Text = 'text'
}


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "labels" */
export type Labels = {
   __typename?: 'labels';
  /** An array relationship */
  annotations: Array<Annotations>;
  /** An aggregated array relationship */
  annotations_aggregate: Annotations_Aggregate;
  color: Scalars['String'];
  hotkey: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['uuid'];
  text: Scalars['String'];
};


/** columns and relationships of "labels" */
export type LabelsAnnotationsArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/** columns and relationships of "labels" */
export type LabelsAnnotations_AggregateArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};

/** aggregated selection of "labels" */
export type Labels_Aggregate = {
   __typename?: 'labels_aggregate';
  aggregate?: Maybe<Labels_Aggregate_Fields>;
  nodes: Array<Labels>;
};

/** aggregate fields of "labels" */
export type Labels_Aggregate_Fields = {
   __typename?: 'labels_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Labels_Max_Fields>;
  min?: Maybe<Labels_Min_Fields>;
};


/** aggregate fields of "labels" */
export type Labels_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Labels_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "labels" */
export type Labels_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Labels_Max_Order_By>;
  min?: Maybe<Labels_Min_Order_By>;
};

/** input type for inserting array relation for remote table "labels" */
export type Labels_Arr_Rel_Insert_Input = {
  data: Array<Labels_Insert_Input>;
  on_conflict?: Maybe<Labels_On_Conflict>;
};

/** Boolean expression to filter rows from the table "labels". All fields are combined with a logical 'AND'. */
export type Labels_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Labels_Bool_Exp>>>;
  _not?: Maybe<Labels_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Labels_Bool_Exp>>>;
  annotations?: Maybe<Annotations_Bool_Exp>;
  color?: Maybe<String_Comparison_Exp>;
  hotkey?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "labels" */
export enum Labels_Constraint {
  /** unique or primary key constraint */
  LabelsPkey = 'labels_pkey',
  /** unique or primary key constraint */
  LabelsProjectIdTextHotkeyColorKey = 'labels_project_id_text_hotkey_color_key'
}

/** input type for inserting data into table "labels" */
export type Labels_Insert_Input = {
  annotations?: Maybe<Annotations_Arr_Rel_Insert_Input>;
  color?: Maybe<Scalars['String']>;
  hotkey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Labels_Max_Fields = {
   __typename?: 'labels_max_fields';
  color?: Maybe<Scalars['String']>;
  hotkey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "labels" */
export type Labels_Max_Order_By = {
  color?: Maybe<Order_By>;
  hotkey?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Labels_Min_Fields = {
   __typename?: 'labels_min_fields';
  color?: Maybe<Scalars['String']>;
  hotkey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "labels" */
export type Labels_Min_Order_By = {
  color?: Maybe<Order_By>;
  hotkey?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** response of any mutation on the table "labels" */
export type Labels_Mutation_Response = {
   __typename?: 'labels_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Labels>;
};

/** input type for inserting object relation for remote table "labels" */
export type Labels_Obj_Rel_Insert_Input = {
  data: Labels_Insert_Input;
  on_conflict?: Maybe<Labels_On_Conflict>;
};

/** on conflict condition type for table "labels" */
export type Labels_On_Conflict = {
  constraint: Labels_Constraint;
  update_columns: Array<Labels_Update_Column>;
  where?: Maybe<Labels_Bool_Exp>;
};

/** ordering options when selecting data from "labels" */
export type Labels_Order_By = {
  annotations_aggregate?: Maybe<Annotations_Aggregate_Order_By>;
  color?: Maybe<Order_By>;
  hotkey?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** primary key columns input for table: "labels" */
export type Labels_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "labels" */
export enum Labels_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Hotkey = 'hotkey',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "labels" */
export type Labels_Set_Input = {
  color?: Maybe<Scalars['String']>;
  hotkey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** update columns of table "labels" */
export enum Labels_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Hotkey = 'hotkey',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Text = 'text'
}

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** delete data from the table: "annotations" */
  delete_annotations?: Maybe<Annotations_Mutation_Response>;
  /** delete single row from the table: "annotations" */
  delete_annotations_by_pk?: Maybe<Annotations>;
  /** delete data from the table: "documents" */
  delete_documents?: Maybe<Documents_Mutation_Response>;
  /** delete single row from the table: "documents" */
  delete_documents_by_pk?: Maybe<Documents>;
  /** delete data from the table: "labels" */
  delete_labels?: Maybe<Labels_Mutation_Response>;
  /** delete single row from the table: "labels" */
  delete_labels_by_pk?: Maybe<Labels>;
  /** delete data from the table: "project_types" */
  delete_project_types?: Maybe<Project_Types_Mutation_Response>;
  /** delete single row from the table: "project_types" */
  delete_project_types_by_pk?: Maybe<Project_Types>;
  /** delete data from the table: "project_user_role" */
  delete_project_user_role?: Maybe<Project_User_Role_Mutation_Response>;
  /** delete single row from the table: "project_user_role" */
  delete_project_user_role_by_pk?: Maybe<Project_User_Role>;
  /** delete data from the table: "project_users" */
  delete_project_users?: Maybe<Project_Users_Mutation_Response>;
  /** delete single row from the table: "project_users" */
  delete_project_users_by_pk?: Maybe<Project_Users>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "annotations" */
  insert_annotations?: Maybe<Annotations_Mutation_Response>;
  /** insert a single row into the table: "annotations" */
  insert_annotations_one?: Maybe<Annotations>;
  /** insert data into the table: "documents" */
  insert_documents?: Maybe<Documents_Mutation_Response>;
  /** insert a single row into the table: "documents" */
  insert_documents_one?: Maybe<Documents>;
  /** insert data into the table: "labels" */
  insert_labels?: Maybe<Labels_Mutation_Response>;
  /** insert a single row into the table: "labels" */
  insert_labels_one?: Maybe<Labels>;
  /** insert data into the table: "project_types" */
  insert_project_types?: Maybe<Project_Types_Mutation_Response>;
  /** insert a single row into the table: "project_types" */
  insert_project_types_one?: Maybe<Project_Types>;
  /** insert data into the table: "project_user_role" */
  insert_project_user_role?: Maybe<Project_User_Role_Mutation_Response>;
  /** insert a single row into the table: "project_user_role" */
  insert_project_user_role_one?: Maybe<Project_User_Role>;
  /** insert data into the table: "project_users" */
  insert_project_users?: Maybe<Project_Users_Mutation_Response>;
  /** insert a single row into the table: "project_users" */
  insert_project_users_one?: Maybe<Project_Users>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "annotations" */
  update_annotations?: Maybe<Annotations_Mutation_Response>;
  /** update single row of the table: "annotations" */
  update_annotations_by_pk?: Maybe<Annotations>;
  /** update data of the table: "documents" */
  update_documents?: Maybe<Documents_Mutation_Response>;
  /** update single row of the table: "documents" */
  update_documents_by_pk?: Maybe<Documents>;
  /** update data of the table: "labels" */
  update_labels?: Maybe<Labels_Mutation_Response>;
  /** update single row of the table: "labels" */
  update_labels_by_pk?: Maybe<Labels>;
  /** update data of the table: "project_types" */
  update_project_types?: Maybe<Project_Types_Mutation_Response>;
  /** update single row of the table: "project_types" */
  update_project_types_by_pk?: Maybe<Project_Types>;
  /** update data of the table: "project_user_role" */
  update_project_user_role?: Maybe<Project_User_Role_Mutation_Response>;
  /** update single row of the table: "project_user_role" */
  update_project_user_role_by_pk?: Maybe<Project_User_Role>;
  /** update data of the table: "project_users" */
  update_project_users?: Maybe<Project_Users_Mutation_Response>;
  /** update single row of the table: "project_users" */
  update_project_users_by_pk?: Maybe<Project_Users>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_AnnotationsArgs = {
  where: Annotations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Annotations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_DocumentsArgs = {
  where: Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Documents_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_LabelsArgs = {
  where: Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Labels_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Project_TypesArgs = {
  where: Project_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_Types_By_PkArgs = {
  key: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Project_User_RoleArgs = {
  where: Project_User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_User_Role_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Project_UsersArgs = {
  where: Project_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Projects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  key: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  auth0_id: Scalars['String'];
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AnnotationsArgs = {
  objects: Array<Annotations_Insert_Input>;
  on_conflict?: Maybe<Annotations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Annotations_OneArgs = {
  object: Annotations_Insert_Input;
  on_conflict?: Maybe<Annotations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DocumentsArgs = {
  objects: Array<Documents_Insert_Input>;
  on_conflict?: Maybe<Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Documents_OneArgs = {
  object: Documents_Insert_Input;
  on_conflict?: Maybe<Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LabelsArgs = {
  objects: Array<Labels_Insert_Input>;
  on_conflict?: Maybe<Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Labels_OneArgs = {
  object: Labels_Insert_Input;
  on_conflict?: Maybe<Labels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_TypesArgs = {
  objects: Array<Project_Types_Insert_Input>;
  on_conflict?: Maybe<Project_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_Types_OneArgs = {
  object: Project_Types_Insert_Input;
  on_conflict?: Maybe<Project_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_User_RoleArgs = {
  objects: Array<Project_User_Role_Insert_Input>;
  on_conflict?: Maybe<Project_User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_User_Role_OneArgs = {
  object: Project_User_Role_Insert_Input;
  on_conflict?: Maybe<Project_User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_UsersArgs = {
  objects: Array<Project_Users_Insert_Input>;
  on_conflict?: Maybe<Project_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_Users_OneArgs = {
  object: Project_Users_Insert_Input;
  on_conflict?: Maybe<Project_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
  on_conflict?: Maybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
  on_conflict?: Maybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AnnotationsArgs = {
  _append?: Maybe<Annotations_Append_Input>;
  _delete_at_path?: Maybe<Annotations_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Annotations_Delete_Elem_Input>;
  _delete_key?: Maybe<Annotations_Delete_Key_Input>;
  _prepend?: Maybe<Annotations_Prepend_Input>;
  _set?: Maybe<Annotations_Set_Input>;
  where: Annotations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Annotations_By_PkArgs = {
  _append?: Maybe<Annotations_Append_Input>;
  _delete_at_path?: Maybe<Annotations_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Annotations_Delete_Elem_Input>;
  _delete_key?: Maybe<Annotations_Delete_Key_Input>;
  _prepend?: Maybe<Annotations_Prepend_Input>;
  _set?: Maybe<Annotations_Set_Input>;
  pk_columns: Annotations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DocumentsArgs = {
  _set?: Maybe<Documents_Set_Input>;
  where: Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Documents_By_PkArgs = {
  _set?: Maybe<Documents_Set_Input>;
  pk_columns: Documents_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LabelsArgs = {
  _set?: Maybe<Labels_Set_Input>;
  where: Labels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Labels_By_PkArgs = {
  _set?: Maybe<Labels_Set_Input>;
  pk_columns: Labels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_TypesArgs = {
  _set?: Maybe<Project_Types_Set_Input>;
  where: Project_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Types_By_PkArgs = {
  _set?: Maybe<Project_Types_Set_Input>;
  pk_columns: Project_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_User_RoleArgs = {
  _set?: Maybe<Project_User_Role_Set_Input>;
  where: Project_User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_User_Role_By_PkArgs = {
  _set?: Maybe<Project_User_Role_Set_Input>;
  pk_columns: Project_User_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_UsersArgs = {
  _set?: Maybe<Project_Users_Set_Input>;
  where: Project_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Users_By_PkArgs = {
  _set?: Maybe<Project_Users_Set_Input>;
  pk_columns: Project_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _inc?: Maybe<Projects_Inc_Input>;
  _set?: Maybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_By_PkArgs = {
  _inc?: Maybe<Projects_Inc_Input>;
  _set?: Maybe<Projects_Set_Input>;
  pk_columns: Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: Maybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "project_types" */
export type Project_Types = {
   __typename?: 'project_types';
  key: Scalars['String'];
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregated array relationship */
  projects_aggregate: Projects_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "project_types" */
export type Project_TypesProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** columns and relationships of "project_types" */
export type Project_TypesProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};

/** aggregated selection of "project_types" */
export type Project_Types_Aggregate = {
   __typename?: 'project_types_aggregate';
  aggregate?: Maybe<Project_Types_Aggregate_Fields>;
  nodes: Array<Project_Types>;
};

/** aggregate fields of "project_types" */
export type Project_Types_Aggregate_Fields = {
   __typename?: 'project_types_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Project_Types_Max_Fields>;
  min?: Maybe<Project_Types_Min_Fields>;
};


/** aggregate fields of "project_types" */
export type Project_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Project_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_types" */
export type Project_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Project_Types_Max_Order_By>;
  min?: Maybe<Project_Types_Min_Order_By>;
};

/** input type for inserting array relation for remote table "project_types" */
export type Project_Types_Arr_Rel_Insert_Input = {
  data: Array<Project_Types_Insert_Input>;
  on_conflict?: Maybe<Project_Types_On_Conflict>;
};

/** Boolean expression to filter rows from the table "project_types". All fields are combined with a logical 'AND'. */
export type Project_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Project_Types_Bool_Exp>>>;
  _not?: Maybe<Project_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Project_Types_Bool_Exp>>>;
  key?: Maybe<String_Comparison_Exp>;
  projects?: Maybe<Projects_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_types" */
export enum Project_Types_Constraint {
  /** unique or primary key constraint */
  ProjectTypesPkey = 'project_types_pkey',
  /** unique or primary key constraint */
  ProjectTypesValueKey = 'project_types_value_key'
}

export enum Project_Types_Enum {
  /** PDF Labeling */
  PdfLabelingProject = 'PdfLabelingProject',
  /** Translation */
  Seq2seqProject = 'Seq2seqProject',
  /** Named Entity Recognition */
  SequenceLabelingProject = 'SequenceLabelingProject',
  /** Sentiment Analysis */
  TextClassificationProject = 'TextClassificationProject'
}

/** expression to compare columns of type project_types_enum. All fields are combined with logical 'AND'. */
export type Project_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Project_Types_Enum>;
  _in?: Maybe<Array<Project_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Project_Types_Enum>;
  _nin?: Maybe<Array<Project_Types_Enum>>;
};

/** input type for inserting data into table "project_types" */
export type Project_Types_Insert_Input = {
  key?: Maybe<Scalars['String']>;
  projects?: Maybe<Projects_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Project_Types_Max_Fields = {
   __typename?: 'project_types_max_fields';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "project_types" */
export type Project_Types_Max_Order_By = {
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Types_Min_Fields = {
   __typename?: 'project_types_min_fields';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "project_types" */
export type Project_Types_Min_Order_By = {
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "project_types" */
export type Project_Types_Mutation_Response = {
   __typename?: 'project_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Project_Types>;
};

/** input type for inserting object relation for remote table "project_types" */
export type Project_Types_Obj_Rel_Insert_Input = {
  data: Project_Types_Insert_Input;
  on_conflict?: Maybe<Project_Types_On_Conflict>;
};

/** on conflict condition type for table "project_types" */
export type Project_Types_On_Conflict = {
  constraint: Project_Types_Constraint;
  update_columns: Array<Project_Types_Update_Column>;
  where?: Maybe<Project_Types_Bool_Exp>;
};

/** ordering options when selecting data from "project_types" */
export type Project_Types_Order_By = {
  key?: Maybe<Order_By>;
  projects_aggregate?: Maybe<Projects_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "project_types" */
export type Project_Types_Pk_Columns_Input = {
  key: Scalars['String'];
};

/** select columns of table "project_types" */
export enum Project_Types_Select_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "project_types" */
export type Project_Types_Set_Input = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "project_types" */
export enum Project_Types_Update_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "project_user_role" */
export type Project_User_Role = {
   __typename?: 'project_user_role';
  id: Scalars['uuid'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['uuid'];
  /** An object relationship */
  role: Roles;
  role_type: Roles_Enum;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "project_user_role" */
export type Project_User_Role_Aggregate = {
   __typename?: 'project_user_role_aggregate';
  aggregate?: Maybe<Project_User_Role_Aggregate_Fields>;
  nodes: Array<Project_User_Role>;
};

/** aggregate fields of "project_user_role" */
export type Project_User_Role_Aggregate_Fields = {
   __typename?: 'project_user_role_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Project_User_Role_Max_Fields>;
  min?: Maybe<Project_User_Role_Min_Fields>;
};


/** aggregate fields of "project_user_role" */
export type Project_User_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Project_User_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_user_role" */
export type Project_User_Role_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Project_User_Role_Max_Order_By>;
  min?: Maybe<Project_User_Role_Min_Order_By>;
};

/** input type for inserting array relation for remote table "project_user_role" */
export type Project_User_Role_Arr_Rel_Insert_Input = {
  data: Array<Project_User_Role_Insert_Input>;
  on_conflict?: Maybe<Project_User_Role_On_Conflict>;
};

/** Boolean expression to filter rows from the table "project_user_role". All fields are combined with a logical 'AND'. */
export type Project_User_Role_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Project_User_Role_Bool_Exp>>>;
  _not?: Maybe<Project_User_Role_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Project_User_Role_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  role_type?: Maybe<Roles_Enum_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_user_role" */
export enum Project_User_Role_Constraint {
  /** unique or primary key constraint */
  ProjectUserRolePkey = 'project_user_role_pkey',
  /** unique or primary key constraint */
  ProjectUserRoleProjectIdUserIdRoleKey = 'project_user_role_project_id_user_id_role_key'
}

/** input type for inserting data into table "project_user_role" */
export type Project_User_Role_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  role_type?: Maybe<Roles_Enum>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Project_User_Role_Max_Fields = {
   __typename?: 'project_user_role_max_fields';
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "project_user_role" */
export type Project_User_Role_Max_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Project_User_Role_Min_Fields = {
   __typename?: 'project_user_role_min_fields';
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "project_user_role" */
export type Project_User_Role_Min_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "project_user_role" */
export type Project_User_Role_Mutation_Response = {
   __typename?: 'project_user_role_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Project_User_Role>;
};

/** input type for inserting object relation for remote table "project_user_role" */
export type Project_User_Role_Obj_Rel_Insert_Input = {
  data: Project_User_Role_Insert_Input;
  on_conflict?: Maybe<Project_User_Role_On_Conflict>;
};

/** on conflict condition type for table "project_user_role" */
export type Project_User_Role_On_Conflict = {
  constraint: Project_User_Role_Constraint;
  update_columns: Array<Project_User_Role_Update_Column>;
  where?: Maybe<Project_User_Role_Bool_Exp>;
};

/** ordering options when selecting data from "project_user_role" */
export type Project_User_Role_Order_By = {
  id?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_id?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
  role_type?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "project_user_role" */
export type Project_User_Role_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "project_user_role" */
export enum Project_User_Role_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  RoleType = 'role_type',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "project_user_role" */
export type Project_User_Role_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  role_type?: Maybe<Roles_Enum>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "project_user_role" */
export enum Project_User_Role_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  RoleType = 'role_type',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "project_users" */
export type Project_Users = {
   __typename?: 'project_users';
  id: Scalars['uuid'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "project_users" */
export type Project_Users_Aggregate = {
   __typename?: 'project_users_aggregate';
  aggregate?: Maybe<Project_Users_Aggregate_Fields>;
  nodes: Array<Project_Users>;
};

/** aggregate fields of "project_users" */
export type Project_Users_Aggregate_Fields = {
   __typename?: 'project_users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Project_Users_Max_Fields>;
  min?: Maybe<Project_Users_Min_Fields>;
};


/** aggregate fields of "project_users" */
export type Project_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Project_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_users" */
export type Project_Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Project_Users_Max_Order_By>;
  min?: Maybe<Project_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "project_users" */
export type Project_Users_Arr_Rel_Insert_Input = {
  data: Array<Project_Users_Insert_Input>;
  on_conflict?: Maybe<Project_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "project_users". All fields are combined with a logical 'AND'. */
export type Project_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Project_Users_Bool_Exp>>>;
  _not?: Maybe<Project_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Project_Users_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_users" */
export enum Project_Users_Constraint {
  /** unique or primary key constraint */
  ProjectUsersPkey = 'project_users_pkey',
  /** unique or primary key constraint */
  ProjectUsersProjectIdUserIdKey = 'project_users_project_id_user_id_key'
}

/** input type for inserting data into table "project_users" */
export type Project_Users_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Project_Users_Max_Fields = {
   __typename?: 'project_users_max_fields';
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "project_users" */
export type Project_Users_Max_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Users_Min_Fields = {
   __typename?: 'project_users_min_fields';
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "project_users" */
export type Project_Users_Min_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "project_users" */
export type Project_Users_Mutation_Response = {
   __typename?: 'project_users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Project_Users>;
};

/** input type for inserting object relation for remote table "project_users" */
export type Project_Users_Obj_Rel_Insert_Input = {
  data: Project_Users_Insert_Input;
  on_conflict?: Maybe<Project_Users_On_Conflict>;
};

/** on conflict condition type for table "project_users" */
export type Project_Users_On_Conflict = {
  constraint: Project_Users_Constraint;
  update_columns: Array<Project_Users_Update_Column>;
  where?: Maybe<Project_Users_Bool_Exp>;
};

/** ordering options when selecting data from "project_users" */
export type Project_Users_Order_By = {
  id?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "project_users" */
export type Project_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "project_users" */
export enum Project_Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "project_users" */
export type Project_Users_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "project_users" */
export enum Project_Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "projects" */
export type Projects = {
   __typename?: 'projects';
  annotator_per_example: Scalars['Int'];
  collaborative_annotation: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregated array relationship */
  documents_aggregate: Documents_Aggregate;
  guideline: Scalars['String'];
  id: Scalars['uuid'];
  is_public: Scalars['Boolean'];
  /** An array relationship */
  labels: Array<Labels>;
  /** An aggregated array relationship */
  labels_aggregate: Labels_Aggregate;
  name: Scalars['String'];
  /** An object relationship */
  projectType: Project_Types;
  project_type: Project_Types_Enum;
  /** An array relationship */
  project_user_roles: Array<Project_User_Role>;
  /** An aggregated array relationship */
  project_user_roles_aggregate: Project_User_Role_Aggregate;
  /** An array relationship */
  project_users: Array<Project_Users>;
  /** An aggregated array relationship */
  project_users_aggregate: Project_Users_Aggregate;
  randomize_document_order: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "projects" */
export type ProjectsDocumentsArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsDocuments_AggregateArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsLabelsArgs = {
  distinct_on?: Maybe<Array<Labels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Labels_Order_By>>;
  where?: Maybe<Labels_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsLabels_AggregateArgs = {
  distinct_on?: Maybe<Array<Labels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Labels_Order_By>>;
  where?: Maybe<Labels_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsProject_User_RolesArgs = {
  distinct_on?: Maybe<Array<Project_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_User_Role_Order_By>>;
  where?: Maybe<Project_User_Role_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsProject_User_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_User_Role_Order_By>>;
  where?: Maybe<Project_User_Role_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsProject_UsersArgs = {
  distinct_on?: Maybe<Array<Project_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Users_Order_By>>;
  where?: Maybe<Project_Users_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsProject_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Users_Order_By>>;
  where?: Maybe<Project_Users_Bool_Exp>;
};

/** aggregated selection of "projects" */
export type Projects_Aggregate = {
   __typename?: 'projects_aggregate';
  aggregate?: Maybe<Projects_Aggregate_Fields>;
  nodes: Array<Projects>;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_Fields = {
   __typename?: 'projects_aggregate_fields';
  avg?: Maybe<Projects_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Projects_Max_Fields>;
  min?: Maybe<Projects_Min_Fields>;
  stddev?: Maybe<Projects_Stddev_Fields>;
  stddev_pop?: Maybe<Projects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Projects_Stddev_Samp_Fields>;
  sum?: Maybe<Projects_Sum_Fields>;
  var_pop?: Maybe<Projects_Var_Pop_Fields>;
  var_samp?: Maybe<Projects_Var_Samp_Fields>;
  variance?: Maybe<Projects_Variance_Fields>;
};


/** aggregate fields of "projects" */
export type Projects_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Projects_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "projects" */
export type Projects_Aggregate_Order_By = {
  avg?: Maybe<Projects_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Projects_Max_Order_By>;
  min?: Maybe<Projects_Min_Order_By>;
  stddev?: Maybe<Projects_Stddev_Order_By>;
  stddev_pop?: Maybe<Projects_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Projects_Stddev_Samp_Order_By>;
  sum?: Maybe<Projects_Sum_Order_By>;
  var_pop?: Maybe<Projects_Var_Pop_Order_By>;
  var_samp?: Maybe<Projects_Var_Samp_Order_By>;
  variance?: Maybe<Projects_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "projects" */
export type Projects_Arr_Rel_Insert_Input = {
  data: Array<Projects_Insert_Input>;
  on_conflict?: Maybe<Projects_On_Conflict>;
};

/** aggregate avg on columns */
export type Projects_Avg_Fields = {
   __typename?: 'projects_avg_fields';
  annotator_per_example?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "projects" */
export type Projects_Avg_Order_By = {
  annotator_per_example?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Projects_Bool_Exp>>>;
  _not?: Maybe<Projects_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Projects_Bool_Exp>>>;
  annotator_per_example?: Maybe<Int_Comparison_Exp>;
  collaborative_annotation?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  documents?: Maybe<Documents_Bool_Exp>;
  guideline?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_public?: Maybe<Boolean_Comparison_Exp>;
  labels?: Maybe<Labels_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  projectType?: Maybe<Project_Types_Bool_Exp>;
  project_type?: Maybe<Project_Types_Enum_Comparison_Exp>;
  project_user_roles?: Maybe<Project_User_Role_Bool_Exp>;
  project_users?: Maybe<Project_Users_Bool_Exp>;
  randomize_document_order?: Maybe<Boolean_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint */
  ProjectsNameKey = 'projects_name_key',
  /** unique or primary key constraint */
  ProjectsPkey = 'projects_pkey'
}

/** input type for incrementing integer columne in table "projects" */
export type Projects_Inc_Input = {
  annotator_per_example?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  annotator_per_example?: Maybe<Scalars['Int']>;
  collaborative_annotation?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  documents?: Maybe<Documents_Arr_Rel_Insert_Input>;
  guideline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_public?: Maybe<Scalars['Boolean']>;
  labels?: Maybe<Labels_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  projectType?: Maybe<Project_Types_Obj_Rel_Insert_Input>;
  project_type?: Maybe<Project_Types_Enum>;
  project_user_roles?: Maybe<Project_User_Role_Arr_Rel_Insert_Input>;
  project_users?: Maybe<Project_Users_Arr_Rel_Insert_Input>;
  randomize_document_order?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Projects_Max_Fields = {
   __typename?: 'projects_max_fields';
  annotator_per_example?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  guideline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "projects" */
export type Projects_Max_Order_By = {
  annotator_per_example?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  guideline?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Projects_Min_Fields = {
   __typename?: 'projects_min_fields';
  annotator_per_example?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  guideline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "projects" */
export type Projects_Min_Order_By = {
  annotator_per_example?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  guideline?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
   __typename?: 'projects_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Projects>;
};

/** input type for inserting object relation for remote table "projects" */
export type Projects_Obj_Rel_Insert_Input = {
  data: Projects_Insert_Input;
  on_conflict?: Maybe<Projects_On_Conflict>;
};

/** on conflict condition type for table "projects" */
export type Projects_On_Conflict = {
  constraint: Projects_Constraint;
  update_columns: Array<Projects_Update_Column>;
  where?: Maybe<Projects_Bool_Exp>;
};

/** ordering options when selecting data from "projects" */
export type Projects_Order_By = {
  annotator_per_example?: Maybe<Order_By>;
  collaborative_annotation?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  documents_aggregate?: Maybe<Documents_Aggregate_Order_By>;
  guideline?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_public?: Maybe<Order_By>;
  labels_aggregate?: Maybe<Labels_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  projectType?: Maybe<Project_Types_Order_By>;
  project_type?: Maybe<Order_By>;
  project_user_roles_aggregate?: Maybe<Project_User_Role_Aggregate_Order_By>;
  project_users_aggregate?: Maybe<Project_Users_Aggregate_Order_By>;
  randomize_document_order?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "projects" */
export type Projects_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  AnnotatorPerExample = 'annotator_per_example',
  /** column name */
  CollaborativeAnnotation = 'collaborative_annotation',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Guideline = 'guideline',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectType = 'project_type',
  /** column name */
  RandomizeDocumentOrder = 'randomize_document_order',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  annotator_per_example?: Maybe<Scalars['Int']>;
  collaborative_annotation?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  guideline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_public?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  project_type?: Maybe<Project_Types_Enum>;
  randomize_document_order?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Projects_Stddev_Fields = {
   __typename?: 'projects_stddev_fields';
  annotator_per_example?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "projects" */
export type Projects_Stddev_Order_By = {
  annotator_per_example?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Projects_Stddev_Pop_Fields = {
   __typename?: 'projects_stddev_pop_fields';
  annotator_per_example?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "projects" */
export type Projects_Stddev_Pop_Order_By = {
  annotator_per_example?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Projects_Stddev_Samp_Fields = {
   __typename?: 'projects_stddev_samp_fields';
  annotator_per_example?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "projects" */
export type Projects_Stddev_Samp_Order_By = {
  annotator_per_example?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Projects_Sum_Fields = {
   __typename?: 'projects_sum_fields';
  annotator_per_example?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "projects" */
export type Projects_Sum_Order_By = {
  annotator_per_example?: Maybe<Order_By>;
};

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  AnnotatorPerExample = 'annotator_per_example',
  /** column name */
  CollaborativeAnnotation = 'collaborative_annotation',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Guideline = 'guideline',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectType = 'project_type',
  /** column name */
  RandomizeDocumentOrder = 'randomize_document_order',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Projects_Var_Pop_Fields = {
   __typename?: 'projects_var_pop_fields';
  annotator_per_example?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "projects" */
export type Projects_Var_Pop_Order_By = {
  annotator_per_example?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Projects_Var_Samp_Fields = {
   __typename?: 'projects_var_samp_fields';
  annotator_per_example?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "projects" */
export type Projects_Var_Samp_Order_By = {
  annotator_per_example?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Projects_Variance_Fields = {
   __typename?: 'projects_variance_fields';
  annotator_per_example?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "projects" */
export type Projects_Variance_Order_By = {
  annotator_per_example?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
   __typename?: 'query_root';
  /** fetch data from the table: "annotations" */
  annotations: Array<Annotations>;
  /** fetch aggregated fields from the table: "annotations" */
  annotations_aggregate: Annotations_Aggregate;
  /** fetch data from the table: "annotations" using primary key columns */
  annotations_by_pk?: Maybe<Annotations>;
  /** fetch data from the table: "documents" */
  documents: Array<Documents>;
  /** fetch aggregated fields from the table: "documents" */
  documents_aggregate: Documents_Aggregate;
  /** fetch data from the table: "documents" using primary key columns */
  documents_by_pk?: Maybe<Documents>;
  /** fetch data from the table: "labels" */
  labels: Array<Labels>;
  /** fetch aggregated fields from the table: "labels" */
  labels_aggregate: Labels_Aggregate;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk?: Maybe<Labels>;
  /** fetch data from the table: "project_types" */
  project_types: Array<Project_Types>;
  /** fetch aggregated fields from the table: "project_types" */
  project_types_aggregate: Project_Types_Aggregate;
  /** fetch data from the table: "project_types" using primary key columns */
  project_types_by_pk?: Maybe<Project_Types>;
  /** fetch data from the table: "project_user_role" */
  project_user_role: Array<Project_User_Role>;
  /** fetch aggregated fields from the table: "project_user_role" */
  project_user_role_aggregate: Project_User_Role_Aggregate;
  /** fetch data from the table: "project_user_role" using primary key columns */
  project_user_role_by_pk?: Maybe<Project_User_Role>;
  /** fetch data from the table: "project_users" */
  project_users: Array<Project_Users>;
  /** fetch aggregated fields from the table: "project_users" */
  project_users_aggregate: Project_Users_Aggregate;
  /** fetch data from the table: "project_users" using primary key columns */
  project_users_by_pk?: Maybe<Project_Users>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootAnnotationsArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/** query root */
export type Query_RootAnnotations_AggregateArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/** query root */
export type Query_RootAnnotations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootDocumentsArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


/** query root */
export type Query_RootDocuments_AggregateArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


/** query root */
export type Query_RootDocuments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootLabelsArgs = {
  distinct_on?: Maybe<Array<Labels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Labels_Order_By>>;
  where?: Maybe<Labels_Bool_Exp>;
};


/** query root */
export type Query_RootLabels_AggregateArgs = {
  distinct_on?: Maybe<Array<Labels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Labels_Order_By>>;
  where?: Maybe<Labels_Bool_Exp>;
};


/** query root */
export type Query_RootLabels_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootProject_TypesArgs = {
  distinct_on?: Maybe<Array<Project_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Types_Order_By>>;
  where?: Maybe<Project_Types_Bool_Exp>;
};


/** query root */
export type Query_RootProject_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Types_Order_By>>;
  where?: Maybe<Project_Types_Bool_Exp>;
};


/** query root */
export type Query_RootProject_Types_By_PkArgs = {
  key: Scalars['String'];
};


/** query root */
export type Query_RootProject_User_RoleArgs = {
  distinct_on?: Maybe<Array<Project_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_User_Role_Order_By>>;
  where?: Maybe<Project_User_Role_Bool_Exp>;
};


/** query root */
export type Query_RootProject_User_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_User_Role_Order_By>>;
  where?: Maybe<Project_User_Role_Bool_Exp>;
};


/** query root */
export type Query_RootProject_User_Role_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootProject_UsersArgs = {
  distinct_on?: Maybe<Array<Project_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Users_Order_By>>;
  where?: Maybe<Project_Users_Bool_Exp>;
};


/** query root */
export type Query_RootProject_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Users_Order_By>>;
  where?: Maybe<Project_Users_Bool_Exp>;
};


/** query root */
export type Query_RootProject_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** query root */
export type Query_RootProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** query root */
export type Query_RootProjects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** query root */
export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** query root */
export type Query_RootRoles_By_PkArgs = {
  key: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  auth0_id: Scalars['String'];
  id: Scalars['uuid'];
};

/** columns and relationships of "roles" */
export type Roles = {
   __typename?: 'roles';
  key: Scalars['String'];
  /** An array relationship */
  project_user_roles: Array<Project_User_Role>;
  /** An aggregated array relationship */
  project_user_roles_aggregate: Project_User_Role_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "roles" */
export type RolesProject_User_RolesArgs = {
  distinct_on?: Maybe<Array<Project_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_User_Role_Order_By>>;
  where?: Maybe<Project_User_Role_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesProject_User_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_User_Role_Order_By>>;
  where?: Maybe<Project_User_Role_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
   __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
   __typename?: 'roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "roles" */
export type Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Roles_Max_Order_By>;
  min?: Maybe<Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "roles" */
export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  _not?: Maybe<Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  key?: Maybe<String_Comparison_Exp>;
  project_user_roles?: Maybe<Project_User_Role_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey',
  /** unique or primary key constraint */
  RolesValueKey = 'roles_value_key'
}

export enum Roles_Enum {
  /** Approver */
  AnnotationApprover = 'annotation_approver',
  /** Annotator */
  Annotator = 'annotator',
  /** Admin */
  ProjectAdmin = 'project_admin'
}

/** expression to compare columns of type roles_enum. All fields are combined with logical 'AND'. */
export type Roles_Enum_Comparison_Exp = {
  _eq?: Maybe<Roles_Enum>;
  _in?: Maybe<Array<Roles_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Roles_Enum>;
  _nin?: Maybe<Array<Roles_Enum>>;
};

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  key?: Maybe<Scalars['String']>;
  project_user_roles?: Maybe<Project_User_Role_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
   __typename?: 'roles_max_fields';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "roles" */
export type Roles_Max_Order_By = {
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
   __typename?: 'roles_min_fields';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "roles" */
export type Roles_Min_Order_By = {
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
   __typename?: 'roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** on conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns: Array<Roles_Update_Column>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** ordering options when selecting data from "roles" */
export type Roles_Order_By = {
  key?: Maybe<Order_By>;
  project_user_roles_aggregate?: Maybe<Project_User_Role_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "roles" */
export type Roles_Pk_Columns_Input = {
  key: Scalars['String'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "annotations" */
  annotations: Array<Annotations>;
  /** fetch aggregated fields from the table: "annotations" */
  annotations_aggregate: Annotations_Aggregate;
  /** fetch data from the table: "annotations" using primary key columns */
  annotations_by_pk?: Maybe<Annotations>;
  /** fetch data from the table: "documents" */
  documents: Array<Documents>;
  /** fetch aggregated fields from the table: "documents" */
  documents_aggregate: Documents_Aggregate;
  /** fetch data from the table: "documents" using primary key columns */
  documents_by_pk?: Maybe<Documents>;
  /** fetch data from the table: "labels" */
  labels: Array<Labels>;
  /** fetch aggregated fields from the table: "labels" */
  labels_aggregate: Labels_Aggregate;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk?: Maybe<Labels>;
  /** fetch data from the table: "project_types" */
  project_types: Array<Project_Types>;
  /** fetch aggregated fields from the table: "project_types" */
  project_types_aggregate: Project_Types_Aggregate;
  /** fetch data from the table: "project_types" using primary key columns */
  project_types_by_pk?: Maybe<Project_Types>;
  /** fetch data from the table: "project_user_role" */
  project_user_role: Array<Project_User_Role>;
  /** fetch aggregated fields from the table: "project_user_role" */
  project_user_role_aggregate: Project_User_Role_Aggregate;
  /** fetch data from the table: "project_user_role" using primary key columns */
  project_user_role_by_pk?: Maybe<Project_User_Role>;
  /** fetch data from the table: "project_users" */
  project_users: Array<Project_Users>;
  /** fetch aggregated fields from the table: "project_users" */
  project_users_aggregate: Project_Users_Aggregate;
  /** fetch data from the table: "project_users" using primary key columns */
  project_users_by_pk?: Maybe<Project_Users>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootAnnotationsArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAnnotations_AggregateArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAnnotations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootDocumentsArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocuments_AggregateArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocuments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootLabelsArgs = {
  distinct_on?: Maybe<Array<Labels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Labels_Order_By>>;
  where?: Maybe<Labels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLabels_AggregateArgs = {
  distinct_on?: Maybe<Array<Labels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Labels_Order_By>>;
  where?: Maybe<Labels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLabels_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProject_TypesArgs = {
  distinct_on?: Maybe<Array<Project_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Types_Order_By>>;
  where?: Maybe<Project_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProject_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Types_Order_By>>;
  where?: Maybe<Project_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProject_Types_By_PkArgs = {
  key: Scalars['String'];
};


/** subscription root */
export type Subscription_RootProject_User_RoleArgs = {
  distinct_on?: Maybe<Array<Project_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_User_Role_Order_By>>;
  where?: Maybe<Project_User_Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProject_User_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_User_Role_Order_By>>;
  where?: Maybe<Project_User_Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProject_User_Role_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProject_UsersArgs = {
  distinct_on?: Maybe<Array<Project_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Users_Order_By>>;
  where?: Maybe<Project_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProject_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Users_Order_By>>;
  where?: Maybe<Project_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProject_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProjects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoles_By_PkArgs = {
  key: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  auth0_id: Scalars['String'];
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
   __typename?: 'users';
  /** An array relationship */
  annotations: Array<Annotations>;
  /** An aggregated array relationship */
  annotations_aggregate: Annotations_Aggregate;
  auth0_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregated array relationship */
  documents_aggregate: Documents_Aggregate;
  id: Scalars['uuid'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  /** An array relationship */
  project_user_roles: Array<Project_User_Role>;
  /** An aggregated array relationship */
  project_user_roles_aggregate: Project_User_Role_Aggregate;
  /** An array relationship */
  project_users: Array<Project_Users>;
  /** An aggregated array relationship */
  project_users_aggregate: Project_Users_Aggregate;
};


/** columns and relationships of "users" */
export type UsersAnnotationsArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAnnotations_AggregateArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDocumentsArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDocuments_AggregateArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProject_User_RolesArgs = {
  distinct_on?: Maybe<Array<Project_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_User_Role_Order_By>>;
  where?: Maybe<Project_User_Role_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProject_User_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_User_Role_Order_By>>;
  where?: Maybe<Project_User_Role_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProject_UsersArgs = {
  distinct_on?: Maybe<Array<Project_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Users_Order_By>>;
  where?: Maybe<Project_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProject_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Users_Order_By>>;
  where?: Maybe<Project_Users_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
   __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
   __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  annotations?: Maybe<Annotations_Bool_Exp>;
  auth0_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  documents?: Maybe<Documents_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  project_user_roles?: Maybe<Project_User_Role_Bool_Exp>;
  project_users?: Maybe<Project_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UserAuth0IdKey = 'user_auth0_id_key',
  /** unique or primary key constraint */
  UserIdKey = 'user_id_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  annotations?: Maybe<Annotations_Arr_Rel_Insert_Input>;
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  documents?: Maybe<Documents_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  project_user_roles?: Maybe<Project_User_Role_Arr_Rel_Insert_Input>;
  project_users?: Maybe<Project_Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
   __typename?: 'users_max_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
   __typename?: 'users_min_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  annotations_aggregate?: Maybe<Annotations_Aggregate_Order_By>;
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  documents_aggregate?: Maybe<Documents_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_user_roles_aggregate?: Maybe<Project_User_Role_Aggregate_Order_By>;
  project_users_aggregate?: Maybe<Project_Users_Aggregate_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  auth0_id: Scalars['String'];
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type MyQueryQueryVariables = {};


export type MyQueryQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'auth0_id' | 'name' | 'created_at' | 'last_seen'>
  )> }
);


export const MyQueryDocument = gql`
    query MyQuery {
  users {
    id
    auth0_id
    name
    created_at
    last_seen
  }
}
    `;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, baseOptions);
      }
export function useMyQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, baseOptions);
        }
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQueryQueryResult = ApolloReactCommon.QueryResult<MyQueryQuery, MyQueryQueryVariables>;