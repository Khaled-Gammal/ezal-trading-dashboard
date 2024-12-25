
import ContactForm from "@/data/contact/contact";
import { GetDataInServerSide } from "@/lib/actions/get-server";
export default async function ContactPage() {
  const contact = await GetDataInServerSide(
    '/dashboard/contact-details/'
  )
  console.log(contact);
  return (
    <ContactForm contact={contact}/>
  )
}
