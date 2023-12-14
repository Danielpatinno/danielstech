import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useClientsQuery } from '../../hooks/useClientQuery'
import { useClientQuerySearch } from '../../hooks/useClientQuerySearch'
import { MainLayout } from '../../layouts/MainLayouts'
import { Container, TableContainer } from './Clients.styles'

export function Clients() {
  const { data, isLoading } = useClientsQuery()
  const [searchClient, setSearchClient] = useState<string>('')
  const { data: items } = useClientQuerySearch({ search: searchClient })
  const navigate = useNavigate()

  const handleNavigate = (clientId: string) => {
    navigate(`/clientdetails/${clientId}`)
  }

  return (
    <MainLayout>
      <Container>
        {isLoading && <p>...Carregando</p>}
        {/* {data?.totalClients === 0 && <p>Nenhum cliente cadastrado.</p>} */}
        <TableContainer>
          <thead>
            <tr>
              <th>N°</th>
              <th>Nome</th>
              <th className="emailAndInput">
                E-mail
                <input
                  type="text"
                  placeholder="Pesquise por nome aqui"
                  value={searchClient}
                  onChange={(e) => setSearchClient(e.target.value)}
                />
              </th>
            </tr>
          </thead>
          {data &&
            data.clients &&
            !isLoading &&
            !searchClient &&
            data.clients
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((client, index) => (
                <tbody key={client._id}>
                  <tr
                    onClick={() => handleNavigate(client._id)}
                    key={client._id}
                  >
                    <td className="tdIndex">{index + 1}</td>
                    <td className="tdName">{client.name}</td>
                    <td className="tdEmail">{client.email}</td>
                  </tr>
                </tbody>
              ))}
          {searchClient &&
            items?.clients.map((cli, index) => (
              <tr key={cli._id} onClick={() => handleNavigate(cli._id)}>
                <td className="tdIndex">{index + 1}</td>
                <td className="tdName">{cli.name}</td>
                <td className="tdEmail">{cli.email}</td>
              </tr>
            ))}
        </TableContainer>
        {data?.totalClients === 0 && <p>Nenhum cliente cadastrado</p>}
      </Container>
    </MainLayout>
  )
}
