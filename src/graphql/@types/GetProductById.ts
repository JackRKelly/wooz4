/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProductById
// ====================================================

export interface GetProductById_product {
  __typename: "Product";
  /**
   * The product’s title.
   */
  title: string;
}

export interface GetProductById {
  /**
   * Fetch a specific `Product` by one of its unique attributes.
   */
  product: GetProductById_product | null;
}

export interface GetProductByIdVariables {
  id: string;
}
