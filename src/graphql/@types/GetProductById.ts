/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProductById
// ====================================================

export interface GetProductById_node_AppliedGiftCard {
  __typename: "AppliedGiftCard" | "Article" | "Blog" | "Checkout" | "CheckoutLineItem" | "Collection" | "Comment" | "ExternalVideo" | "MailingAddress" | "MediaImage" | "Metafield" | "Model3d" | "Order" | "Page" | "Payment" | "ProductOption" | "ProductVariant" | "ShopPolicy" | "Video";
}

export interface GetProductById_node_Product {
  __typename: "Product";
  /**
   * The product’s title.
   */
  title: string;
}

export type GetProductById_node = GetProductById_node_AppliedGiftCard | GetProductById_node_Product;

export interface GetProductById {
  /**
   * Returns a specific node by ID.
   */
  node: GetProductById_node | null;
}

export interface GetProductByIdVariables {
  id?: string | null;
}
