import { ProjectHero, ContentSection, Page, NotFoundHero } from '~/components'
export default function ProjectPage(props) {
  const hasContent = (props?.data || []).length > 0
  return (
    <Page>
      {hasContent ? (
        <>
          <ProjectHero
            backgroundImage={
              'https://images.pexels.com/photos/12161836/pexels-photo-12161836.jpeg?auto=compress&cs=tinysrgb&dpr=1'
            }
            title={'Apple Brompton Road'}
            subtitle={'London, UK'}
          />
          <ContentSection data={props?.data || []} />
        </>
      ) : (
        <NotFoundHero />
      )}
    </Page>
  )
}
