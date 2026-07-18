import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional()
});

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      service: "",
      message: ""
    }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
      toast({
        title: "Request Received!",
        description: "We'll call you shortly to schedule your free estimate.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-secondary gsap-section border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative BG element */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="gsap-fade-up">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready for a Premium <br/>Roofing Experience?
            </h3>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Fill out the form below or call us directly. We'll respond within 30 minutes during normal business hours to schedule your free, no-obligation inspection.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="text-white font-bold mb-1">Call Us 24/7</h5>
                  <p className="text-primary text-xl font-display font-bold">1-800-555-1234</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="text-white font-bold mb-1">Headquarters</h5>
                  <p className="text-muted-foreground">1234 Premium Ave, Suite 100<br/>Metro City, ST 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="text-white font-bold mb-1">Email Us</h5>
                  <p className="text-muted-foreground">info@eliteroof.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="gsap-fade-up">
            <div className="bg-card border-t-4 border-primary rounded-2xl shadow-2xl p-8 md:p-10">
              <h4 className="text-2xl font-display font-bold text-white mb-8">Request Free Estimate</h4>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background/50 border-white/10 text-white placeholder:text-white/30 h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" className="bg-background/50 border-white/10 text-white placeholder:text-white/30 h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-background/50 border-white/10 text-white placeholder:text-white/30 h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Service Needed *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-white/10 text-white h-12">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-popover border-white/10">
                              <SelectItem value="replacement">Roof Replacement</SelectItem>
                              <SelectItem value="repair">Roof Repair</SelectItem>
                              <SelectItem value="storm">Storm Damage / Insurance</SelectItem>
                              <SelectItem value="commercial">Commercial Roofing</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Property Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St, City, State ZIP" className="bg-background/50 border-white/10 text-white placeholder:text-white/30 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Project Details (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us a bit about your roof..." 
                            className="bg-background/50 border-white/10 text-white placeholder:text-white/30 min-h-[100px] resize-y" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-primary hover:bg-orange-500 text-white font-bold text-lg rounded-md tracking-wider uppercase transition-all shadow-lg hover:shadow-primary/25"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                      'Request Free Estimate'
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting this form, you agree to our privacy policy and to receive calls/texts about your project.
                  </p>
                </form>
              </Form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
