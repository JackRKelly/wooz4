/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./../../@types/graphql-global";

// ====================================================
// GraphQL query operation: GetProductByHandle
// ====================================================

export interface GetProductByHandle_productByHandle_options {
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

export interface GetProductByHandle_productByHandle_images_edges_node {
  __typename: "Image";
  /**
   * The location of the transformed image as a URL.
   * 
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: any;
  /**
   * A unique identifier for the image.
   */
  id: string | null;
}

export interface GetProductByHandle_productByHandle_images_edges {
  __typename: "ImageEdge";
  /**
   * The item at the end of ImageEdge.
   */
  node: GetProductByHandle_productByHandle_images_edges_node;
}

export interface GetProductByHandle_productByHandle_images {
  __typename: "ImageConnection";
  /**
   * A list of edges.
   */
  edges: GetProductByHandle_productByHandle_images_edges[];
}

export interface GetProductByHandle_productByHandle_priceRange_minVariantPrice {
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

export interface GetProductByHandle_productByHandle_priceRange {
  __typename: "ProductPriceRange";
  /**
   * The lowest variant's price.
   */
  minVariantPrice: GetProductByHandle_productByHandle_priceRange_minVariantPrice;
}

export interface GetProductByHandle_productByHandle {
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
   * The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.
   */
  onlineStoreUrl: any | null;
  /**
   * The description of the product, complete with HTML formatting.
   */
  descriptionHtml: any;
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
  options: GetProductByHandle_productByHandle_options[];
  /**
   * List of images associated with the product.
   */
  images: GetProductByHandle_productByHandle_images;
  /**
   * The price range.
   */
  priceRange: GetProductByHandle_productByHandle_priceRange;
}

export interface GetProductByHandle {
  /**
   * Find a product by its handle.
   */
  productByHandle: GetProductByHandle_productByHandle | null;
}

export interface GetProductByHandleVariables {
  handle: string;
}
