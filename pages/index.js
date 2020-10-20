import Link from "next/link";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import Layout from "components/Layout";
import SpeakerCard from "components/SpeakerCard";
import OrganizerProfile from "components/OrganizerProfile";
import Emphasis from "components/Emphasis";

const Index = () => (
  <Layout>
    <Box marginTop={10} marginBottom={5}>
      <Typography variant="h1" gutterBottom>
        Open Impact: 10 Organizations that are Changing the World with Open
        Principles
      </Typography>
      <Typography variant="h2" color="primary" style={{ fontWeight: 500 }}>
        Session at Creative Commons Summit 2020
      </Typography>
    </Box>
    <Box>
      <Box marginBottom={2}>
        <Typography variant="h2">Thursday, 22nd October, 2020</Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant="h2">14:00 - 15:00 UTC</Typography>
        <Typography
          component="a"
          variant="body1"
          gutterBottom
          href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=Open+Impact%3A+10+Organizations+that+are+Changing+the+World+with+Open+Principles&iso=20201022T14&p1=1440&ah=1"
          target="_blank"
        >
          Convert to my timezone
        </Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant="h2">Virtual Session</Typography>
      </Box>
      <Box marginTop={5}>
        <Link href="/register" passHref>
          <Button
            component="a"
            size="large"
            variant="contained"
            color="primary"
            style={{
              fontSize: "1.25rem",
            }}
          >
            Register now · Free
          </Button>
        </Link>
      </Box>
    </Box>
    <Box marginY={8}>
      <Typography variant="h2" style={{ fontWeight: 700 }} gutterBottom>
        About
      </Typography>
      <Typography variant="h3">
        From climate change to Covid-19, we are facing big challenges in our
        world today. Tackling these challenges will require large-scale
        collaboration and open knowledge-sharing. Meet and hear from 10
        organizations that are leading the open impact movement, including the
        Shuttleworth Foundation, Precious Plastic, and Open Streets.
      </Typography>
    </Box>
    <Box marginY={8}>
      <Typography variant="h2" style={{ fontWeight: 700 }} gutterBottom>
        Speakers
      </Typography>
      <SpeakerCard
        name="Iryna"
        organization="Center for Interdisciplinary Research"
        image="/static/iryna.jpeg"
        headline="Iryna Nikolayeva, Product Manager at the Center for Interdisciplinary Research"
        link="https://www.cri-paris.org/en"
      >
        The <Emphasis>Center for Interdisciplinary Research (CRI)</Emphasis> is
        co-constructing and sharing new ways of learning, teaching, conducting
        research and mobilizing collective intelligence in the fields of life,
        learning and digital sciences, in order to face the world's sustainable
        development goals (SDGs).
      </SpeakerCard>
      <SpeakerCard
        name="Helen"
        organization="Shuttleworth Foundation"
        image="/static/helen.jpg"
        headline="Helen Turvey, CEO at the Shuttleworth Foundation"
        link="https://www.shuttleworthfoundation.org/"
      >
        The <Emphasis>Shuttleworth Foundation</Emphasis> is a small social
        investor that provides funding to dynamic leaders who are at the
        forefront of social change. We look for social innovators who are
        helping to change the world for the better and could benefit from a
        social investment model with a difference. We identify amazing people,
        give them a fellowship grant, and multiply the money they put into their
        own projects by a factor of ten or more. The Foundation is at its core
        an experiment in open philanthropy and uses alternative funding
        methodologies and collaborative ways of working to ensure that every
        fellow receives the necessary support to succeed.
      </SpeakerCard>
      <SpeakerCard
        name="Pram"
        organization="Gooru"
        image="/static/pram.jpg"
        headline="Prasad (Pram) Ram, Founder & CEO of Gooru"
        link="https://gooru.org/about/"
      >
        <Emphasis>Gooru</Emphasis> innovates to accelerate learning for
        everyone. We developed Navigator, a GPS for learning, that builds a
        personalized path to guide learners to their destination. The free and
        open Navigator tool empowers instructors to implement Navigated Learning
        and give learners agency to meet their learning goals. Navigator brings
        together research and practice with an extensive curated catalog of
        standards aligned open education resources and facilitates systemic
        change by providing real-time actionable insights to learners,
        instructors, leadership, and all other stakeholders.
      </SpeakerCard>
      <SpeakerCard
        name="Bodo"
        organization="Dev4X"
        image="/static/bodo.jpeg"
        headline="Bodo Hoenen, Founder of Dev4X, Open Innovator"
        link="https://www.dev4x.com/"
      >
        <Emphasis>Dev4X</Emphasis> was a side-project that turned into a
        fulltime mission. Started several years ago to work on developing an
        open crowd-generated Learning Map to help underserved kids learn. To
        then include developing a Doing Map, an open learner-generated map that
        ties everything you can learn to tangible problems you can solve in the
        real world. Now working together with Gooru on their GPS for learning,
        and the CRI + UNESCO on their project-based learning initiatives, this
        work is rapidly developing as a collective global project.
      </SpeakerCard>
      <SpeakerCard
        name="Lluvy"
        organization="UpLink"
        image="/static/lluvy.jpeg"
        headline="Lluvy Liu, former Global Leadership Fellow at the World Economic Forum"
        link="https://uplink.weforum.org/uplink/s/"
      >
        Lluvy has recently helped to launch the Trillion Trees Challenge on{" "}
        <Emphasis>UpLink</Emphasis>, a digital platform to crowdsource
        innovations to accelerate the delivery of the UN SDGs. She will share
        her experience with how UpLink is able to surface and galvanize youth,
        change-makers, entrepreneurs and innovators for a better world, and link
        them up to the network and ecosystem of world leaders at the Forum.
      </SpeakerCard>
      <SpeakerCard
        name="Bill"
        organization="Shelter 2.0"
        image="/static/bill.jpg"
        headline="Bill Young, Co-Founder of Shelter 2.0"
        link="http://www.shelter20.com/"
      >
        <Emphasis>Shelter 2.0</Emphasis> is changing the way homelessness is
        being addressed. Shelter 2.0 is about sharing designs and ideas. The
        designs and cut files are offered to anyone who needs them, or has the
        desire to help those in need. The shelters are digitally fabricated with
        local manufacturing in mind. They are designed to help democratize the
        construction of transitional housing, being built using untrained labor
        and as few tools as possible.
      </SpeakerCard>
      <SpeakerCard
        name="TBD"
        organization="Impacton"
        image="/static/unknown.png"
        headline="TBD"
        link="https://impacton.org/"
      >
        We turn projects into movements. <Emphasis>Impacton</Emphasis> is
        inspired by the talent and energy of individuals and organisations
        across the world, working to solve our biggest challenges and create a
        better tomorrow. Our mission is to collect their impact formulas and
        make their Blueprints accessible to anyone who needs them.
      </SpeakerCard>
      <SpeakerCard
        name="David"
        organization="Open Streets Project / 8 80 Cities"
        image="/static/david.jpg"
        headline="David Simor, Senior Project Manager at 8 80 Cities"
        link="https://openstreetsproject.org/"
      >
        <Emphasis>Open Streets</Emphasis> are programs that temporarily open
        streets to people by closing them to cars. We’ve worked in dozens of
        cities and on dozens of open streets programs around the world. We
        believe in making available as widely as possible information on open
        streets programs. The Open Streets Project is part advocacy project,
        part toolkit, part information database. It’s a one-stop shop for all
        things open streets related. We believe that every municipality, no
        matter the size, can benefit from open streets.
      </SpeakerCard>
      <SpeakerCard
        name="Dana"
        organization="Open Source Malaria"
        image="/static/dana.jpeg"
        headline="Dana Klug, Postdoctoral Research Assistant at University College London School of Pharmacy"
        link="http://opensourcemalaria.org/"
      >
        The <Emphasis>Open Source Malaria</Emphasis> project is trying a
        different approach to curing malaria. Guided by open source principles,
        everything is open and anyone can contribute. In open source research
        all data and ideas are freely shared, anyone may participate as an equal
        partner and there will be no patents - think "Linux for Malaria
        Research". Open Source Malaria has collaborators all over the world and
        <a
          href="https://www.facebook.com/watch/?v=1461373593941181"
          target="_blank"
        >
          {" "}
          has even been featured on the Daily Show with Trevor Noah
        </a>
        .
      </SpeakerCard>
      <SpeakerCard
        name="Katharina"
        organization="Precious Plastic"
        image="/static/katharina.jpg"
        headline="Katharina Elleke, Community nerd at Precious Plastic"
        link="https://preciousplastic.com/index.html"
      >
        <Emphasis>Precious Plastic</Emphasis> exists to reduce plastic waste.
        Sometimes we do it through boosting recycling. Sometimes through new
        biodegradable materials. Some other time by adopting zero waste
        lifestyles. Whatever works. Our solutions see people as the key element
        to fix the plastic mess. Precious Plastic approaches count on people to
        bring about the necessary change. Small steps, multiplied by millions.
        That's where we can win our battle. Precious Plastic is a combination of
        people, machines, platforms and knowledge to create an alternative
        global recycling system.
      </SpeakerCard>
    </Box>
    <Box marginY={8}>
      <Typography variant="h2" style={{ fontWeight: 700 }} gutterBottom>
        Organizers
      </Typography>
      <Box marginY={3}>
        <Grid container spacing={5}>
          <Grid item md={4} xs={12} align="center">
            <OrganizerProfile
              image="/static/jessy.jpeg"
              name="Jessy Huang"
              email="jessy(at)open.ly"
            >
              Started a startup to bring open-source to document collaboration
              and knowledge management but failed. Still excited about
              augmenting our collective intelligence through open collaboration
              and am looking at solutions to tackle this problem.
            </OrganizerProfile>
          </Grid>
          <Grid item md={4} xs={12} align="center">
            <OrganizerProfile
              image="/static/bodo.jpeg"
              name="Bodo Hoenen"
              email="bodo(at)dev4x.com"
            >
              Developing audacious projects in Education and Open Innovation.
            </OrganizerProfile>
          </Grid>
          <Grid item md={4} xs={12} align="center">
            <OrganizerProfile
              image="/static/finn.jpg"
              name="Finn Woelm"
              email="finn.woelm(at)gmail.com"
            >
              Data scientist and analyst at the United Nations Sustainable
              Development Solutions Network, where I help to track and monitor
              the progress of all 193 UN Member States towards the achievement
              of the 17 Sustainable Development Goals.
            </OrganizerProfile>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Layout>
);

export default Index;
