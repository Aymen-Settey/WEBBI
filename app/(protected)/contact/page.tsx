"use client";
import React, { useRef } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";

import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContactSchema, SettingsSchema } from "@/schemas";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contact } from "@/actions/contact";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { MessageBox } from "@/components/ui/message";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { UserRole } from "@prisma/client";
import { RoleGate } from "@/components/auth/role-gate";
import { sendVerificationEmail } from "@/lib/mail";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const user = useCurrentUser();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  //   emailjs.init("mgSGqipXc-SBWIrKV");

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: user?.name || "",
      subject: "",
      email: user?.email || "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactSchema>, e: any) => {
    e.preventDefault();
    try {
      startTransition(() => {
        setError(undefined);
        setSuccess(undefined);
      });
      const templateParams = {
        from_name: values.name,
        subject: values.subject,
        reply_to: values.email,
        message: values.message,
      };

      await emailjs.send(
        "service_atsjwxq", // Service ID
        "template_o1uwu2w", // Template ID
        templateParams,
        "mgSGqipXc-SBWIrKV" // Your user ID from EmailJS dashboard
      );
      setSuccess("Email sent successfully!");
      form.reset();
    } catch (error) {
      setError("Failed to send email. Please try again later.");
    }
  };
  return (
    <div className="h-full mt-20 flex items-center justify-center">
      <Card className="w-[700px]   mt-10 mb-10">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">📧 Contact</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Type your subject here..."
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="john.doe@example.com"
                          type="email"
                          disabled={isPending}
                        />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <MessageBox
                          {...field}
                          placeholder="Type your message here..."
                          disabled={isPending}
                          rows={10}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button disabled={isPending} type="submit">
                Send
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
