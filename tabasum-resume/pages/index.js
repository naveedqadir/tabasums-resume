import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const skills = [
  'Public Speaking',
  'Research Skills',
  'Team Leadership',
  'Editing',
  'Multimedia',
  'Podcasting',
  'Storytelling',
  'Project Management',
  'Content Management',
  'Supportive Services'
]

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Journalism and Mass Communication Student and a Youtuber!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tabasum Qadir
          </Heading>
          <p> Content Creator( Journalist/youtuber/Public Speaker)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/Untitled.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am Tabasum Qadir, currently pursuing a Bachelor&apos;s degree in
          Journalism and Mass Communication. With a passion for storytelling and
          a keen interest in media, I&apos;ve embarked on a journey to become a
          journalist. My forte lies in public speaking, and I actively engage in
          debate competitions to refine my communication skills. These
          experiences have taught me the art of articulating complex ideas and
          persuading audiences effectively. I enjoy making Fun Youtube Videos
          &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/@tabasumqadirr"
            passHref
            target="_blank"
          >
            Tabasum Qadir
          </Link>
          &quot;
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/pdf/resume.pdf" target='_blank'
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Resume
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Jammu and Kashmir, India.
        </BioSection>
        <BioSection>
          <BioYear>2014 - 2018</BioYear>
          Delhi Public School Delina Baramulla
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2020</BioYear>
          Sidhhartha Public School Delh
        </BioSection>
        <BioSection>
          <BioYear>2022 - Current</BioYear>
          Bachelor of Arts - BA, Journalism and Mass Communication
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experiences
        </Heading>
        <BioSection>
          <BioYear>Jul 2023 - Present</BioYear>
          <Paragraph>
            Social Worker at{' '}
            <b>
              <small>UMEED A DROP OF HOPE (NGO)</small>
            </b>
          </Paragraph>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <List>
          <ListItem>
            {skills.map((skill, index) => (
              <Button key={index} variant="ghost" colorScheme="teal" >
                {skill}
              </Button>
            ))}
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I <span style={{ color: 'red' }}>♥</span>
        </Heading>
        <Paragraph>
          Travelling, Music,{' '}
          <Link href="https://www.youtube.com/@tabasumqadirr" target="_blank">
            Vlogging
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/tabasum-qadir/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @tabasum-qadir
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.youtube.com/@tabasumqadirr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoYoutube />}
              >
                @tabasumqadirr
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/tabasumqadirrr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @tabasumqadirrr
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/@tabasumqadirr"
            title="Tabasum Qadir"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
