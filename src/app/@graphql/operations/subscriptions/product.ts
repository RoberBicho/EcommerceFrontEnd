import gql from 'graphql-tag';

export const SUBSCRIPTIONS_PRODUCT_SELECT_STOCK = gql`

subscription actualizarStock($id: Int!) {
  selectProductStockUpdate(id:$id) {
    id
    stock
  }
}
`