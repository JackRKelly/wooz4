/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./../../@types/graphql-global";

// ====================================================
// GraphQL query operation: GetCollectionById
// ====================================================

export interface GetCollectionById_collection_image {
  __typename: "Image";
  /**
   * The location of the transformed image as a URL.
   * 
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: any;
}

export interface GetCollectionById_collection_products_edges_node_images_edges_node {
  __typename: "Image";
  /**
   * The location of the transformed image as a URL.
   * 
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: any;
}

export interface GetCollectionById_collection_products_edges_node_images_edges {
  __typename: "ImageEdge";
  /**
   * The item at the end of ImageEdge.
   */
  node: GetCollectionById_collection_products_edges_node_images_edges_node;
}

export interface GetCollectionById_collection_products_edges_node_images {
  __typename: "ImageConnection";
  /**
   * A list of edges.
   */
  edges: GetCollectionById_collection_products_edges_node_images_edges[];
}

export interface GetCollectionById_collection_products_edges_node_priceRange_minVariantPrice {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface GetCollectionById_collection_products_edges_node_priceRange {
  __typename: "ProductPriceRange";
  /**
   * The lowest variant's price.
   */
  minVariantPrice: GetCollectionById_collection_products_edges_node_priceRange_minVariantPrice;
}

export interface GetCollectionById_collection_products_edges_node {
  __typename: "Product";
  /**
   * A globally-unique identifier.
   */
  id: string;
  /**
   * The product’s title.
   */
  title: string;
  /**
   * List of images associated with the product.
   */
  images: GetCollectionById_collection_products_edges_node_images;
  /**
   * The price range.
   */
  priceRange: GetCollectionById_collection_products_edges_node_priceRange;
}

export interface GetCollectionById_collection_products_edges {
  __typename: "ProductEdge";
  /**
   * The item at the end of ProductEdge.
   */
  node: GetCollectionById_collection_products_edges_node;
}

export interface GetCollectionById_collection_products {
  __typename: "ProductConnection";
  /**
   * A list of edges.
   */
  edges: GetCollectionById_collection_products_edges[];
}

export interface GetCollectionById_collection {
  __typename: "Collection";
  /**
   * The collection’s name. Limit of 255 characters.
   */
  title: string;
  /**
   * Stripped description of the collection, single line with HTML tags removed.
   */
  description: string;
  /**
   * Image associated with the collection.
   */
  image: GetCollectionById_collection_image | null;
  /**
   * List of products in the collection.
   */
  products: GetCollectionById_collection_products;
}

export interface GetCollectionById {
  /**
   * Fetch a specific `Collection` by one of its unique attributes.
   */
  collection: GetCollectionById_collection | null;
}

export interface GetCollectionByIdVariables {
  id: string;
}
