import { ProjectHero, ContentSection, Page } from '~/components'
export default function Home() {
  return (
    <Page>
      <ProjectHero
        backgroundImage={
          'https://images.unsplash.com/photo-1496564203457-11bb12075d90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1250&q=80'
        }
        title={'Apple Brompton Road'}
        subtitle={'London, UK'}
      />
      <ContentSection>
        <h5>Hello</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          suscipit risus, id tincidunt sem. Duis vitae dui sit amet turpis
          lobortis mollis. Suspendisse viverra a eros sed finibus. Sed pretium
          ligula at imperdiet accumsan. Vestibulum quis orci ut felis porttitor
          tempor eget sit amet libero. Donec et aliquam augue, nec volutpat
          velit. Maecenas luctus hendrerit odio nec interdum. Phasellus erat
          dui, cursus non dolor in, consequat suscipit arcu. Maecenas et massa
          elit. Ut purus metus, tempus at justo rutrum, laoreet rutrum justo.
          Donec eget risus turpis. Integer finibus placerat nunc, id scelerisque
          urna sagittis non. In commodo mi in risus dapibus gravida. Vestibulum
          vulputate ante nunc, et suscipit mi viverra eu. Donec neque ante,
          faucibus quis justo in, tincidunt vehicula libero. Morbi nec neque
          erat. Sed et justo nibh. Pellentesque sed commodo nibh. Quisque
          pellentesque in quam id gravida. Integer erat dolor, vehicula et
          posuere sit amet, suscipit vitae sem. Cras bibendum dolor laoreet urna
          luctus rhoncus. Sed vitae hendrerit sapien. Maecenas enim urna,
          commodo ut condimentum id, facilisis vel orci. In hac habitasse platea
          dictumst. Quisque tellus eros, vestibulum et nunc non, aliquet
          ullamcorper felis. Fusce nec dictum ante, nec aliquam augue. Aliquam
          blandit pulvinar sapien eget condimentum. Donec sodales ac turpis in
          accumsan. In dapibus pellentesque nisl, vitae dapibus enim
          pellentesque ut. Fusce molestie tincidunt arcu, sit amet posuere mi
          posuere eget. Morbi ac pretium purus, id commodo nisi. Ut egestas
          augue odio, ac tincidunt neque blandit sit amet. Morbi faucibus
          placerat arcu eu elementum. Aenean dapibus, eros ut porttitor
          fermentum, lacus sapien volutpat velit, non pellentesque orci ex
          eleifend mi. Sed nisi nisi, vestibulum a lobortis a, posuere nec
          turpis.
        </p>
        <img
          src={
            'https://images.pexels.com/photos/12161836/pexels-photo-12161836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          suscipit risus, id tincidunt sem. Duis vitae dui sit amet turpis
          lobortis mollis. Suspendisse viverra a eros sed finibus. Sed pretium
          ligula at imperdiet accumsan. Vestibulum quis orci ut felis porttitor
          tempor eget sit amet libero. Donec et aliquam augue, nec volutpat
          velit. Maecenas luctus hendrerit odio nec interdum. Phasellus erat
          dui, cursus non dolor in, consequat suscipit arcu. Maecenas et massa
          elit. Ut purus metus, tempus at justo rutrum, laoreet rutrum justo.
          Donec eget risus turpis. Integer finibus placerat nunc, id scelerisque
          urna sagittis non. In commodo mi in risus dapibus gravida. Vestibulum
          vulputate ante nunc, et suscipit mi viverra eu. Donec neque ante,
          faucibus quis justo in, tincidunt vehicula libero. Morbi nec neque
          erat. Sed et justo nibh. Pellentesque sed commodo nibh. Quisque
          pellentesque in quam id gravida. Integer erat dolor, vehicula et
          posuere sit amet, suscipit vitae sem. Cras bibendum dolor laoreet urna
          luctus rhoncus. Sed vitae hendrerit sapien. Maecenas enim urna,
          commodo ut condimentum id, facilisis vel orci. In hac habitasse platea
          dictumst. Quisque tellus eros, vestibulum et nunc non, aliquet
          ullamcorper felis. Fusce nec dictum ante, nec aliquam augue. Aliquam
          blandit pulvinar sapien eget condimentum. Donec sodales ac turpis in
          accumsan. In dapibus pellentesque nisl, vitae dapibus enim
          pellentesque ut. Fusce molestie tincidunt arcu, sit amet posuere mi
          posuere eget.
        </p>
      </ContentSection>
    </Page>
  )
}
