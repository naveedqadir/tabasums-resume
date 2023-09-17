import {
  Container,
  Badge,
  Link,
  List,
  ListItem,

} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Medusa">
    <Container>
      <Title>
        Medusa Magazine<Badge>Feb 2023 - Apr 2023</Badge>
      </Title>
      <P>
      &ldquo;Medusa: Excellence in Every Word&ldquo; is a captivating magazine dedicated to celebrating the strength, resilience, and achievements of women across the globe. Through powerful stories, insightful interviews, and thought-provoking articles, this magazine aims to shatter stereotypes and inspire women to embrace their unique qualities.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Magazine pdf</Meta>
          <Link href='/pdf/medusa.pdf' target='_blank'>
            Open <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Digital Editor</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/medusa.jpeg" alt="medusa" />
      <WorkImage src="/images/works/medusa1.jpeg" alt="medusa" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
