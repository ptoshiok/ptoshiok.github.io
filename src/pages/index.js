import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

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
        Hello, I&apos;m a Brazilian Backend Software Engineer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Paulo Toshio Kitayama
          </Heading>
          <p>Software Engineer, BSc in Applied and Computational Mathematics</p>
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
              <Image
                src="/images/ptoshiok_quadrado.jpg"
                alt="Profile image"
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
          I&apos;m a backend software engineer working in Safety and Insurance at Uber. I have a bachelor&apos;s degree in Applied and Computational Mathematics from Unicamp and I live in São Paulo. I love particle physics, the japanese language and reading.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Projects I&apos;m working on
          </Button>
        </Box>
      </Section>

      {/* <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Paragraph>
          Golang, Hyperkamiokande, neutrinos, Japanese language, Pokémon
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Websites
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ptoshiok" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ptoshiok
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Original
        </Heading>
        <Paragraph>
            The page that originated this website was created by Takuya Matsuyama:{' '} 
          <Link href="https://www.craftz.dog/">craftz.dog</Link>. 
          The repository can be found <Link href="https://github.com/craftzdog/craftzdog-homepage">here</Link>.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
