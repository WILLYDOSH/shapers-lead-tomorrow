import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Handshake, Users, DollarSign, Calendar, BookOpen, Mail, Phone } from 'lucide-react';

const Support = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6">
              Get Involved
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
              Join our mission to transform rural education in Kenya
            </p>
          </div>
        </section>

        {/* Ways to Support */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-gradient-primary">
                Ways to Support
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every contribution makes a difference in a child's educational journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Donate */}
              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Donate</CardTitle>
                  <CardDescription>
                    Financial support for our programs and operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="text-left space-y-2 mb-6 text-muted-foreground">
                    <li>• $50 - Provides books for 10 students</li>
                    <li>• $100 - Funds computer training for 5 students</li>
                    <li>• $200 - Sponsors a mobile library visit</li>
                    <li>• $500 - Supports teacher training workshop</li>
                  </ul>
                  <Button variant="gradient" className="w-full">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>

              {/* Volunteer */}
              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Volunteer</CardTitle>
                  <CardDescription>
                    Share your skills and time with our programs
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="text-left space-y-2 mb-6 text-muted-foreground">
                    <li>• Teaching and tutoring</li>
                    <li>• IT support and training</li>
                    <li>• Program coordination</li>
                    <li>• Content development</li>
                  </ul>
                  <Button variant="gradient" className="w-full">
                    Join Our Team
                  </Button>
                </CardContent>
              </Card>

              {/* Partner */}
              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <Handshake className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-2xl">Partner</CardTitle>
                  <CardDescription>
                    Collaborate with us for sustainable impact
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="text-left space-y-2 mb-6 text-muted-foreground">
                    <li>• Corporate sponsorships</li>
                    <li>• Equipment donations</li>
                    <li>• Facility partnerships</li>
                    <li>• Technical collaborations</li>
                  </ul>
                  <Button variant="gradient" className="w-full">
                    Partner With Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Volunteer Application Form */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl mb-6 text-gradient-primary">
                Volunteer Application
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to make a difference? Join our volunteer team today.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="+254 700 000 000" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="skills" className="block text-sm font-medium mb-2">
                      Skills & Expertise
                    </label>
                    <Input id="skills" placeholder="e.g., Teaching, IT, Marketing, Design" />
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium mb-2">
                      Availability
                    </label>
                    <Input id="availability" placeholder="e.g., Weekends, Evenings, Full-time" />
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium mb-2">
                      Why do you want to volunteer with Shapers?
                    </label>
                    <Textarea 
                      id="motivation" 
                      placeholder="Tell us about your motivation and how you'd like to contribute..."
                      rows={4}
                    />
                  </div>

                  <Button variant="gradient" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Corporate Partnership */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-gradient-primary">
                Corporate Partnerships
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Partner with us to create lasting impact while achieving your CSR goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <DollarSign className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">Financial Sponsorship</h3>
                <p className="text-muted-foreground text-sm">
                  Support our programs with financial contributions
                </p>
              </div>
              
              <div className="text-center">
                <BookOpen className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">Equipment Donation</h3>
                <p className="text-muted-foreground text-sm">
                  Donate computers, books, and educational materials
                </p>
              </div>
              
              <div className="text-center">
                <Users className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">Employee Volunteering</h3>
                <p className="text-muted-foreground text-sm">
                  Engage your team in meaningful volunteer activities
                </p>
              </div>
              
              <div className="text-center">
                <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">Event Partnerships</h3>
                <p className="text-muted-foreground text-sm">
                  Host joint events and fundraising activities
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="gradient" size="lg" className="hover-lift">
                Discuss Partnership Opportunities
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-3xl mb-6">
              Questions About Getting Involved?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We're here to help you find the perfect way to support our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
              <Button variant="hero" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;