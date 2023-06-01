import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const SideBar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Matheus Barbosa</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        mattsbarbosa
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev Full-stack Java
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default SideBar
