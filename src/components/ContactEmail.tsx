
interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <div>
    <h1>New message from {name}</h1>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);

export default ContactEmail;
