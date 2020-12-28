import gql from 'graphql-tag';
import { RESULT_INFO_FRAGMENT } from '../fragment/result-info';
import { PRODUCT_FRAGMENT } from '../fragment/product';

export const PRODUCT_LAST_UNITS_OFFERS_QUERY = gql`

    
    query productsOffersLast($page: Int!, $itemsPage: Int, $active: ActiveFilterEnum, $topPrice: Float, $lastUnits: Int, $random: Boolean) {
      
        productsOffersLast(page: $page, itemsPerPage: $itemsPage, active: $active, random: $random, topPrice: $topPrice, lastUnits: $lastUnits) {
              info {
                ...ResultInfoObject
              }
              status
              message
              products {
                ...ProductObject
              }
            }
          }
        ${ RESULT_INFO_FRAGMENT }
        ${ PRODUCT_FRAGMENT}
    `;


export const PRODUCT_BY_PLATFORM_QUERY = gql`
    
    query productsPlatforms($page: Int!, $itemsPage: Int, $active: ActiveFilterEnum, $platform: ID , $random: Boolean) {

      productsPlatformsRandom(page: $page, itemsPerPage: $itemsPage, active: $active, platform: $platform, random: $random ) {
                info {
                    ...ResultInfoObject
                  }
                  status
                  message
                  products {              
                    ...ProductObject
                  }
              }
            }
        ${ PRODUCT_FRAGMENT}
        ${ RESULT_INFO_FRAGMENT }
    `;
