/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./../../@types/graphql-global";

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates if there are more pages to fetch.
   */
  hasNextPage: boolean;
  /**
   * Indicates if there are any pages prior to the current page.
   */
  hasPreviousPage: boolean;
}

export interface GetProducts_products_edges_node_images_edges_node {
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

export interface GetProducts_products_edges_node_images_edges {
  __typename: "ImageEdge";
  /**
   * The item at the end of ImageEdge.
   */
  node: GetProducts_products_edges_node_images_edges_node;
}

export interface GetProducts_products_edges_node_images {
  __typename: "ImageConnection";
  /**
   * A list of edges.
   */
  edges: GetProducts_products_edges_node_images_edges[];
}

export interface GetProducts_products_edges_node_priceRange_minVariantPrice {
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

export interface GetProducts_products_edges_node_priceRange {
  __typename: "ProductPriceRange";
  /**
   * The lowest variant's price.
   */
  minVariantPrice: GetProducts_products_edges_node_priceRange_minVariantPrice;
}

export interface GetProducts_products_edges_node {
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
   * Stripped description of the product, single line with HTML tags removed.
   */
  description: string;
  /**
   * The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.
   */
  onlineStoreUrl: any | null;
  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   */
  tags: string[];
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: string;
  /**
   * List of images associated with the product.
   */
  images: GetProducts_products_edges_node_images;
  /**
   * The price range.
   */
  priceRange: GetProducts_products_edges_node_priceRange;
}

export interface GetProducts_products_edges {
  __typename: "ProductEdge";
  /**
   * The item at the end of ProductEdge.
   */
  node: GetProducts_products_edges_node;
}

export interface GetProducts_products {
  __typename: "ProductConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: GetProducts_products_pageInfo;
  /**
   * A list of edges.
   */
  edges: GetProducts_products_edges[];
}

export interface GetProducts {
  /**
   * List of the shop’s products.
   */
  products: GetProducts_products;
}

export interface GetProductsVariables {
  limit: number;
}
