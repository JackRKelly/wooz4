/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./../../@types/graphql-global";

// ====================================================
// GraphQL query operation: GetCollectionByHandle
// ====================================================

export interface GetCollectionByHandle_collectionByHandle_image {
  __typename: "Image";
  /**
   * The location of the transformed image as a URL.
   * 
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: any;
}

export interface GetCollectionByHandle_collectionByHandle_products_edges_node_images_edges_node {
  __typename: "Image";
  /**
   * A unique identifier for the image.
   */
  id: string | null;
  /**
   * The location of the transformed image as a URL.
   * 
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: any;
}

export interface GetCollectionByHandle_collectionByHandle_products_edges_node_images_edges {
  __typename: "ImageEdge";
  /**
   * The item at the end of ImageEdge.
   */
  node: GetCollectionByHandle_collectionByHandle_products_edges_node_images_edges_node;
}

export interface GetCollectionByHandle_collectionByHandle_products_edges_node_images {
  __typename: "ImageConnection";
  /**
   * A list of edges.
   */
  edges: GetCollectionByHandle_collectionByHandle_products_edges_node_images_edges[];
}

export interface GetCollectionByHandle_collectionByHandle_products_edges_node_priceRange_minVariantPrice {
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

export interface GetCollectionByHandle_collectionByHandle_products_edges_node_priceRange {
  __typename: "ProductPriceRange";
  /**
   * The lowest variant's price.
   */
  minVariantPrice: GetCollectionByHandle_collectionByHandle_products_edges_node_priceRange_minVariantPrice;
}

export interface GetCollectionByHandle_collectionByHandle_products_edges_node {
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
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: string;
  /**
   * List of images associated with the product.
   */
  images: GetCollectionByHandle_collectionByHandle_products_edges_node_images;
  /**
   * The price range.
   */
  priceRange: GetCollectionByHandle_collectionByHandle_products_edges_node_priceRange;
}

export interface GetCollectionByHandle_collectionByHandle_products_edges {
  __typename: "ProductEdge";
  /**
   * The item at the end of ProductEdge.
   */
  node: GetCollectionByHandle_collectionByHandle_products_edges_node;
}

export interface GetCollectionByHandle_collectionByHandle_products {
  __typename: "ProductConnection";
  /**
   * A list of edges.
   */
  edges: GetCollectionByHandle_collectionByHandle_products_edges[];
}

export interface GetCollectionByHandle_collectionByHandle {
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
  image: GetCollectionByHandle_collectionByHandle_image | null;
  /**
   * List of products in the collection.
   */
  products: GetCollectionByHandle_collectionByHandle_products;
}

export interface GetCollectionByHandle {
  /**
   * Find a collection by its handle.
   */
  collectionByHandle: GetCollectionByHandle_collectionByHandle | null;
}

export interface GetCollectionByHandleVariables {
  handle: string;
}
