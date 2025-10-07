import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
              Get in touch with the Shapers team
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-display font-bold text-3xl mb-6 text-gradient-primary">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions about our programs, want to volunteer, or looking to partner with us? 
                  We'd love to hear from you.
                </p>

                <Card>
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Your Name
                          </label>
                          <Input id="name" placeholder="Full Name" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address
                          </label>
                          <Input id="email" type="email" placeholder="your.email@example.com" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input id="subject" placeholder="What is this regarding?" />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                        />
                      </div>

                      <Button variant="gradient" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="font-display font-bold text-3xl mb-6 text-gradient-primary">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Reach out to us through any of these channels. We're always here to help.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                      <p className="text-muted-foreground">
                        Pearl Place Nanyuki<br />
                        Serving rural communities across Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        +254 704 967 815<br />
                        <span className="text-sm">Available Monday - Friday, 8AM - 5PM EAT</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        info@shapers.org<br />
                        <span className="text-sm">We typically respond within 24 hours</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/shapers.ke/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                        <Facebook className="h-5 w-5" />
                      </Button>
                    </a>
                    <a href="https://x.com/ShapersYouth" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </a>
                    <a href="https://www.instagram.com/shapers_youth/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                        <Instagram className="h-5 w-5" />
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/shapers-youth-network-8470b9388/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Stay updated with our latest programs and impact stories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl mb-6 text-gradient-primary">
                Quick Contact
              </h2>
              <p className="text-xl text-muted-foreground">
                Need help with something specific? Contact the right team directly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Programs & Volunteering</CardTitle>
                  <CardDescription>
                    Questions about our programs or volunteer opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">programs@shapers.org</p>
                  <Button variant="outline" size="sm">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle>Partnerships & Donations</CardTitle>
                  <CardDescription>
                    Corporate partnerships and donation inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">partnerships@shapers.org</p>
                  <Button variant="outline" size="sm">
                    Get In Touch
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>Media & Press</CardTitle>
                  <CardDescription>
                    Press inquiries and media relations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">media@shapers.org</p>
                  <Button variant="outline" size="sm">
                    Media Kit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl mb-6 text-gradient-primary">
                Where We Operate
              </h2>
              <p className="text-xl text-muted-foreground">
                Based in Nanyuki, serving rural communities across Kenya
              </p>
            </div>

            <div className="bg-muted/50 rounded-xl p-8 text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="font-display font-semibold text-2xl mb-4">Our Reach</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                While our headquarters are at Pearl Place Nanyuki, our mobile programs reach rural 
                communities across Kenya, bringing education and opportunities directly 
                to learners who need them most.
              </p>
              <Button variant="gradient">
                See Our Impact Areas
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;