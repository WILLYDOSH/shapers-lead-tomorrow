import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import mosesWangwa from '@/assets/moses-wangwa.jpg';
import anneMaina from '@/assets/anne-maina.jpg';
import johnNguri from '@/assets/john-nguri.jpg';

const Leaders = () => {
  const leaders = [
    {
      name: 'Moses Wangwa',
      position: 'Chairperson',
      image: mosesWangwa,
      description: 'Moses Wangwa is an award-winning judge in East Africa, a strategic communication expert, and an interdisciplinary researcher passionate about transformative leadership and social justice. He views education as the greatest equalizer and believes that empowering rural education represents the highest form of societal justice. As the Chairperson of Shapers Youth Network, Moses envisions the organization as a vehicle for education justice nurturing talent, fostering innovation, and shaping future global leaders from even the most remote corners of Kenya. His work is driven by a deep conviction that equitable access to education can bridge social divides, unlock human potential, and create a generation of empowered youth ready to lead change locally and globally.'
    },
    {
      name: 'Anne Wanjiru Maina',
      position: 'Treasurer',
      image: anneMaina,
      description: 'Anne Wanjiru Maina is a passionate digital marketer and devoted advocate for youth empowerment. As the Treasurer of Shapers Youth Network, she plays a vital role in mobilizing and managing resources to advance the organization\'s mission of equipping children and young people with skills relevant to today\'s global challenges. Ann believes in the power of marketing to connect dreams with opportunity and uses her expertise to inspire innovation and impact. Guided by excellence and authenticity, she envisions a future where rural education in Kenya becomes solution-driven and globally competitive. To her, digital media is not just a profession it\'s a calling to bring light, growth, and abundance to communities across the world.'
    },
    {
      name: 'John Nguri',
      position: 'Secretary',
      image: johnNguri,
      description: 'John Nguri is the Secretary of Shapers Youth Network, a dedicated platform empowering rural youth to become solution providers in their communities. A professional plumber and graphic designer, John is committed to sharing his skills with young people in rural Laikipia to promote creativity, innovation, and self-reliance. His passion for rural education stems from his belief that it holds the greatest untapped potential for societal transformation. Through Shapers Youth Network, John envisions driving practical, skills-based learning that translates education into tangible value for individuals and communities. He is deeply inspired by a future where every young person enjoys education equality and access to opportunities both locally and globally, shaping a more inclusive and empowered generation.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
              Our Leadership
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionary leaders guiding Shapers Youth Network towards a future of education justice and youth empowerment.
            </p>
          </div>
        </section>

        {/* Leaders Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:gap-16">
              {leaders.map((leader, index) => (
                <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-soft transition-smooth">
                  <div className="grid md:grid-cols-[300px_1fr] gap-8">
                    <div className="relative h-[400px] md:h-auto">
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.position}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-3xl text-gradient-gold mb-2">
                          {leader.name}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary">
                          {leader.position}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground leading-relaxed">
                          {leader.description}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Leaders;
