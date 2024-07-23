import sgMail from "@sendgrid/mail";
import emailjs from "@emailjs/browser";

// const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;
sgMail.setApiKey(process.env.SENDGRID_SECOND_API_KEY || "");
export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await sgMail.send({
    from: "messisettey@gmail.com",
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await sgMail.send({
    from: "messisettey@gmail.com",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await sgMail.send({
    from: "messisettey@gmail.com",
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};
// export const sendContactEmail = async (
//   name: string,
//   subject: string,
//   email: string,
//   message: string
// ) => {
//   await sgMail.send({
//     from: "messisettey@gmail.com",
//     to: "aymensettey@gmail.com",
//     subject: subject,
//     html: `<p>${message}</p>`,
//   });
// };
