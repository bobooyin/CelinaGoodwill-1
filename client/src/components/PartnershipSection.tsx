import { useState } from 'react';
import { HandHeart, Users, Mail, MessageCircle } from 'lucide-react';
import { ShareButton } from '@/components/InteractiveElements';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function PartnershipSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    interestType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="partnership" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <HandHeart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partnerships & Volunteers Are{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Highly Welcome
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Together, we can break mental health stigma and create lasting change. Whether you're an individual, 
            organization, or professional, there's a meaningful way for you to contribute.
          </p>
        </div>

        {/* Contact Form and Community Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
                  <p className="text-muted-foreground">Tell us how you'd like to contribute</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-foreground mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                    data-testid="input-full-name"
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    data-testid="input-email"
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="interestType" className="text-sm font-medium text-foreground mb-2 block">
                    Interest Type *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('interestType', value)} required>
                    <SelectTrigger className="w-full" data-testid="select-interest-type">
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="volunteer">Volunteering</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="professional">Professional Services</SelectItem>
                      <SelectItem value="sponsorship">Sponsorship</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your interest or how you'd like to help..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    data-testid="textarea-message"
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 text-lg font-semibold"
                  data-testid="button-submit-contact"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Community Card */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl border-0">
            <CardContent className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Join Our Community</h3>
                </div>

                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Create positive change in mental health advocacy.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Volunteers:</span>
                      <span className="text-gray-300 ml-2">All experience levels</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Partners:</span>
                      <span className="text-gray-300 ml-2">Collaborative opportunities</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Flexible:</span>
                      <span className="text-gray-300 ml-2">All schedules welcome</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Ready to make a difference?</p>
                      <p className="text-lg font-semibold text-white">Every contribution counts</p>
                    </div>
                    <MessageCircle className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Share Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Help Us Spread Awareness
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Share our mission with your network. Every share helps break the stigma and reaches someone who might need support.
          </p>
          <div className="flex justify-center">
            <ShareButton />
          </div>
        </div>
      </div>
    </section>
  );
}