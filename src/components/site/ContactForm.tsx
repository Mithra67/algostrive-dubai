import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export function ContactForm({ source = "contact_page" }: { source?: string }) {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const payload = {
      name: String(f.get("name") || "").trim(),
      email: String(f.get("email") || "").trim(),
      phone: String(f.get("phone") || "").trim() || null,
      company: String(f.get("company") || "").trim() || null,
      service_interest: String(f.get("service_interest") || "").trim() || null,
      message: String(f.get("message") || "").trim(),
      source,
    };
    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert(payload);
    setLoading(false);
    if (error) {
      console.error(error);
      toast.error("Could not send your request. Please try again.");
      return;
    }
    toast.success("Thanks! Our SAP team will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name *</Label>
          <Input id="name" name="name" placeholder="Jane Doe" required maxLength={200} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Work email *</Label>
          <Input id="email" name="email" type="email" placeholder="jane@company.com" required maxLength={320} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" placeholder="+971 ..." />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Your company" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="service_interest">Service of interest</Label>
        <Input id="service_interest" name="service_interest" placeholder="e.g. SAP BTP, S/4HANA, Cloud Migration" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">How can we help? *</Label>
        <Textarea id="message" name="message" placeholder="Tell us about your project, timeline, and goals." rows={5} required maxLength={5000} />
      </div>
      <Button type="submit" disabled={loading} className="w-full bg-gradient-brand text-brand-foreground hover:opacity-90 md:w-auto">
        {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Request Consultation"}
      </Button>
    </form>
  );
}
