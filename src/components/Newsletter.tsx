import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, CheckCircle, X } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm z-40">
      <Card className="shadow-strong border-primary/20">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <h3 className="font-display font-semibold text-lg">Stay Updated</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 -mt-1 -mr-1"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {!isSubmitted ? (
            <>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest updates on our programs and impact stories.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button variant="gradient" size="sm" className="w-full">
                  Subscribe
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-success mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                Thank you for subscribing! We'll keep you updated on our mission.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Newsletter;