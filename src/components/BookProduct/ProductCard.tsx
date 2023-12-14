import { porcentagem } from '../../hooks/usePorcent'
import { Product } from '../../models/Product'
import {
  Container,
  Details,
  PromotionalContainer,
  PromotionContainer,
  Thumbnail
} from './ProductCard.styles'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Container to={`/products/${product._id}`}>
      {product.promotional === 'TRUE_PROMOTIONAL' && (
        <PromotionContainer>
          <p>PROMOÇÃO</p>
        </PromotionContainer>
      )}
      <Thumbnail
        src={`http://localhost:5000/uploads/${product.productImage}`}
        alt={product.name}
      />

      <Details>
        <h2>{product.name}</h2>
        {product.promotional === 'TRUE_PROMOTIONAL' ? (
          <div>
            <p className="previuPrice">{product.price}</p>
            <PromotionalContainer>
              <h3>{product.promotionalPrice} </h3>
              <p className="pPorcentage">
                {porcentagem(product.price, product.promotionalPrice)}%
              </p>
            </PromotionalContainer>
          </div>
        ) : (
          <h3>{product.price}</h3>
        )}
        <p>- {product.descriptions[0]}</p>
        <p>- {product.descriptions[1]}</p>
      </Details>
    </Container>
  )
}
