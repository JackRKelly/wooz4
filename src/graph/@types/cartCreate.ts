/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CartErrorCode } from "./../../@types/graphql-global";

// ====================================================
// GraphQL mutation operation: cartCreate
// ====================================================

export interface cartCreate_cartCreate_cart {
  __typename: "Cart";
  /**
   * A globally-unique identifier.
   */
  id: string;
}

export interface cartCreate_cartCreate_userErrors {
  __typename: "CartUserError";
  /**
   * The error code.
   */
  code: CartErrorCode | null;
  /**
   * The path to the input field that caused the error.
   */
  field: string[] | null;
  /**
   * The error message.
   */
  message: string;
}

export interface cartCreate_cartCreate {
  __typename: "CartCreatePayload";
  /**
   * The new cart.
   */
  cart: cartCreate_cartCreate_cart | null;
  /**
   * The list of errors that occurred from executing the mutation.
   */
  userErrors: cartCreate_cartCreate_userErrors[];
}

export interface cartCreate {
  /**
   * Creates a new cart.
   */
  cartCreate: cartCreate_cartCreate | null;
}
