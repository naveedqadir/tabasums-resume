import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbYoutube from '../public/images/links/youtube.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Interview"
            thumbnail={thumbYoutube}
            href="https://www.youtube.com/shorts/f5idikV7MnQ"
          />
          <GridItem
            title="Vlog"
            thumbnail={thumbYoutube}
            href="https://www.youtube.com/watch?v=uNlA-BRuVlw&ab_channel=TabasumQadir"
          />
          <GridItem
            title="Vlog-2"
            thumbnail={thumbYoutube}
            href="https://www.youtube.com/watch?v=pO0czFeQfjw&ab_channel=TabasumQadir"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
