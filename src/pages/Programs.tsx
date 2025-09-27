import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookOpen, Computer, Lightbulb, Eye, Users, Trophy, ArrowRight, MapPin, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const programs = [
  {
    id: 'mobilib',
    title: 'MobiLib',
    subtitle: 'Mobile Library',
    description: 'Bringing education directly to rural learners through our fully equipped mobile library.',
    fullDescription: `The Mobile Library (MobiLib) is a flagship program by Shapers, designed to transform access to education for learners in rural and marginalized communities. Education is a fundamental right, yet thousands of learners in rural areas remain at a disadvantage due to limited access to quality learning materials. This disparity creates a widening gap between them and their peers in more privileged settings.

MobiLib seeks to bridge this divide by bringing education directly to the learners. Through a fully equipped truck, MobiLib carries modern learning resources including textbooks, storybooks, and revision materials, ensuring that learners in underserved regions have access to the same quality of resources as those in urban schools. The mobile library operates on a rotational basis, reaching different communities periodically and creating opportunities for consistent academic growth.

Beyond access to books, MobiLib fosters a culture of reading, curiosity, and lifelong learning. It inspires learners to dream beyond their immediate circumstances, empowering them with the tools they need to excel academically and pursue their aspirations. By levelling the playing field, MobiLib not only supports individual learners but also contributes to building stronger, more knowledgeable communities.

With MobiLib, Shapers is driving equal opportunity in education - one stop at a time.`,
    icon: BookOpen,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    features: [
      'Fully equipped mobile library truck',
      'Modern textbooks and learning materials',
      'Storybooks and reading resources',
      'Rotational community visits',
      'Culture of reading promotion'
    ],
    impact: 'Thousands of learners reached across rural Kenya'
  },
  {
    id: 'mobilab',
    title: 'MobiLab',
    subtitle: 'Mobile Computer Laboratory',
    description: 'Bridging the digital divide with mobile computer laboratories for rural communities.',
    fullDescription: `The Mobile Computer Laboratory (MobiLab) is an innovative program by Shapers, dedicated to transforming access to digital learning for students in rural and underserved communities. At its core, the program seeks to bridge the widening digital divide that continues to disadvantage learners in less privileged regions compared to their peers in urban and well-resourced areas.

MobiLab envisions a future where every learner, regardless of their background, has the opportunity to interact with modern technology and acquire the digital skills necessary for success in the 21st century. To achieve this, the program introduces a fully equipped, state-of-the-art truck fitted with computers and digital learning devices. This mobile facility travels to schools and community centres in rural areas, creating a unique opportunity for learners to periodically access hands-on computer training and digital education resources.

By doing so, MobiLab ensures that learners in rural areas are not left behind in the fast-paced evolution of technology. Students gain exposure to critical areas such as basic computer literacy, digital research skills, and emerging innovations including Artificial Intelligence (AI). This early exposure enhances their capacity to compete academically and professionally in an increasingly digital world.

Ultimately, MobiLab is more than a truck, it is a moving gateway to opportunity, nurturing curiosity, levelling the educational playing field, and empowering rural learners to thrive in a technology-driven future.`,
    icon: Computer,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    features: [
      'State-of-the-art mobile computer lab',
      'Hands-on computer training',
      'Digital literacy programs',
      'AI and technology exposure',
      'Community centre partnerships'
    ],
    impact: 'Empowering rural learners for the digital future'
  },
  {
    id: 'inventio',
    title: 'Inventio',
    subtitle: 'Discovery Platform',
    description: 'Connecting classroom learning with real-world industry experiences.',
    fullDescription: `The Inventio Program is a transformative discovery platform designed to bridge the gap between classroom learning and the real world. At its core, the program seeks to ignite curiosity, nurture passion, and inspire innovation among learners by immersing them in real-industry environments.

Through carefully structured industry visits, learners are taken beyond the walls of their schools and introduced to practical spaces where theory meets application. Whether it is a factory, a technology hub, a media house, or an agricultural enterprise, students experience first-hand how industries operate, interact with professionals, and witness the processes that drive the world of work. This exposure not only enriches their understanding of different career paths but also empowers them to make informed choices about their future.

The Inventio Program is built on the belief that young people learn best when they see, touch, and engage with what inspires them. By giving learners this early head starts, the program sharpens their sense of discovery, fuels their creativity, and strengthens their resolve to pursue fields they are genuinely passionate about.`,
    icon: Lightbulb,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    features: [
      'Structured industry visits',
      'Real-world learning experiences',
      'Professional interactions',
      'Career path exploration',
      'Hands-on engagement opportunities'
    ],
    impact: 'Inspiring learners to discover their passions'
  },
  {
    id: 'paragon',
    title: 'Paragon Plaza',
    subtitle: 'Teacher Collaboration Platform',
    description: 'Creating collaborative ecosystems for rural teachers to share knowledge and best practices.',
    fullDescription: `At Shapers, we recognize the invaluable role teachers play in advancing the cause of basic education. To strengthen this impact, we have established the Paragon Plaza, a dynamic and inclusive platform designed specifically for teachers in rural schools across Kenya. The Paragon Plaza serves as an open space where educators can meet, interact, and collaborate, sharing their experiences, challenges, and innovative solutions.

This initiative goes beyond simple networking. It creates a collaborative ecosystem where teachers collectively nurture young minds, ensuring that learners in rural areas gain access not only to quality instruction but also to a diverse pool of knowledge and best practices. By bringing educators together, the program fosters mentorship, peer learning, and the exchange of practical strategies that directly enhance classroom outcomes.

For learners, the Paragon Plaza opens doors to a world of possibilities. It is a space where they can engage with the best minds in their rural settings, benefit from shared expertise, and find inspiration to pursue their dreams. For teachers, it is a professional growth hub - an opportunity to connect with like-minded colleagues, build capacity, and elevate the standards of education in their communities.`,
    icon: Users,
    color: 'text-success',
    bgColor: 'bg-success/10',
    features: [
      'Teacher collaboration platform',
      'Knowledge and best practice sharing',
      'Professional mentorship programs',
      'Peer learning networks',
      'Classroom strategy exchange'
    ],
    impact: 'Strengthening rural education through teacher collaboration'
  },
  {
    id: 'aty',
    title: 'ATY',
    subtitle: 'Arrest Them Young',
    description: 'Identifying and nurturing talent at the earliest stages of learning.',
    fullDescription: `The Arrest Them Young (ATY) Program is a dynamic talent identification and nurturing initiative designed to discover and develop potential at the earliest stages of a learner's journey. Grounded in the belief that every child has unique gifts waiting to be unlocked, ATY provides a platform where learners in rural areas can explore, refine, and showcase their abilities in a supportive and engaging environment.

The program goes beyond conventional learning by incorporating practical, interactive experiences that empower young minds to thrive. Through initiatives such as the Rural Edition Debates, student clubs, sporting activities, and talent showcases, ATY creates opportunities for learners to build confidence, sharpen their skills, and connect meaningfully with their peers. These activities are carefully structured to encourage critical thinking, creativity, leadership, and teamwork—qualities that are essential for both academic and personal growth.

By increasing engagement through debates, public speaking, and sports, ATY addresses the challenges of limited exposure often faced by learners in rural settings. The program not only enhances academic participation but also nurtures soft skills such as communication, discipline, and resilience, preparing young people for success in diverse fields.

ATY is more than a program, it is a movement to unlock hidden potential and transform rural learning spaces into hubs of talent and innovation. By identifying and nurturing abilities early, Shapers ensures that no talent goes unnoticed, and every learner has the chance to shine, grow, and contribute positively to society.`,
    icon: Target,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    features: [
      'Talent identification initiatives',
      'Rural Edition Debates program',
      'Student clubs and activities',
      'Sports and talent showcases',
      'Soft skills development'
    ],
    impact: 'Unlocking hidden potential in every rural learner'
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6">
              Our Programs
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
              Learning Today, Leading Tomorrow - Comprehensive educational solutions for rural communities
            </p>
          </div>
        </section>

        {/* Programs Detail */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  id={program.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`w-16 h-16 rounded-full ${program.bgColor} flex items-center justify-center mb-6`}>
                      <program.icon className={`h-8 w-8 ${program.color}`} />
                    </div>
                    <h2 className="font-display font-bold text-3xl mb-2">{program.title}</h2>
                    <p className={`text-lg font-medium mb-4 ${program.color}`}>{program.subtitle}</p>
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      {program.fullDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="font-display font-semibold text-lg mb-4">Key Features:</h3>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <ArrowRight className={`h-4 w-4 mt-1 ${program.color} flex-shrink-0`} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Stats */}
                    <div className="bg-muted/50 p-6 rounded-lg mb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className={`h-5 w-5 ${program.color}`} />
                        <h4 className="font-semibold">Impact</h4>
                      </div>
                      <p className="text-muted-foreground">{program.impact}</p>
                    </div>

                    <Button variant="gradient" className="hover-lift">
                      Learn More About {program.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Visual/Stats */}
                  <div className={`bg-muted/30 p-8 rounded-xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="text-center">
                      <div className={`w-24 h-24 rounded-full ${program.bgColor} flex items-center justify-center mx-auto mb-6`}>
                        <program.icon className={`h-12 w-12 ${program.color}`} />
                      </div>
                      <h3 className="font-display font-bold text-2xl mb-4">{program.title}</h3>
                      <p className="text-muted-foreground mb-6">{program.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-card p-4 rounded-lg">
                          <MapPin className={`h-6 w-6 ${program.color} mx-auto mb-2`} />
                          <div className="text-sm text-muted-foreground">Coverage</div>
                          <div className="font-semibold">Rural Kenya</div>
                        </div>
                        <div className="bg-card p-4 rounded-lg">
                          <Clock className={`h-6 w-6 ${program.color} mx-auto mb-2`} />
                          <div className="text-sm text-muted-foreground">Schedule</div>
                          <div className="font-semibold">Year-round</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-3xl mb-6">
              Want to Support Our Programs?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Every program depends on community support. Join us in transforming rural education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Donate to Programs
              </Button>
              <Button variant="hero" size="lg">
                Volunteer With Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;