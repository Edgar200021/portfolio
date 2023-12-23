
import { useTranslation } from 'react-i18next'
import { ContactsSection } from '../../components/ContactsSection/ContactsSection'
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle'
import { SocialList } from '../../components/Social/SocialList'
import { SOCIALS } from '../../constants/constants'

const Contacts = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="max-w-7xl mx-auto px-16 phone:px-4 mb-8">
        <h1 className="text-3xl font-semibold text-white mb-3">
          <span className="text-primary font-semibold">/</span>
          {t('contacts')}
        </h1>
      </div>
      <ContactsSection titleHidden={true} showSupport={true} className="mb-6" />
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-16 phone:px-4 ">
          <SectionTitle hidden={true} title="all-media" className="mb-5" />
          <SocialList iconCount={5} icons={SOCIALS} className='flex gap-3 items-center flex-wrap' />
        </div>
      </section>
    </>
  )
}

export default Contacts