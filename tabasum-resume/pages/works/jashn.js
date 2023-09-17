import {
  Container,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
        Jashn Events Literature Carnival - 4
      </Title>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Position</Meta>
          <span>
3rd          </span>
        </ListItem>
        <ListItem>
          <Meta>Description</Meta>
          <span>
          It was a Speech competition held at Jashn Events Literature Carnival-4 New delhi
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/jashn.jpeg" alt="Jashn Certificate" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
