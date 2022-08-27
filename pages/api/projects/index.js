import notion from '~/lib/notion'

export default async function handler(req, res) {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PROJECTS_DATABASE,
      filter: {
        property: 'published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'order',
          direction: 'ascending',
        },
      ],
    })
    res.status(200).json(
      (response?.results || []).map((item) => {
        try {
          return {
            title: item.properties.title.title[0].plain_text,
            id: item.id,
            slug: item.properties.slug.rich_text[0]?.plain_text,
            location: item.properties.location.rich_text[0]?.plain_text,
            image:
              item.properties.image?.files[0]?.file?.url ||
              item.properties.image?.files[0]?.external?.url,
            order: item.properties.order?.number,
            featured: item.properties.featured.checkbox,
          }
        } catch (error) {
          console.log(error)
          throw error
        }
      })
    )
  } catch (error) {
    res.status(500).json({ error })
  }
}
