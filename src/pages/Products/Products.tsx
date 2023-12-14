import { ProductCard } from '../../components/BookProduct'
import { useProductsQuery } from '../../hooks/useProductsQuery'
import { MainLayout } from '../../layouts/MainLayouts'
import { Container } from './Products.styles'

export function Products() {
  const { data, isLoading } = useProductsQuery()

  return (
    <MainLayout>
      <Container>
        {isLoading && <p>Carregando...</p>}
        {data?.totalItems === 0 && <p>Nenhum produto cadastrado</p>}
        {data &&
          data.items &&
          !isLoading &&
          data.items.map((item) => (
            <ul key={item._id}>
              <ProductCard product={item} />
            </ul>
          ))}
      </Container>
    </MainLayout>
  )
}
