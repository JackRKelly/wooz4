/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./../../@types/graphql-global";

// ====================================================
// GraphQL query operation: GetProductById
// ====================================================

export interface GetProductById_product_options {
  __typename: "ProductOption";
  /**
   * A globally-unique identifier.
   */
  id: string;
  /**
   * The product option’s name.
   */
  name: string;
  /**
   * The corresponding value to the product option name.
   */
  values: string[];
}

export interface GetProductById_product_images_edges_node {
  __typename: "Image";
  /**
   * The location of the transformed image as a URL.
   * 
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: any;
}

export interface GetProductById_product_images_edges {
  __typename: "ImageEdge";
  /**
   * The item at the end of ImageEdge.
   */
  node: GetProductById_product_images_edges_node;
}

export interface GetProductById_product_images {
  __typename: "ImageConnection";
  /**
   * A list of edges.
   */
  edges: GetProductById_product_images_edges[];
}

export interface GetProductById_product_priceRange_minVariantPrice {
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

export interface GetProductById_product_priceRange {
  __typename: "ProductPriceRange";
  /**
   * The lowest variant's price.
   */
  minVariantPrice: GetProductById_product_priceRange_minVariantPrice;
}

export interface GetProductById_product {
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
   * List of product options.
   */
  options: GetProductById_product_options[];
  /**
   * List of images associated with the product.
   */
  images: GetProductById_product_images;
  /**
   * The price range.
   */
  priceRange: GetProductById_product_priceRange;
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
