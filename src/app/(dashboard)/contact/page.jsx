import InputField from "@/components/shared/input-field";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-4 w-full md:w-[761px]">
      <InputField
      name='number phone'
      label='Phone Number'
      type='number'
      placeholder='Enter your phone number'
      className='w-full'
      />
      <InputField
      name='Whatsapp Number'
      label='Whatsapp Number'
      type='number'
      placeholder='Enter your Whatsapp Number'
      className='w-full'
      />
      <InputField
      name='email'
      label='E-Mail'
      type='email'
      placeholder='Enter your email'
      className='w-full'
      />
      <InputField
      name="Facebook Page Link"
      label='Facebook Page Link'
      type='text'
      placeholder='Enter your facebook page link'
      className='w-full'
      />
      <InputField
      name='Instagram Page Link'
      label='Instagram Page Link'
      type='text'
      placeholder='Enter your instagram page link'
      className='w-full'
      />
      <InputField
      name="Tiktok account Link"
      label='Tiktok account Link'
      type='text'
      placeholder='Enter your tiktok account link'
      className='w-full'
      />
      <div>
        <Label className="text-sm font-normal text-gray-500 leading-[20.96px]">Location</Label>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13817.146447851928!2d31.26193852462385!3d30.02863421574399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1730122195071!5m2!1sen!2seg"
          width="761"
          height="274"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
