# Product API Documentation

###### API Link
```
https://rest-apis-production-c71c.up.railway.app/api/products/
```

## Overview

This API provides a single endpoint to search, filter, sort, select fields, and paginate product data.

### Base Endpoint

```http
GET /api/products
```

### Supported Query Parameters

- `brand`: filter by product brand (partial, case-insensitive)
- `category`: filter by category name (partial, case-insensitive)
- `subCategory`: filter by subcategory name (partial, case-insensitive)
- `color`: filter by `attributes.color` (partial, case-insensitive)
- `name`: filter by product name (partial, case-insensitive)
- `isFeatured`: filter featured products (`true` or `false`)
- `sort`: sort results by one or more fields
- `select`: choose which fields to return
- `page`: pagination page number
- `limit`: number of items per page

---

## Search and Filter Examples

### Search by Brand and Category

```http
GET /api/products?brand=nike&category=shoes
```

### Filter Featured Products in a Category

```http
GET /api/products?category=electronics&isFeatured=true
```

### Search by Name and Color

```http
GET /api/products?name=shirt&color=blue
```

---

## Sorting

Sort your results using the `sort` parameter. Use comma-separated field names.

### Sort by Price Ascending

```http
GET /api/products?sort=price
```

### Sort by Price Descending and Rating Ascending

```http
GET /api/products?sort=-price,rating
```

---

## Field Selection

Return only the fields you need using the `select` parameter.

### Select Specific Fields

```http
GET /api/products?select=name,price,brand
```

---

## Pagination

Use `page` and `limit` to paginate results.

### First Page, 10 Items

```http
GET /api/products?page=1&limit=10
```

### Second Page, 5 Items

```http
GET /api/products?page=2&limit=5
```

---

## Combined Example

```http
GET /api/products?brand=sony&category=electronics&sort=-price,name&select=name,price,brand,category&page=2&limit=5
```

---

## Demo: Search, Sort, Select, and Pagination

Use the examples below to demonstrate how the API supports advanced filtering and result control.

### Search by Multiple Fields

```http
GET /api/products?name=phone&brand=samsung
```

### Search by Category and Color

```http
GET /api/products?category=electronics&color=black
```

### Search Featured Products and Sort by Price Descending

```http
GET /api/products?isFeatured=true&sort=-price
```

### Select Specific Fields and Paginate

```http
GET /api/products?select=name,price,brand&limit=5&page=2
```

### Full Demonstration Example

```http
GET /api/products?category=electronics&name=sony&sort=-price&select=name,price,brand,category&page=2&limit=5
```

### Demo Notes

- Use `brand`, `category`, `subCategory`, `color`, or `name` to search text fields.
- Use `isFeatured=true` or `isFeatured=false` to filter featured products.
- Use `sort` with comma-separated fields, prefix a field with `-` for descending order.
- Use `select` with comma-separated fields to return only the fields you need.
- Use `page` and `limit` to paginate results.

---

## Complete Example

```http
GET /api/products?category=electronics&brand=samsung&color=black&sort=-price&select=name,price,brand&page=1&limit=5
```

### Features Used

- Category Filter
- Brand Filter
- Color Filter
- Sorting
- Field Selection
- Pagination

---

## Example Response

```json
{
  "products": [
    {
      "name": "Samsung Galaxy S24",
      "price": 79999,
      "brand": "Samsung"
    }
  ]
}
```

---

## Query Parameters Summary

| Parameter   | Description                |
| ----------- | -------------------------- |
| name        | Search product name        |
| brand       | Filter by brand            |
| category    | Filter by category         |
| subCategory | Filter by subcategory      |
| color       | Filter by color            |
| isFeatured  | Filter featured products   |
| sort        | Sort results               |
| select      | Select fields              |
| page        | Current page number        |
| limit       | Number of records per page |

```text
Products 1 to 3
```

---

## Page 2

```http
GET /api/products?page=2&limit=3
```

Skip Value:

```js
(2 - 1) * 3 = 3
```

Returns:

```text
Products 4 to 6
```

---

## Page 3

```http
GET /api/products?page=3&limit=3
```

Skip Value:

```js
(3 - 1) * 3 = 6
```

Returns:

```text
Products 7 to 9
```

---

## Demo: Search, Sort, Select, and Pagination

Use the examples below to demonstrate how the API supports advanced filtering and result control.

### Search by Multiple Fields

```http
GET /api/products?name=phone&brand=samsung
```

### Search by Category and Color

```http
GET /api/products?category=electronics&color=black
```

### Search Featured Products and Sort by Price Descending

```http
GET /api/products?isFeatured=true&sort=-price
```

### Select Specific Fields and Paginate

```http
GET /api/products?select=name,price,brand&limit=5&page=2
```

### Full Demonstration Example

```http
GET /api/products?category=electronics&name=sony&sort=-price&select=name,price,brand,category&page=2&limit=5
```

### Demo Notes

- Use `brand`, `category`, `subCategory`, `color`, or `name` to search text fields.
- Use `isFeatured=true` or `isFeatured=false` to filter featured products.
- Use `sort` with comma-separated fields, prefixing a field with `-` for descending order.
- Use `select` with comma-separated fields to return only the fields you need.
- Use `page` and `limit` to paginate results.

## Complete Example

```http
GET /api/products?category=electronics&brand=samsung&color=black&sort=-price&select=name,price,brand&page=1&limit=5
```

### Features Used

- Category Filter
- Brand Filter
- Color Filter
- Sorting
- Field Selection
- Pagination

---

## Example Response

```json
{
  "products": [
    {
      "name": "Samsung Galaxy S24",
      "price": 79999,
      "brand": "Samsung"
    }
  ]
}
```

---

## Query Parameters Summary

| Parameter   | Description                |
| ----------- | -------------------------- |
| name        | Search product name        |
| brand       | Filter by brand            |
| category    | Filter by category         |
| subCategory | Filter by subcategory      |
| color       | Filter by color            |
| isFeatured  | Filter featured products   |
| sort        | Sort results               |
| select      | Select fields              |
| page        | Current page number        |
| limit       | Number of records per page |

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
